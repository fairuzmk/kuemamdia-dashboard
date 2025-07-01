import React from 'react'
import { Menu } from 'lucide-react'

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="w-full bg-white shadow px-4 py-3 flex justify-between items-center fixed z-10">
      <div className="flex items-center gap-2">
        <button onClick={toggleSidebar} className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
      </div>
      <div className="text-sm text-gray-600">Welcome, Admin</div>
    </nav>
  )
}

export default Navbar