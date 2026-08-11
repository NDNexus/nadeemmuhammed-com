"use client";

import { useActionState } from "react";

import { unlockTestArea, type TestAccessState } from "./actions";

const initialState: TestAccessState = {
  error: null,
};

/**
 * =========================================================
 * TEST PASSWORD FORM
 * =========================================================
 *
 * Password gate for the internal test environment.
 *
 * The form submits to a Server Action so the password is
 * validated on the server.
 *
 * Client-side state is used only for displaying the result
 * of that server-side validation and the pending state.
 * =========================================================
 */
export default function TestPasswordForm() {
  const [state, formAction, isPending] = useActionState(unlockTestArea, initialState);

  return (
    <main className="test-password">
      <div className="test-password__card">
        <div className="test-password__header">
          <p className="text-overline">Private Area</p>

          <h1 className="heading-lg">Test Environment</h1>

          <p className="text-body">
            This area is reserved for internal development and integration testing.
          </p>
        </div>

        <form action={formAction} className="test-password__form">
          <div className="form-field">
            <label htmlFor="test-password" className="form-label">
              Password
            </label>

            <input
              id="test-password"
              name="password"
              type="password"
              className={`form-input ${state.error ? "is-error" : ""}`}
              autoComplete="current-password"
              autoFocus
              aria-invalid={state.error ? true : undefined}
              aria-describedby={state.error ? "test-password-error" : undefined}
              disabled={isPending}
              required
            />

            {state.error ? (
              <p id="test-password-error" className="form-error" role="alert">
                {state.error}
              </p>
            ) : null}
          </div>

          <button type="submit" className="btn btn-primary" disabled={isPending}>
            {isPending ? "Checking…" : "Continue"}
          </button>
        </form>
      </div>
    </main>
  );
}
