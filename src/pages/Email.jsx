import { useEffect, useState } from "react";
import axios from "axios";
import { Mail, Inbox, Send, FileText, Trash2, Star, Search, Plus } from "lucide-react";

export default function Email() {
  const [emails, setEmails] = useState([]);
  const [filteredEmails, setFilteredEmails] = useState([]);

  useEffect(() => {
    async function fetchEmails() {
      try {
        const res = await axios.get("/api/emails"); // Replace with your actual API endpoint
        console.log("Fetched emails:", res.data); // Log the fetched data to the console

        if (Array.isArray(res.data)) {
          setEmails(res.data);
          setFilteredEmails(res.data);
        } else {
          console.error("Invalid data format:", res.data);
        }
      } catch (error) {
        console.error("Error fetching emails:", error);
      }
    }
    fetchEmails();
  }, []);

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4 hidden md:flex flex-col">
        <h2 className="text-lg font-semibold mb-4">Mailbox</h2>

        {/* Compose Button */}
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium mb-6">
          <Plus size={16} /> Compose
        </button>

        {/* Folders */}
        <nav className="space-y-2 text-sm">
          <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-700 text-blue-400">
            <Inbox size={16} /> Inbox
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-700">
            <Send size={16} /> Sent
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-700">
            <FileText size={16} /> Drafts
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-700">
            <Trash2 size={16} /> Trash
          </a>
          <a href="#" className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-700">
            <Star size={16} /> Starred
          </a>
        </nav>
      </aside>

      {/* Main Email Area */}
      <div className="flex-1 p-4 bg-gray-900 text-white overflow-y-auto">
        {/* Search Bar */}
        <div className="mb-4">
          <div className="flex items-center bg-gray-800 px-4 py-2 rounded-lg">
            <Search size={16} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search emails"
              className="bg-transparent text-sm text-white ml-2 focus:outline-none w-full"
            />
          </div>
        </div>

        {/* Email List */}
        <div className="grid gap-4 max-h-[calc(100vh-150px)] overflow-y-auto pr-2">
          {filteredEmails.length === 0 ? (
            <div className="text-gray-400">No emails found or loading...</div>
          ) : (
            filteredEmails.map((email) => (
              <div
                key={email.id}
                className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition cursor-pointer"
              >
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-medium text-sm">{email.sender}</h4>
                  <span className="text-xs text-gray-400">{email.time}</span>
                </div>
                <div className="text-sm font-semibold text-gray-200">{email.subject}</div>
                <div className="text-sm text-gray-400 truncate">{email.message}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
