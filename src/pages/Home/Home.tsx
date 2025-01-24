import Features from "@/components/Home/Features"
// import FooterSection from "@/components/Home/layout/FooterSection"
import HeaderPage from "@/components/Home/HeaderPage"
import Navbar from "@/components/Home/layout/Navbar"
import NewsLetter from "@/components/Home/NewsLetter"
import Pricing from "@/components/Home/Pricing"
import React from "react"

const HomePage: React.FC = () => {
 
  return (
    <div>
      <Navbar />
      <HeaderPage />
      <Features />
      <Pricing />
      <NewsLetter />
      {/* <FooterSection /> */}
    </div>
  )
}
export default HomePage
