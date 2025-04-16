const activity = [
    { time: '10 min ago', message: 'New user registered' },
    { time: '1 hour ago', message: 'Order #1234 was placed' },
    { time: '3 hours ago', message: 'Revenue report generated' },
    { time: 'Yesterday', message: 'Dashboard updated' }
  ]
  
  export default function ActivityCard() {
    return (
      <div className="bg-gray-800 p-4 rounded-xl shadow">
        <div className="text-lg font-semibold mb-4 text-white">Recent Activity</div>
        <ul className="space-y-3 text-sm">
          {activity.map((item, idx) => (
            <li key={idx} className="flex justify-between text-gray-300">
              <span>{item.message}</span>
              <span className="text-gray-500">{item.time}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  