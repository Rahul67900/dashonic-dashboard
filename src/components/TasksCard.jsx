const tasks = [
  { task: 'Design homepage', done: false },
  { task: 'Fix login bug', done: false },
  { task: 'Update dashboard UI', done: false },
  { task: 'Add sales chart', done: false }
]

export default function TasksCard() {
  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow">
      <div className="text-lg font-semibold mb-4 text-white">Tasks</div>
      <ul className="space-y-2 text-sm">
        {tasks.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <input type="checkbox" checked={item.done} className="accent-blue-500" readOnly />
            <span className={`${item.done ? 'line-through text-gray-500' : 'text-white'}`}>
              {item.task}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
