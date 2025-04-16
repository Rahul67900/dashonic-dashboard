import { Home, BarChart2, Settings, Users } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { name: 'Dashboard', icon: <Home size={18} />, path: '/' },
  { name: 'Analytics', icon: <BarChart2 size={18} />, path: '/analytics' },
  { name: 'Users', icon: <Users size={18} />, path: '/users' },
  { name: 'Settings', icon: <Settings size={18} />, path: '/settings' },
]

export default function Sidebar() {
  const location = useLocation()
  
  return (
    <aside className="w-64 h-screen bg-[#2a2f36] text-white fixed top-0 left-0 flex flex-col p-4 border-r border-gray-700">
      <h1 className="text-2xl font-bold mb-8 text-center">Dashonic</h1>
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-primary/20 transition ${
              location.pathname === item.path ? 'bg-primary/30' : ''
            }`}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}
