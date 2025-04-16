import { useEffect, useState } from "react";
import api from "../utils/axiosInstance"; // Assuming your axios instance is correctly set

import RevenueChart from '../components/RevenueChart';
import SalesDonutChart from '../components/SalesDonutChart';
import StatCard from '../components/StatCard';
import TopSellingProducts from '../components/TopSellingProducts';
import TasksCard from '../components/TasksCard';
import ActivityCard from '../components/ActivityCard';

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await api.get("/api/dashboard");
        setData(response.data); // Assuming this data contains all necessary info
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
        setError("Something went wrong while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) return <div className="p-6 text-white">Loading dashboard...</div>;
  if (error) return <div className="p-6 text-red-500">{error}</div>;

  return (
    <div className="space-y-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard
          title="Revenue"
          value={`₹${data.revenue}`}
          change={data.revenueChange}
          positive={data.revenueChange.startsWith("+")}
        />
        <StatCard
          title="Users"
          value={data.users}
          change={data.usersChange}
          positive={data.usersChange.startsWith("+")}
        />
        <StatCard
          title="Orders"
          value={data.orders}
          change={data.ordersChange}
          positive={data.ordersChange.startsWith("+")}
        />
        <StatCard
          title="Sales"
          value={`₹${data.sales}`}
          change={data.salesChange}
          positive={data.salesChange.startsWith("+")}
        />
      </div>

      {/* Revenue Chart */}
      <RevenueChart data={data.revenueChart} />

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <SalesDonutChart data={data.salesDonut} />
        <TopSellingProducts data={data.topProducts} />
        <div className="space-y-4">
          <TasksCard data={data.tasks} />
          <ActivityCard data={data.activities} />
        </div>
      </div>
    </div>
  );
}
