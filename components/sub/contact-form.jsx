"use client";

import { useRef, useState } from "react";

import { cn } from "@/lib/utils";
import {
  BUDGET_OPTIONS,
  INQUIRY_SERVICE_OPTIONS,
  STUDIO,
  TIMELINE_OPTIONS,
} from "@/constants";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const maxBriefLength = 1200;

export const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: INQUIRY_SERVICE_OPTIONS[0],
    budget: BUDGET_OPTIONS[0],
    timeline: TIMELINE_OPTIONS[0],
    brief: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const briefRef = useRef(null);

  const validate = () => {
    const next = {};
    if (!form.name.trim()) {
      next.name = "Please share your name so we can address you properly.";
    }
    if (!form.email.trim()) {
      next.email = "A working email is required.";
    } else if (!emailRegex.test(form.email.trim())) {
      next.email = "That does not look like a valid email address.";
    }
    if (!form.brief.trim()) {
      next.brief = "A short brief helps us understand the project.";
    } else if (form.brief.trim().length < 12) {
      next.brief = "Please add a few more details about the project.";
    }
    return next;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setStatus("error");
      setStatusMessage("Please fix the highlighted fields.");
      if (next.name) nameRef.current?.focus();
      else if (next.email) emailRef.current?.focus();
      else briefRef.current?.focus();
      return;
    }

    const subject = encodeURIComponent(
      `New inquiry — ${form.service} (${form.budget} / ${form.timeline})`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.name.trim()}`,
        `Email: ${form.email.trim()}`,
        `Company: ${form.company.trim() || "Not provided"}`,
        `Service interest: ${form.service}`,
        `Budget: ${form.budget}`,
        `Timeline: ${form.timeline}`,
        "",
        "Project brief:",
        form.brief.trim(),
        "",
        "— Sent from the Syntharaa inquiry form",
      ].join("\n"),
    );

    setStatus("draft-ready");
    setStatusMessage(
      "We attempted to open your email client. Review and send the draft there, or use the direct email link below.",
    );
    window.location.href = `mailto:${STUDIO.email}?subject=${subject}&body=${body}`;
  };

  const updateField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: "" }));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex min-w-0 max-w-full flex-col gap-5"
    >
      <div className="grid min-w-0 gap-5 sm:grid-cols-2">
        <label className="flex min-w-0 flex-col">
          <span className="field-label">
            Name <span aria-hidden className="text-burgundy">*</span>
          </span>
          <input
            ref={nameRef}
            id="inquiry-name"
            type="text"
            name="name"
            autoComplete="name"
            required
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="form-field"
            placeholder="Ava Chen"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <span id="name-error" className="mt-2 text-sm text-burgundy">
              {errors.name}
            </span>
          )}
        </label>

        <label className="flex min-w-0 flex-col">
          <span className="field-label">
            Email <span aria-hidden className="text-burgundy">*</span>
          </span>
          <input
            ref={emailRef}
            id="inquiry-email"
            type="email"
            name="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="form-field"
            placeholder="ava@company.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <span id="email-error" className="mt-2 text-sm text-burgundy">
              {errors.email}
            </span>
          )}
        </label>
      </div>

      <label className="flex min-w-0 flex-col">
        <span className="field-label">Company</span>
        <input
          type="text"
          name="company"
          autoComplete="organization"
          value={form.company}
          onChange={(event) => updateField("company", event.target.value)}
          className="form-field"
          placeholder="Optional"
        />
      </label>

      <div className="grid min-w-0 gap-5 md:grid-cols-3">
        <label className="flex min-w-0 flex-col">
          <span className="field-label">Service interest</span>
          <select
            name="service"
            value={form.service}
            onChange={(event) => updateField("service", event.target.value)}
            className="form-field"
          >
            {INQUIRY_SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="flex min-w-0 flex-col">
          <span className="field-label">Budget range</span>
          <select
            name="budget"
            value={form.budget}
            onChange={(event) => updateField("budget", event.target.value)}
            className="form-field"
          >
            {BUDGET_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="flex min-w-0 flex-col">
          <span className="field-label">Timeline</span>
          <select
            name="timeline"
            value={form.timeline}
            onChange={(event) => updateField("timeline", event.target.value)}
            className="form-field"
          >
            {TIMELINE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="flex min-w-0 flex-col">
        <span className="field-label">
          Project brief <span aria-hidden className="text-burgundy">*</span>
        </span>
        <textarea
          ref={briefRef}
          id="inquiry-brief"
          name="brief"
          rows={5}
          required
          minLength={12}
          maxLength={maxBriefLength}
          value={form.brief}
          onChange={(event) => updateField("brief", event.target.value)}
          className="form-field resize-y"
          placeholder="Tell us about the project, goals, and any constraints."
          aria-invalid={!!errors.brief}
          aria-describedby={errors.brief ? "brief-error brief-count" : "brief-count"}
        />
        <span
          id="brief-count"
          className="mt-2 text-right text-xs text-muted"
        >
          {form.brief.length}/{maxBriefLength} characters
        </span>
        {errors.brief && (
          <span id="brief-error" className="mt-1 text-sm text-burgundy">
            {errors.brief}
          </span>
        )}
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" className="button-primary w-full sm:w-auto sm:shrink-0">
          Prepare email draft
        </button>
        <p
          role="status"
          aria-live="polite"
          className={cn(
            "min-w-0 text-sm [overflow-wrap:anywhere]",
            status === "error" ? "text-burgundy" : "text-muted",
          )}
        >
          {status === "idle" &&
            "We will prepare a pre-filled email draft in your mail client."}
          {statusMessage}
        </p>
      </div>

      <p className="min-w-0 text-xs leading-relaxed text-muted [overflow-wrap:anywhere]">
        By submitting, you agree to be contacted by email. This form opens your
        mail client with a draft addressed to{" "}
        <a
          className="font-semibold text-maroon underline underline-offset-4 [overflow-wrap:anywhere]"
          href={`mailto:${STUDIO.email}`}
        >
          {STUDIO.email}
        </a>
        . No message is stored or sent automatically by this site.
      </p>
    </form>
  );
};
