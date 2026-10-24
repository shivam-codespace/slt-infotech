import nodemailer from "nodemailer";

const REQUIRED_ENV = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "MAIL_TO"];

// Upper bounds for each field, matching the limits on the website form.
const FIELD_LIMITS = {
  name: 120,
  email: 254,
  company: 160,
  phone: 40,
  projectType: 400,
  budget: 60,
  timeline: 60,
  preferredTime: 200,
  message: 5000,
};

export function getMissingEnv() {
  return REQUIRED_ENV.filter((key) => !process.env[key]);
}

export function getTransporter() {
  if (getMissingEnv().length) return null;
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const singleLine = (value) => String(value).replace(/[\r\n]+/g, " ").trim();

// The form includes a hidden "website" field that only bots fill in.
export function isSpam(body) {
  return Boolean(body && typeof body.website === "string" && body.website.trim());
}

export function validateSubmission(body) {
  const { name, email, message } = body || {};
  if (!name || !email || !message) {
    return "Name, email, and project details are required.";
  }
  for (const [field, max] of Object.entries(FIELD_LIMITS)) {
    const value = body[field];
    if (value == null || value === "") continue;
    if (typeof value !== "string") return "Please check the form and try again.";
    if (value.length > max) return `Please shorten the ${field === "projectType" ? "services" : field} field.`;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Please provide a valid email address.";
  }
  return null;
}

export async function sendCollaborationEmail(body) {
  const transporter = getTransporter();
  if (!transporter) {
    throw Object.assign(new Error("Mail is not configured on the server yet."), { status: 500 });
  }

  const { name, email, company, phone, projectType, budget, timeline, preferredTime, message } = body;
  const mailFrom = process.env.MAIL_FROM || process.env.SMTP_USER;
  const subject = `New collaboration inquiry — ${singleLine(name)}${company ? ` (${singleLine(company)})` : ""}`;

  const details = [
    `Name: ${name}`,
    `Email: ${email}`,
    company && `Company: ${company}`,
    phone && `Phone: ${phone}`,
    projectType && `Services: ${projectType}`,
    budget && `Budget: ${budget}`,
    timeline && `Timeline: ${timeline}`,
    preferredTime && `Preferred call time: ${preferredTime}`,
  ].filter(Boolean);
  const text = `${details.join("\n")}\n\nMessage:\n${message}`;

  const html = `
    <h2>New collaboration inquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
    ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
    ${projectType ? `<p><strong>Services:</strong> ${escapeHtml(projectType)}</p>` : ""}
    ${budget ? `<p><strong>Budget:</strong> ${escapeHtml(budget)}</p>` : ""}
    ${timeline ? `<p><strong>Timeline:</strong> ${escapeHtml(timeline)}</p>` : ""}
    ${preferredTime ? `<p><strong>Preferred call time:</strong> ${escapeHtml(preferredTime)}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
  `;

  await transporter.sendMail({
    from: { name: "SLT Info Tech Website", address: mailFrom },
    to: process.env.MAIL_TO,
    replyTo: { name: singleLine(name), address: email },
    subject,
    text,
    html,
  });
}
