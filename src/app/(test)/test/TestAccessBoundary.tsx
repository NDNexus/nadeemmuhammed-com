import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

import TestFooter from "@/Test/components/TestFooter";
import TestHeader from "@/Test/components/TestHeader";

import TestPasswordForm from "./TestPasswordForm";

/**
 * =========================================================
 * TEST ACCESS COOKIE
 * =========================================================
 *
 * Cookie used to remember successful access to the internal
 * test environment.
 *
 * The cookie is scoped to /test so it applies to the entire
 * protected test route tree.
 * =========================================================
 */
const TEST_ACCESS_COOKIE = "test_access";

/**
 * =========================================================
 * ACCESS TOKEN
 * =========================================================
 *
 * Creates the deterministic HMAC token used to validate the
 * test-area access cookie.
 *
 * The actual server secret is never stored in the cookie.
 * =========================================================
 */
function createAccessToken(secret: string) {
  return createHmac("sha256", secret)
    .update("test-area-access")
    .digest("hex");
}

/**
 * =========================================================
 * ACCESS TOKEN VALIDATION
 * =========================================================
 *
 * Compares the browser-provided token against the token
 * expected for the current server secret.
 *
 * timingSafeEqual prevents a direct timing-sensitive
 * comparison once both buffers have been confirmed to have
 * identical lengths.
 * =========================================================
 */
function isValidAccessToken(token: string, secret: string) {
  const expectedToken = createAccessToken(secret);

  const actualBuffer = Buffer.from(token, "utf8");
  const expectedBuffer = Buffer.from(expectedToken, "utf8");

  if (actualBuffer.length !== expectedBuffer.length) {
    return false;
  }

  return timingSafeEqual(actualBuffer, expectedBuffer);
}

type TestAccessBoundaryProps = {
  children: React.ReactNode;
};

/**
 * =========================================================
 * TEST ACCESS BOUNDARY
 * =========================================================
 *
 * Runtime request data is intentionally isolated inside this
 * component.
 *
 * The parent layout wraps this component in <Suspense> so
 * cookies() does not block the route's static shell.
 *
 * This boundary protects every page beneath /test.
 * =========================================================
 */
export default async function TestAccessBoundary({
  children,
}: TestAccessBoundaryProps) {
  const secret = process.env.TEST_PAGE_SECRET;

  if (!secret) {
    throw new Error("TEST_PAGE_SECRET is not configured.");
  }

  const cookieStore = await cookies();
  const accessToken = cookieStore.get(TEST_ACCESS_COOKIE)?.value;

  const isAuthenticated =
    accessToken !== undefined && isValidAccessToken(accessToken, secret);

  if (!isAuthenticated) {
    return <TestPasswordForm />;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <TestHeader />

      <main className="flex-1">{children}</main>

      <TestFooter />
    </div>
  );
}
