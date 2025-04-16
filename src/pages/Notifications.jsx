import React from 'react';

export default function Notifications() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold">Notifications & Logs</h2>

      <div className="bg-white p-6 rounded-lg shadow border border-gray-200 space-y-6">
        <section>
          <h3 className="text-xl font-medium mb-2">Recent Notifications</h3>
          <ul className="divide-y divide-gray-200">
            <li className="py-2">🔔 New booking received – 5 mins ago</li>
            <li className="py-2">✅ Payment processed successfully – 1 hour ago</li>
            <li className="py-2">⚠️ Server downtime reported – 3 hours ago</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-medium mt-6 mb-2">System Logs</h3>
          <div className="bg-gray-100 p-4 rounded-md font-mono text-sm max-h-60 overflow-y-auto">
            [2025-04-15 10:00] INFO: Dashboard loaded successfully.<br />
            [2025-04-15 09:45] ERROR: Payment gateway timeout.<br />
            [2025-04-15 09:30] INFO: User 'admin' updated room prices.<br />
            [2025-04-15 08:10] WARN: API response delayed.
          </div>
        </section>
      </div>
    </div>
  );
}
