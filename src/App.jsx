import Footer from "./components/Footer"
import Header from "./components/Header"
import { Outlet } from "react-router-dom"


export default function App() {

  return (
    <div className="min-h-screen flex flex-col">
        <Header />
        <Outlet />
      <Footer />
    </div>
  )
}


