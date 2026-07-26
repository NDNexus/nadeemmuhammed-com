export default async function BlogPost({ params }: { params: Promise<{ "post-slug": string }> }) {
  const { "post-slug": postSlug } = await params;

  return (
    <main>
      <h1>Blog Post</h1>
      <p>Slug: {postSlug}</p>
    </main>
  );
}
