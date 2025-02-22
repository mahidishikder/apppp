import { Outlet } from "react-router-dom"

import Navbar from "../components/Navber/Navber"
import Footer from "../components/Footer/Footer"

function Root() {
  return (
    <div>
       <Navbar></Navbar>
        <Outlet></Outlet>
      <Footer></Footer>
  

    </div>
  )
}

export default Root