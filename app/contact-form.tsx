"use client";

import { FormEvent, useMemo, useState } from "react";

const intakeEndpoint = process.env.NEXT_PUBLIC_CUSTOMER_INTAKE_URL ?? "";

type SubmissionState = "idle" | "sending" | "sent" | "error";

function newSubmissionKey() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return `web-${crypto.randomUUID()}`;
  }
  return `web-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export default function ContactForm() {
  const [state, setState] = useState<SubmissionState>("idle");
  const [message, setMessage] = useState("");
  const submissionKey = useMemo(() => newSubmissionKey(), []);
  const endpointReady = intakeEndpoint.startsWith("https://");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    if (!endpointReady) {
      setState("error");
      setMessage("The secure intake endpoint is not configured yet. Please check back shortly.");
      return;
    }

    const form = new FormData(event.currentTarget);
    if (String(form.get("companyWebsite") ?? "").trim()) {
      setState("sent");
      setMessage("Thanks — your request has been received.");
      return;
    }

    const payload = {
      name: String(form.get("name") ?? "").trim(),
      email: String(form.get("email") ?? "").trim(),
      phone: String(form.get("phone") ?? "").trim(),
      message: String(form.get("message") ?? "").trim(),
      source: "superuserholdings.com/contact-form",
      idempotency_key: submissionKey,
    };

    if (!payload.name || !payload.email || !payload.message) {
      setState("error");
      setMessage("Please add your name, email, and a short description of what you need.");
      return;
    }

    setState("sending");
    try {
      const response = await fetch(intakeEndpoint, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result?.ok !== true) {
        throw new Error("intake_failed");
      }
      setState("sent");
      setMessage("Thanks — your request was captured. You should receive a confirmation shortly.");
      event.currentTarget.reset();
    } catch {
      setState("error");
      setMessage("The request could not be sent. Please try again in a moment.");
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="field-grid">
        <label>
          <span>Name</span>
          <input name="name" autoComplete="name" required maxLength={120} />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required maxLength={180} />
        </label>
      </div>
      <label>
        <span>Phone <em>optional</em></span>
        <input name="phone" type="tel" autoComplete="tel" maxLength={40} />
      </label>
      <label>
        <span>What should we help you build or fix?</span>
        <textarea name="message" required minLength={10} maxLength={1800} rows={5} />
      </label>
      <label className="hidden-field" aria-hidden="true">
        <span>Company website</span>
        <input name="companyWebsite" tabIndex={-1} autoComplete="off" />
      </label>
      <button className="button primary" type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Sending..." : "Send secure request"} <span>→</span>
      </button>
      <p className={`form-status ${state === "error" ? "error" : ""}`} role="status">
        {message || "No payment or commitment is required to define the opportunity."}
      </p>
    </form>
  );
}
