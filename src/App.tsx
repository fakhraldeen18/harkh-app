import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/Home/Home"
import ProjectsPage from "./pages/Projects"
import Index from "./pages/Projects/index"
import Login from "./pages/Login/LogIn";
import SignUp from "./pages/SignUp/SignUp";
function App() {
  return (
    <Router>
    <Routes>
       <Route path="/login" element={<Login />} />
       <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/index" element={<Index/>} />
    </Routes>
  </Router>
  )
}
export default App
