import { isSpam, sendCollaborationEmail, validateSubmission } from "./_lib/collaborationMail.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Pretend success so bots don't learn the submission was dropped.
  if (isSpam(req.body)) {
    return res.status(200).json({ ok: true });
  }

  const validationError = validateSubmission(req.body);
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  try {
    await sendCollaborationEmail(req.body);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Failed to send collaboration email:", err);
    const status = err.status || 502;
    const message =
      status === 500
        ? err.message
        : "We couldn't send your message right now. Please try again shortly.";
    return res.status(status).json({ error: message });
  }
}
