import React from 'react'

export default function SystemSettings() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold">System Settings</h2>

      <div className="mt-6 space-y-4">
        {/* Property Info Form */}
        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-md">
          <h3 className="text-xl font-medium mb-4">Property Information</h3>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-700">Property Name</label>
              <input type="text" className="w-full mt-2 p-3 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Location</label>
              <input type="text" className="w-full mt-2 p-3 border border-gray-300 rounded-lg" />
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Save Property Info
            </button>
          </div>
        </div>

        {/* Services & Rates Form */}
        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-md">
          <h3 className="text-xl font-medium mb-4">Services & Rates</h3>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-700">Service Name</label>
              <input type="text" className="w-full mt-2 p-3 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Rate</label>
              <input type="text" className="w-full mt-2 p-3 border border-gray-300 rounded-lg" />
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Save Rates & Services
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
