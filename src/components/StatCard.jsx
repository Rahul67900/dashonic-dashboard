export default function StatCard({ title, value, change }) {
  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition duration-300">
      <div className="text-sm text-gray-400 mb-1">{title}</div>
      <div className="text-2xl font-semibold text-white">{value}</div> {/* Updated to text-white */}
      <div className={`text-sm mt-1 ${change.startsWith('-') ? 'text-red-400' : 'text-green-400'} text-white`}>
        {change} {/* Updated to text-white */}
      </div>
    </div>
  );
}
