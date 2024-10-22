import "./App.css"
import Header from "./components/HeaderPage"
import Navbar from "./components/Navbar"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Features from "./components/Features";
import TeamSection12 from "./components/TeamCard";
import FooterSection from "./components/FooterSection";
import Pricing from "./components/Pricing";
import NewsLetter from "./components/NewsLetter";
function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <Features />
      <Pricing />
      <NewsLetter />
      <FooterSection />
    </div>
  )
}
export default App
