import Features from "@/components/Features";
import { Footer } from "@/components/FooterSection";
// import Footer from "@/components/FooterSection";
import HeaderPage from "@/components/HeaderPage";
import Navbar from "@/components/Navbar";
import NewsLetter from "@/components/NewsLetter";
import Pricing from "@/components/Pricing";
export default function Home() {
  return (
    <div>
      <Navbar />
      <HeaderPage />
      <Features />
      <Pricing />
      <NewsLetter />
      <Footer />
    </div>
  );
}
