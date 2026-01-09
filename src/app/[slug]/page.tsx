import { notFound } from "next/navigation"
import { sanityClient } from "@/lib/sanity.client"
import { singlePostQuery } from "@/lib/sanity.queries"
import { PortableText } from "@portabletext/react"
import HeadingWithAnchor from "@/components/HeadingWithAnchor"

type PageProps = {
    params: Promise<{
        slug: string
    }>
}

/**
 * Portable Text overrides
 * Uses Sanity block `_key` to generate stable, deterministic IDs
 */
const components = {
    block: {
        h2: ({ children, value }: any) => (
            <HeadingWithAnchor
                level={2}
                blockKey={value._key}
            >
                {children}
            </HeadingWithAnchor>
        ),

        h3: ({ children, value }: any) => (
            <HeadingWithAnchor
                level={3}
                blockKey={value._key}
            >
                {children}
            </HeadingWithAnchor>
        ),

        h4: ({ children, value }: any) => (
            <HeadingWithAnchor
                level={4}
                blockKey={value._key}
            >
                {children}
            </HeadingWithAnchor>
        ),
    },
}

export default async function PostPage({ params }: PageProps) {
    const { slug } = await params

    if (!slug) notFound()

    const post = await sanityClient.fetch(singlePostQuery, { slug })
    if (!post) notFound()

    return (
        <main className="container-page">
            <article className="section container-reading">
                <h1 className="heading-1 text-balance">
                    {post.title}
                </h1>

                {post.publishedAt && (
                    <p className="text-sm text-muted">
                        {new Date(post.publishedAt).toDateString()}
                    </p>
                )}

                <div className="reading prose mt-8 text-pretty">
                    <PortableText
                        value={post.body}
                        components={components}
                    />
                </div>

                <p className="text-sm text-muted mt-16">
                    ← <a href="/blog">Back to writing</a>
                </p>
            </article>
        </main>
    )
}
