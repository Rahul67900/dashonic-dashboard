import { useEffect, useState } from "react";
import api from "../utils/axiosInstance";

import StatCard from "../components/StatCard";
import RevenueChart from "../components/RevenueChart";
import SalesByCategory from "../components/SalesByCategory";
import TopSellingProducts from "../components/TopSellingProducts";
import TasksCard from "../components/TasksCard";
import ActivityCard from "../components/ActivityCard";
import SalesDonutChart from "../components/SalesDonutChart";

export default function Analytics() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await api.get("/api/analytics");
        setData(response.data);
      } catch (err) {
        console.error("Error fetching analytics:", err);
        setError("Something went wrong while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  if (loading) return <div className="p-6 text-white">Loading analytics...</div>;
  if (error) return <div className="p-6 text-red-500">{error}</div>;

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Top Header Section */}
      <div className="px-4 md:px-6 pt-4 pb-2 bg-gray-800 rounded-md shadow mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-1 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 17v-2a4 4 0 118 0v2m-1-2a3 3 0 00-6 0v2m0 4v1a2 2 0 104 0v-1"
              />
            </svg>
            Analytics Overview
          </h2>
          <p className="text-sm text-gray-400">
            A quick summary of your Hotel's performance.
          </p>
        </div>
        <button className="mt-3 sm:mt-0 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm shadow">
          Export Report
        </button>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

      {/* Lower Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <SalesByCategory data={data.categorySales} />
        <TopSellingProducts data={data.topProducts} />
        <TasksCard data={data.tasks} />
        <ActivityCard data={data.activities} />
        <SalesDonutChart data={data.salesDonut} />
      </div>
    </div>
  );
}
