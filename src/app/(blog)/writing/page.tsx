import Footer from "@layout/Footer";
import Header from "@layout/Header";

import { getPosts } from "@/sanity/lib/fetch/posts";

import PostCard from "@/components/writing/PostCard";

export default async function WritingPage() {
  const posts = await getPosts();

  console.dir(posts, { depth: null });

  return (
    <>
      <Header />

      <main>
        {/* =========================================
            WRITING INTRO
        ========================================= */}
        <section className="section-sm">
          <div className="container">
            <h1 className="heading-lg">Writing</h1>

            <p>Thoughts on digital systems, development, business, and technology.</p>
          </div>
        </section>

        {/* =========================================
            POSTS
        ========================================= */}
        <section className="section">
          <div className="container">
            <div className="grid-md gap-lg grid">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
