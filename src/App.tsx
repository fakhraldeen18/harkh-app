import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignUp from "./Pages/SignUp"
import Home from "./Pages/Home"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
