export default function HomePage() {
  return (
    <div className="container-page">
      
      {/* Hero */}
      <section className="section">
        <h1 className="text-4xl font-semibold text-balance">
          Calm, intentional websites for serious businesses.
        </h1>

        <p className="reading text-lg text-muted container-reading mt-4">
          I design and build fast, reliable web experiences for founders and teams
          who value clarity, performance, and long-term thinking — not shortcuts.
        </p>
      </section>

      {/* About */}
      <section className="section container-reading reading">
        <h2 className="text-2xl font-semibold font-sans">
          About
        </h2>

        <p>
          I’m Nadeem, a developer focused on building clean, purposeful software.
          I prefer working close to fundamentals and designing systems that age well.
        </p>

        <blockquote>
          Calm software doesn’t try to impress. It tries to respect attention.
        </blockquote>

        <p>
          This website is built from scratch using modern web technologies.
          I’m gradually replacing bloated, plugin-heavy systems with simpler,
          more reliable foundations — both for myself and for clients.
        </p>
      </section>

    </div>
  );
}
