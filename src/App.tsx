import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignUp from "./Pages/SignUp"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
