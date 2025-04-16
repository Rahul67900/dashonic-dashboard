import React from 'react';

export default function DataSecurity() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold">Data Security Settings</h2>

      <div className="bg-white p-6 rounded-lg shadow border border-gray-200 space-y-4">
        <div>
          <label className="block font-medium mb-2">Password Policy</label>
          <select className="w-full p-2 border rounded">
            <option>Strong (8+ characters, numbers, symbols)</option>
            <option>Medium (6+ characters)</option>
            <option>Weak (No restrictions)</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <label className="font-medium">Two-Factor Authentication</label>
          <input type="checkbox" className="h-5 w-5" />
        </div>

        <div className="flex items-center justify-between">
          <label className="font-medium">Enable IP Whitelisting</label>
          <input type="checkbox" className="h-5 w-5" />
        </div>

        <div>
          <label className="block font-medium mb-2">Data Backup Frequency</label>
          <select className="w-full p-2 border rounded">
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
          </select>
        </div>

        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Save Security Settings
        </button>
      </div>
    </div>
  );
}
