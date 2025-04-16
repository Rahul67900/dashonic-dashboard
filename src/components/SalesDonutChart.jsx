import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Electronics', value: 400 },
  { name: 'Fashion', value: 300 },
  { name: 'Grocery', value: 300 },
  { name: 'Home Decor', value: 200 }
]

const COLORS = ['#60a5fa', '#34d399', '#fbbf24', '#f87171']

export default function SalesDonutChart() {
  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow h-full">
      <div className="text-lg font-semibold mb-4 text-white">Sales by Category</div>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            innerRadius={50}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
