import Header from "@layout/Header";
import Footer from "@layout/Footer";

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <p>Test Single Blog Post Layout</p>
      {children}
      <Footer />
    </div>
  );
}
