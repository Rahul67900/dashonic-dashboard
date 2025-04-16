import React from 'react';

export default function Reports() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold">Reports</h2>

      <div className="bg-white p-6 rounded-lg shadow border border-gray-200 space-y-6">
        <section>
          <h3 className="text-xl font-medium mb-2">Generate Reports</h3>
          <p className="text-gray-700 mb-4">Choose the type of report you want to generate and export.</p>

          <div className="space-x-4">
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Export as CSV
            </button>
            <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
              Export as PDF
            </button>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-medium mt-6 mb-2">Recent Reports</h3>
          <ul className="text-gray-700 list-disc list-inside ml-4">
            <li>April 2025 – Sales Summary</li>
            <li>April 2025 – Room Occupancy Report</li>
            <li>March 2025 – Service Performance</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
