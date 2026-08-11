"use client";

import { useTransition } from "react";

import { lockTestArea } from "./actions";

/**
 * =========================================================
 * TEST LOCK BUTTON
 * =========================================================
 *
 * Ends the current test-area session.
 *
 * The server action removes the HttpOnly access cookie.
 *
 * After the action completes, a full browser navigation is
 * used intentionally rather than Next.js client-side routing.
 *
 * This guarantees that the protected /test layout is resolved
 * again from the server with the updated authentication state.
 * =========================================================
 */
export default function TestLockButton() {
  const [isPending, startTransition] = useTransition();

  function handleLock() {
    startTransition(async () => {
      await lockTestArea();

      window.location.replace("/test");
    });
  }

  return (
    <button type="button" className="btn btn-secondary" onClick={handleLock} disabled={isPending}>
      {isPending ? "Locking…" : "Lock Test Area"}
    </button>
  );
}
