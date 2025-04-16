const products = [
  { name: 'Apple Watch', sales: '1,200', price: '₹399' },
  { name: 'Samsung Galaxy', sales: '980', price: '₹299' },
  { name: 'Sony Headphones', sales: '870', price: '₹199' },
  { name: 'Dell Laptop', sales: '640', price: '₹999' }    
]

export default function TopSellingProducts() {
  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow h-full">
      <div className="text-lg font-semibold mb-4 text-white">Top Selling Products</div>
      <ul className="space-y-3">
        {products.map((product, idx) => (
          <li key={idx} className="flex justify-between text-sm text-gray-100">
            <span>{product.name}</span>
            <div className="text-right">
              <div className="text-white">{product.sales} sold</div>
              <div className="text-gray-400">{product.price}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
