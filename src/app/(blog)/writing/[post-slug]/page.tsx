import { Suspense } from "react";

type BlogPostProps = {
  params: Promise<{
    "post-slug": string;
  }>;
};

async function BlogPostContent({ params }: BlogPostProps) {
  const { "post-slug": postSlug } = await params;

  return (
    <main>
      <h1>Blog Post</h1>
      <p>Slug: {postSlug}</p>
    </main>
  );
}

export default function BlogPostPage({ params }: BlogPostProps) {
  return (
    <Suspense fallback={null}>
      <BlogPostContent params={params} />
    </Suspense>
  );
}
