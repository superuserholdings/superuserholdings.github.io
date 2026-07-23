"use client";

import { FormEvent, useState } from "react";

const DEFAULT_ENDPOINT = "https://supercore.superuserholdings.com/customer-intake/submissions";

type SubmissionState =
  | { status: "idle"; message: string; reference?: never }
  | { status: "sending"; message: string; reference?: never }
  | { status: "success"; message: string; reference: string }
  | { status: "error"; message: string; reference?: never };

export function ContactForm() {
  const endpoint = process.env.NEXT_PUBLIC_CUSTOMER_INTAKE_ENDPOINT || DEFAULT_ENDPOINT;
  const [state, setState] = useState<SubmissionState>({
    status: "idle",
    message: "No payment or commitment is required to define the opportunity.",
  });

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setState({ status: "sending", message: "Sending your request…" });

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      message: String(formData.get("message") || ""),
      company: String(formData.get("company") || ""),
      source: "superuserholdings.com",
    };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result?.ok !== true || !result?.submission_id) {
        throw new Error("The request could not be captured.");
      }
      form.reset();
      setState({
        status: "success",
        message: "Request captured. We sent a confirmation and queued it for owner review.",
        reference: result.submission_id,
      });
    } catch {
      setState({
        status: "error",
        message: "Something blocked the request. Please try again, or contact us directly if it continues.",
      });
    }
  }

  return (
    <form className="contact-form" onSubmit={submit} data-customer-intake-form="supercore-3.1">
      <label>
        <span>Name</span>
        <input name="name" autoComplete="name" required maxLength={160} />
      </label>
      <label>
        <span>Email</span>
        <input name="email" type="email" autoComplete="email" required maxLength={320} />
      </label>
      <label>
        <span>Phone <small>optional</small></span>
        <input name="phone" autoComplete="tel" maxLength={80} />
      </label>
      <label className="honeypot" aria-hidden="true">
        <span>Company</span>
        <input name="company" tabIndex={-1} autoComplete="off" />
      </label>
      <label className="full">
        <span>What do you want fixed or built?</span>
        <textarea name="message" required maxLength={8000} rows={5} />
      </label>
      <button className="button primary" type="submit" disabled={state.status === "sending"}>
        {state.status === "sending" ? "Sending…" : "Start the intake"} <span>↗</span>
      </button>
      <p className={`form-status ${state.status}`} role="status">
        {state.message}
        {state.reference ? <strong> Reference: {state.reference}</strong> : null}
      </p>
    </form>
  );
}
