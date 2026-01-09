import Link from "next/link";
import { sanityClient } from "@/lib/sanity.client";
import { postsQuery } from "@/lib/sanity.queries";

type Post = {
    _id: string;
    title: string;
    excerpt?: string;
    publishedAt?: string;
    slug: string;
};

export default async function BlogIndexPage() {
    const posts: Post[] = await sanityClient.fetch(postsQuery);

    return (
        <main className="container-page">
            {/* Page intro */}
            <section className="section container-reading">
                <h1 className="heading-1">My Writing</h1>

                <p className="text-muted reading">
                    Thoughts on software, design, faith, and building things that age well.
                </p>
            </section>

            {/* Blog list */}
            <section className="section container-reading">
                <ul className="space-y-6">
                    {posts.map((post) => (
                        <li key={post._id}>
                            <article className="card">
                                <h2 className="heading-2">
                                    <Link href={`/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h2>

                                {post.publishedAt && (
                                    <p className="text-sm text-muted">
                                        {new Date(post.publishedAt).toDateString()}
                                    </p>
                                )}

                                {post.excerpt && (
                                    <p className="reading">
                                        {post.excerpt}
                                    </p>
                                )}
                            </article>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}
