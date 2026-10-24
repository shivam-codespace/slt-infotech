import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { isSpam, sendCollaborationEmail, validateSubmission, getMissingEnv } from "../api/_lib/collaborationMail.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(express.json({ limit: "32kb" }));

app.post("/api/start-collaboration", async (req, res) => {
  // Pretend success so bots don't learn the submission was dropped.
  if (isSpam(req.body)) {
    return res.json({ ok: true });
  }

  const validationError = validateSubmission(req.body);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  try {
    await sendCollaborationEmail(req.body);
    res.json({ ok: true });
  } catch (err) {
    console.error("Failed to send collaboration email:", err);
    const status = err.status || 502;
    const message =
      status === 500 ? err.message : "We couldn't send your message right now. Please try again shortly.";
    res.status(status).json({ error: message });
  }
});

const distDir = path.join(__dirname, "..", "dist");
app.use(express.static(distDir));
app.get(/^(?!\/api).*/, (req, res, next) => {
  res.sendFile(path.join(distDir, "index.html"), (err) => {
    if (err) next();
  });
});

app.listen(PORT, () => {
  const missingEnv = getMissingEnv();
  if (missingEnv.length) {
    console.warn(
      `[mail] SMTP is not fully configured (missing: ${missingEnv.join(", ")}). ` +
        "The /api/start-collaboration endpoint will return an error until .env is set."
    );
  }
  console.log(`Server listening on http://localhost:${PORT}`);
});
