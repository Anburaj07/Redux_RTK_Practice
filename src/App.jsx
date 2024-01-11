import { useSelector } from "react-redux"
import AllRoutes from "./components/AllRoutes"
import Navbar from "./components/Navbar"

function App() {
const userData=useSelector((store)=>store.login)
const user=userData.user;
  console.log('user:', user,userData.status)
  return (
    <div className="bg-[#ef97b0] pb-5">
      <Navbar/>
      <AllRoutes/>
    </div>
  )
}

export default App
