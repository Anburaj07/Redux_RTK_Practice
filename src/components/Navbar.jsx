import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex items-center justify-around p-3 bg-[#8b1033] text-xl">
        <Link >G.H Hospital</Link>
        <Link>Onboard</Link>
        <Link>Dashboard</Link>
    </div>
  )
}

export default Navbar