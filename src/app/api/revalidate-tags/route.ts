import { revalidateTag } from "next/cache";
import { timingSafeEqual } from "node:crypto";

export async function POST(request: Request) {
  const requestId = crypto.randomUUID();
  const expectedSecret = process.env.SANITY_REVALIDATE_TAGS_SECRET;
  const authorization = request.headers.get("authorization");

  console.info("[revalidate-tags] Request received", {
    requestId,
    hasExpectedSecret: Boolean(expectedSecret),
    hasAuthorizationHeader: Boolean(authorization),
  });

  if (!expectedSecret) {
    console.error("[revalidate-tags] Missing server configuration", {
      requestId,
      variable: "SANITY_REVALIDATE_TAGS_SECRET",
    });

    return Response.json({ error: "Server configuration error" }, { status: 500 });
  }

  const expected = Buffer.from(`Bearer ${expectedSecret}`);
  const received = Buffer.from(authorization ?? "");

  const authorized = expected.length === received.length && timingSafeEqual(expected, received);

  console.info("[revalidate-tags] Authentication check", {
    requestId,
    authorized,
    expectedLength: expected.length,
    receivedLength: received.length,
  });

  if (!authorized) {
    console.warn("[revalidate-tags] Unauthorized request", {
      requestId,
    });

    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: { tags?: unknown };

  try {
    body = await request.json();
  } catch {
    console.warn("[revalidate-tags] Invalid JSON payload", {
      requestId,
    });

    return Response.json({ error: "Invalid JSON payload" }, { status: 400 });
  }

  const { tags } = body;

  if (!Array.isArray(tags) || !tags.every((tag) => typeof tag === "string")) {
    console.warn("[revalidate-tags] Invalid tags payload", {
      requestId,
    });

    return Response.json({ error: "`tags` must be an array of strings" }, { status: 400 });
  }

  console.info("[revalidate-tags] Revalidating tags", {
    requestId,
    tagCount: tags.length,
  });

  try {
    for (const tag of tags) {
      revalidateTag(`sanity:${tag}`, { expire: 0 });
    }
  } catch (error) {
    console.error("[revalidate-tags] Revalidation failed", {
      requestId,
      error,
    });

    return Response.json({ error: "Cache revalidation failed" }, { status: 500 });
  }

  console.info("[revalidate-tags] Revalidation successful", {
    requestId,
    tagCount: tags.length,
  });

  return Response.json({
    revalidated: tags,
  });
}
