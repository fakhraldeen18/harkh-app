// import FooterSection from "@/components/Home/layout/FooterSection"
import Features from "@/components/Features"
import HeaderPage from "@/components/HeaderPage"
import Navbar from "@/components/Navbar"
import NewsLetter from "@/components/NewsLetter"
import Pricing from "@/components/Pricing"

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
