import React from 'react'

export default function AccessControl() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold">Access Control & Permissions</h2>

      <div className="mt-6 space-y-4">
        {/* Access Control Form */}
        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-md">
          <h3 className="text-xl font-medium mb-4">Manage Roles & Permissions</h3>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-700">Role Name</label>
              <input type="text" className="w-full mt-2 p-3 border border-gray-300 rounded-lg" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Assign Permissions</label>
              <select className="w-full mt-2 p-3 border border-gray-300 rounded-lg">
                <option value="admin">Admin</option>
                <option value="user">User</option>
                <option value="moderator">Moderator</option>
              </select>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
