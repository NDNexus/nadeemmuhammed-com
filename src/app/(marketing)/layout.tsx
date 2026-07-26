import Header from "@layout/Header";
import Footer from "@layout/Footer";

type MarketingLayoutProps = {
  children: React.ReactNode;
};

export default function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <>
      <Header />

      <main>{children}</main>
      <Footer />
    </>
  );
}
