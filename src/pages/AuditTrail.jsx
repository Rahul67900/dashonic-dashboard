import React from 'react';

export default function AuditTrail() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold">Audit Trail</h2>

      <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
        <table className="w-full text-sm text-left border-collapse">
          <thead className="bg-gray-100 text-gray-700 uppercase">
            <tr>
              <th className="px-4 py-3 border">Timestamp</th>
              <th className="px-4 py-3 border">User</th>
              <th className="px-4 py-3 border">Action</th>
              <th className="px-4 py-3 border">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="px-4 py-2 border">2025-04-15 09:00</td>
              <td className="px-4 py-2 border">admin</td>
              <td className="px-4 py-2 border">Updated Room Rates</td>
              <td className="px-4 py-2 border">Room 101 - ₹1200 → ₹1350</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2 border">2025-04-14 18:45</td>
              <td className="px-4 py-2 border">manager</td>
              <td className="px-4 py-2 border">Deleted User</td>
              <td className="px-4 py-2 border">User ID: 456</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2 border">2025-04-14 16:30</td>
              <td className="px-4 py-2 border">admin</td>
              <td className="px-4 py-2 border">Login</td>
              <td className="px-4 py-2 border">IP: 192.168.1.101</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
