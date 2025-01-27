import { Button } from "@/components/ui/button";
import Features from "@/components/Features";
import { Footer } from "@/components/FooterSection";
// import Footer from "@/components/FooterSection";
import HeaderPage from "@/components/HeaderPage";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import NewsLetter from "@/components/NewsLetter";
import Pricing from "@/components/Pricing";

export default function Home() {
    const logoUrl = "/assets/images/Harkh.png";

  return (
      <div>
        <Navbar />
        <HeaderPage />
        <Features />
        
        <Pricing />
        {/* <NewsLetter /> */}
      <Footer logoUrl={logoUrl} />
      </div>
  );
}
