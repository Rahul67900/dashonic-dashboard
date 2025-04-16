import React from 'react'

export default function UserManagement() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold">User Management</h2>

      {/* Add user button */}
      <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Add New User
      </button>

      {/* Users Table */}
      <div className="mt-6">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Name</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Role</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-3 px-4 text-sm">John Doe</td>
              <td className="py-3 px-4 text-sm">Admin</td>
              <td className="py-3 px-4 text-sm">Active</td>
              <td className="py-3 px-4 text-sm">
                <button className="text-blue-600 hover:underline">Edit</button> | 
                <button className="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-sm">Jane Smith</td>
              <td className="py-3 px-4 text-sm">User</td>
              <td className="py-3 px-4 text-sm">Inactive</td>
              <td className="py-3 px-4 text-sm">
                <button className="text-blue-600 hover:underline">Edit</button> | 
                <button className="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
            {/* More users can be added here */}
          </tbody>
        </table>
      </div>
    </div>
  )
}
