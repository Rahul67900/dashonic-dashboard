import { Outlet, Link } from 'react-router-dom'
import { Bell, Settings, Search, ChevronDown } from 'lucide-react'

export default function Layout() {
  return (
    <div className="flex h-screen bg-gray-100 text-gray-900 overflow-hidden">

      <aside className="w-64 bg-[#2a2f36] text-white p-6 overflow-y-auto border-r border-gray-700">
        <h1 className="text-2xl font-bold text-white mb-8 text-center"> RoyalX</h1>
        <nav className="space-y-3">
          {[
            { name: 'Dashboard', path: '/dashboard' },
            { name: 'Analytics', path: '/analytics' },
            { name: 'Settings', path: '/settings' },
            { name: 'Chat', path: '/chat' },
            { name: 'Email', path: '/email' },
            { name: 'Authentication', path: '/authentication' },
            { name: 'User Management', path: '/user-management' },
            { name: 'Access Control', path: '/access-control' },
            { name: 'System Settings', path: '/system-settings' },
            { name: 'Integrations', path: '/integrations' },
            { name: 'Reports', path: '/reports' },
            { name: 'Notifications', path: '/notifications' },
            { name: 'Audit Trail', path: '/audit-trail' },
            { name: 'Data Security', path: '/data-security' },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block text-sm font-medium hover:text-blue-400 transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="h-16 bg-white border-b px-6 flex items-center justify-between relative">
          {/* Left: Categories Dropdown */}
          <div className="relative group">
            <button className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
              Categories <ChevronDown className="ml-1 w-4 h-3" />
            </button>
            <div className="absolute top-10 left-0 z-50 hidden group-hover:grid grid-cols-4 gap-6 w-[650px] p-6 bg-white shadow-xl rounded-lg">
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Restaurant</h4>
                <ul className="text-sm space-y-1">
                  <li className="hover:text-blue-500 cursor-pointer">Dining</li>
                  <li className="hover:text-blue-500 cursor-pointer">Takeout</li>
                  <li className="hover:text-blue-500 cursor-pointer">Reservation</li>
                  <li className="hover:text-blue-500 cursor-pointer">Customer Service</li>
                  <li className="hover:text-blue-500 cursor-pointer">Counter</li>
                  <li className="hover:text-blue-500 cursor-pointer">Online Order</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Food</h4>
                <ul className="text-sm space-y-1">
                  <li className="hover:text-blue-500 cursor-pointer">Breakfast</li>
                  <li className="hover:text-blue-500 cursor-pointer">Starters</li>
                  <li className="hover:text-blue-500 cursor-pointer">Main Course</li>
                  <li className="hover:text-blue-500 cursor-pointer">Buffet</li>
                  <li className="hover:text-blue-500 cursor-pointer">Salads</li>
                  <li className="hover:text-blue-500 cursor-pointer">Desserts</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Hotel</h4>
                <ul className="text-sm space-y-1">
                  <li className="hover:text-blue-500 cursor-pointer">Bookings</li>
                  <li className="hover:text-blue-500 cursor-pointer">Check-in</li>
                  <li className="hover:text-blue-500 cursor-pointer">Room Service</li>
                  <li className="hover:text-blue-500 cursor-pointer">Spa</li>
                  <li className="hover:text-blue-500 cursor-pointer">Food & Beverages</li>
                  <li className="hover:text-blue-500 cursor-pointer">Other Services</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Rooms</h4>
                <ul className="text-sm space-y-1">
                  <li className="hover:text-blue-500 cursor-pointer">Single</li>
                  <li className="hover:text-blue-500 cursor-pointer">Double</li>
                  <li className="hover:text-blue-500 cursor-pointer">Deluxe</li>
                  <li className="hover:text-blue-500 cursor-pointer">Quad</li>
                  <li className="hover:text-blue-500 cursor-pointer">Executive</li>
                  <li className="hover:text-blue-500 cursor-pointer">Presidential</li>
                </ul>
              </div>
            </div>
          </div>

      
          <div className="flex items-center space-x-4">
           
            <div className="relative group">
              <div className="flex items-center space-x-2 cursor-pointer">
                <img
                  src="https://storage.needpix.com/rsynced_images/avatar-1577909_1280.png"
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="text-sm font-medium">
                  <span className="block">Admin</span>
                  <span className="text-xs text-gray-500"></span>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
              <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg hidden group-hover:block z-50">
                <div className="p-4 border-b">
                  <p className="font-semibold">ADMIN</p>
                  <p className="text-xs text-gray-500">admin@email.com</p>
                </div>
                <ul className="text-sm">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Messages</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Taskboard</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Lock Screen</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600">Logout</li>
                </ul>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
