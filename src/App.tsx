import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardLayout from "./pages/Dashboard/layout"
import DashboardPage from "./pages/Dashboard/page"
import Profilepage from "./pages/Dashboard/Profile/ProfilePage"
import HomePage from "./pages/Home/Home"

function App() {
  return (
    <Router>
    <Routes>
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/" element={<HomePage />} />
      <Route
          path="/dashboard/*"
          element={
            <DashboardLayout>
             
              <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="profile" element={<Profilepage />} />
              </Routes>

            </DashboardLayout>
          }
        />
    </Routes>
  </Router>
  )
}
export default App
