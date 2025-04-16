import { Bell, UserCircle } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="w-full h-16 bg-[#2a2f36] text-white flex items-center justify-between px-6 shadow-sm border-b border-gray-700">
      <div className="text-lg font-semibold">Welcome back 👋</div>
      <div className="flex items-center gap-4">
        <Bell className="cursor-pointer hover:text-primary" />
        <UserCircle className="cursor-pointer hover:text-primary" />
      </div>
    </header>
  )
}
