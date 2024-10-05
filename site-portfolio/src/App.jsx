import { Outlet } from "react-router-dom"
import Header from "./components/Header"

const solutions = [{ name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: null }]
const callsToAction = [
  {
    name: 'Watch demo', href: '#',}]

export default function App() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}


