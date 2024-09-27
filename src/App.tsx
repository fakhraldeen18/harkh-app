import "./App.css"
import Header from "./components/HeaderPage"
import Navbar from "./components/Navbar"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Features from "./components/Features";
import TeamSection12 from "./components/TeamCard";
function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <Features />
      <TeamSection12 />
    </div>
  )
}
export default App
