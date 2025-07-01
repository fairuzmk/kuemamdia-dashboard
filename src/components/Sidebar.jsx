import React from 'react'
import { Home, Settings, Users } from 'lucide-react'

const Sidebar = ({ isOpen }) => {
  return (
    <aside className={`bg-gray-800 text-white w-64 h-full p-4 fixed top-0 left-0 z-20 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:block`}>
      <h2 className="text-2xl font-semibold mb-6">Menu</h2>
      <nav className="flex flex-col gap-4">
        <a href="#" className="flex items-center gap-2 hover:text-gray-300"><Home size={20} /> Dashboard</a>
        <a href="#" className="flex items-center gap-2 hover:text-gray-300"><Users size={20} /> Users</a>
        <a href="#" className="flex items-center gap-2 hover:text-gray-300"><Settings size={20} /> Settings</a>
      </nav>
    </aside>
  )
}

export default Sidebar