"use server";

import { createHmac } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const TEST_ACCESS_COOKIE = "test_access";

export type TestAccessState = {
  error: string | null;
};

/**
 * =========================================================
 * ACCESS TOKEN
 * =========================================================
 *
 * Creates the deterministic token stored in the protected
 * area's HttpOnly access cookie.
 *
 * The actual server secret is never exposed to the browser.
 * =========================================================
 */
function createAccessToken(secret: string) {
  return createHmac("sha256", secret).update("test-area-access").digest("hex");
}

/**
 * =========================================================
 * UNLOCK TEST AREA
 * =========================================================
 *
 * Server Action used by the test-area password form.
 *
 * Password validation happens entirely on the server.
 *
 * Successful authentication creates a short-lived HttpOnly
 * cookie and redirects the user into the test area.
 *
 * Failed authentication returns a user-safe error message
 * without revealing whether configuration or credentials
 * were responsible for the failure.
 * =========================================================
 */
export async function unlockTestArea(
  _previousState: TestAccessState,
  formData: FormData
): Promise<TestAccessState> {
  const password = String(formData.get("password") ?? "");

  const expectedPassword = process.env.TEST_PAGE_PASSWORD;
  const secret = process.env.TEST_PAGE_SECRET;

  /**
   * Fail safely if the protected area has not been configured.
   */
  if (!expectedPassword || !secret) {
    return {
      error: "The private test area is temporarily unavailable.",
    };
  }

  /**
   * Do not trim passwords.
   *
   * Passwords should be compared exactly as entered.
   */
  if (!password) {
    return {
      error: "Please enter the password.",
    };
  }

  /**
   * Keep authentication errors intentionally generic.
   *
   * This prevents revealing unnecessary information about
   * the authentication configuration.
   */
  if (password !== expectedPassword) {
    return {
      error: "Incorrect password. Please try again.",
    };
  }

  const accessToken = createAccessToken(secret);

  const cookieStore = await cookies();

  cookieStore.set(TEST_ACCESS_COOKIE, accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/test",
    maxAge: 60 * 60 * 8,
  });

  redirect("/test");
}

/**
 * =========================================================
 * LOCK TEST AREA
 * =========================================================
 *
 * Removes the test-area access cookie and returns the user
 * to the protected login screen.
 * =========================================================
 */
export async function lockTestArea() {
  const cookieStore = await cookies();

  cookieStore.set(TEST_ACCESS_COOKIE, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/test",
    expires: new Date(0),
  });

  revalidatePath("/test", "layout");

  return { success: true };
}
