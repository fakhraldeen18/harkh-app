import "./App.css"
import { AppSidebar } from "@/components/layout/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardLayout from "./page/dashboard/layout"
import DashboardPage from "./page/dashboard/page"
import Profilepage from "./page/dashboard/profile/page"

function App() {
  return (
    <Router>
    <Routes>
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/" element={<HomePage />} /> */}
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
