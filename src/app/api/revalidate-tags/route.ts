import { revalidateTag } from "next/cache";
import { timingSafeEqual } from "node:crypto";

export async function POST(request: Request) {
  const expectedSecret = process.env.SANITY_REVALIDATE_TAGS_SECRET;
  const authorization = request.headers.get("authorization");

  if (!expectedSecret) {
    return Response.json({ error: "Server configuration error" }, { status: 500 });
  }

  const expected = Buffer.from(`Bearer ${expectedSecret}`);
  const received = Buffer.from(authorization ?? "");

  if (expected.length !== received.length || !timingSafeEqual(expected, received)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { tags } = (await request.json()) as {
    tags?: string[];
  };

  if (!Array.isArray(tags) || !tags.every((tag) => typeof tag === "string")) {
    return Response.json({ error: "`tags` must be an array of strings" }, { status: 400 });
  }

  for (const tag of tags) {
    revalidateTag(`sanity:${tag}`, { expire: 0 });
  }

  return Response.json({
    revalidated: tags,
  });
}
