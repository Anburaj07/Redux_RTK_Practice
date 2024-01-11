import { useSelector } from "react-redux"
import AllRoutes from "./components/AllRoutes"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="bg-[#ef97b0] pb-10 h-lvh">
      <Navbar/>
      <AllRoutes/>
    </div>
  )
}

export default App
