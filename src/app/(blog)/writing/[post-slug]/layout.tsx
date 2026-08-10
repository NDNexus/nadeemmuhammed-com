import Header from "@layout/Header";
import Footer from "@layout/Footer";

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Header />

      {children}

      <Footer />
    </div>
  );
}
