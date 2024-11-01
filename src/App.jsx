import Footer from "./components/Footer"
import Header from "./components/Header"
import { Outlet } from "react-router-dom"


export default function App() {

  return (
      <div>
    <div className="min-h-screen flex flex-col">
      <Header />
      <Outlet />
    </div>
      <Footer className="absolute sticky-bottom" />
    </div>
  )
}


