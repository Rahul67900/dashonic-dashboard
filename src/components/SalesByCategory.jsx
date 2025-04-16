import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { category: 'Fashion', sales: 400 },
  { category: 'Electronics', sales: 300 },
  { category: 'Groceries', sales: 500 },
  { category: 'Mobiles', sales: 200 },
  { category: 'Others', sales: 100 },
];

const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#6366f1'];

export default function SalesByCategory() {
  return (
    <div className="bg-gray-800 rounded-2xl p-4 shadow-lg">
      <h2 className="text-lg font-semibold mb-4 text-white">Sales by Category</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="category" tick={{ fill: '#cbd5e1', fontSize: 12 }} />
          <YAxis tick={{ fill: '#cbd5e1', fontSize: 12 }} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1f2937', border: 'none' }}
            labelStyle={{ color: '#fff' }}
            itemStyle={{ color: '#fff' }}
          />
          <Bar dataKey="sales" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
