"use client";

import { useActionState, useEffect, useState } from "react";
import { submitContactForm, type ContactFormState } from "./actions";

const initialState: ContactFormState = {
  success: false,
};

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);

  const [dismissedResultId, setDismissedResultId] = useState<string | undefined>();

  useEffect(() => {
    if (!state.success || !state.resultId) return;

    const timeout = setTimeout(() => {
      setDismissedResultId(state.resultId);
    }, 10000);

    return () => clearTimeout(timeout);
  }, [state.success, state.resultId]);

  const showStatus = state.message && state.resultId !== dismissedResultId;

  return (
    <>
      <form
        key={state.resultId ?? "initial"}
        action={formAction}
        className="gap-lg grid md:grid-cols-2"
      >
        {/** Name */}

        <div className="form-field">
          <label className="form-label" htmlFor="name">
            Name
          </label>

          <input
            className="form-input"
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            minLength={2}
            maxLength={100}
            required
            defaultValue={state.values?.name ?? ""}
            aria-invalid={state.errors?.name ? true : undefined}
            aria-describedby={state.errors?.name ? "name-error" : undefined}
          />

          {state.errors?.name && (
            <p className="form-error" id="name-error">
              {state.errors.name[0]}
            </p>
          )}
        </div>

        {/** Email */}

        <div className="form-field">
          <label className="form-label" htmlFor="email">
            Email
          </label>

          <input
            className="form-input"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            required
            defaultValue={state.values?.email ?? ""}
            aria-invalid={state.errors?.email ? true : undefined}
            aria-describedby={state.errors?.email ? "email-error" : undefined}
          />

          {state.errors?.email && (
            <p className="form-error" id="email-error">
              {state.errors.email[0]}
            </p>
          )}
        </div>

        {/** Business */}

        <div className="form-field">
          <label className="form-label" htmlFor="company">
            Business / Company
            <span className="text-subtle"> (optional)</span>
          </label>

          <input
            className="form-input"
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            maxLength={150}
            defaultValue={state.values?.company ?? ""}
            aria-invalid={state.errors?.company ? true : undefined}
            aria-describedby={state.errors?.company ? "company-error" : undefined}
          />
          {state.errors?.company && (
            <p className="form-error" id="company-error">
              {state.errors.company[0]}
            </p>
          )}
        </div>

        {/** Website */}

        <div className="form-field">
          <label className="form-label" htmlFor="website">
            Website
            <span className="text-subtle"> (optional)</span>
          </label>

          <input
            className="form-input"
            id="website"
            name="website"
            type="url"
            inputMode="url"
            autoComplete="url"
            maxLength={2048}
            defaultValue={state.values?.website ?? ""}
            placeholder="https://example.com"
            aria-invalid={state.errors?.website ? true : undefined}
            aria-describedby={state.errors?.website ? "website-error" : undefined}
          />
          {state.errors?.website && (
            <p className="form-error" id="website-error">
              {state.errors.website[0]}
            </p>
          )}
        </div>

        {/** Service */}

        <div className="form-field">
          <label className="form-label" htmlFor="service">
            What can I help you with?
          </label>

          <select
            className="form-select"
            id="service"
            name="service"
            defaultValue={state.values?.service ?? ""}
            required
          >
            <option value="" disabled>
              Select an option
            </option>

            <option value="strategy-consulting">Digital Strategy &amp; Consulting</option>

            <option value="websites">Websites &amp; Digital Experiences</option>

            <option value="systems-workflows">Systems &amp; Workflow Improvement</option>

            <option value="ongoing-support">Ongoing Support &amp; Improvement</option>

            <option value="not-sure">I&rsquo;m not sure yet</option>

            <option value="other">Something else</option>
          </select>
        </div>

        {/** Timeline */}

        <div className="form-field">
          <label className="form-label" htmlFor="timeline">
            When are you looking to get started?
          </label>

          <select
            className="form-select"
            id="timeline"
            name="timeline"
            defaultValue={state.values?.timeline ?? ""}
            required
          >
            <option value="" disabled>
              Select an option
            </option>

            <option value="asap">As soon as possible</option>

            <option value="1-3-months">Within 1–3 months</option>

            <option value="3-6-months">Within 3–6 months</option>

            <option value="exploring">I&rsquo;m just exploring</option>

            <option value="not-sure">I&rsquo;m not sure yet</option>
          </select>
        </div>

        {/** Message */}

        <div className="form-field md:col-span-2">
          <label className="form-label" htmlFor="message">
            Tell me about what you&rsquo;re trying to improve.
          </label>

          <textarea
            className="form-textarea"
            id="message"
            name="message"
            rows={7}
            minLength={20}
            maxLength={5000}
            required
            defaultValue={state.values?.message ?? ""}
            aria-invalid={state.errors?.message ? true : undefined}
            aria-describedby={state.errors?.message ? "message-error" : undefined}
          />
          {state.errors?.message && (
            <p className="form-error" id="message-error">
              {state.errors.message[0]}
            </p>
          )}
        </div>

        {/** Submit */}

        <div className="md:col-span-2">
          <button className="btn btn-primary" type="submit" disabled={pending}>
            {pending ? "Sending..." : "Send Enquiry"}
          </button>
        </div>
      </form>

      {showStatus && (
        <div
          className={`form-status ${state.success ? "form-status-success" : "form-status-error"}`}
          role="status"
        >
          <p>{state.message}</p>
        </div>
      )}
    </>
  );
}
