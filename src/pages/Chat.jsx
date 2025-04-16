import { useState, useEffect } from "react";
import { Send } from "lucide-react";
import axios from "axios";

const users = ["Alice", "Bob", "Charlie", "Daisy"];

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/messages")
      .then(res => setMessages(res.data))
      .catch(err => console.error("Error fetching messages:", err));
  }, []);

  const sendMessage = async () => {
    if (input.trim()) {
      const newMsg = {
        sender: "You",
        text: input,
      };
      try {
        const res = await axios.post("http://localhost:5000/messages", newMsg);
        setMessages(prev => [...prev, res.data]);
        setInput("");
      } catch (error) {
        console.error("Failed to send message:", error);
      }
    }
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] bg-gray-950 text-white rounded-lg overflow-hidden shadow-lg">
      {/* Sidebar */}
      <aside className="w-1/4 border-r border-gray-800 p-4 hidden md:block bg-gray-900">
        <h2 className="text-xl font-semibold mb-4">Contacts</h2>
        <ul className="space-y-2">
          {users.map((user, idx) => (
            <li
              key={idx}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 cursor-pointer"
            >
              <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-sm font-bold uppercase">
                {user[0]}
              </div>
              <span>{user}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Chat Section */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 px-6 flex items-center justify-between border-b border-gray-800 bg-gray-900">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-green-600 rounded-full flex items-center justify-center font-bold text-white">
              A
            </div>
            <div>
              <h3 className="text-base font-medium">Alice</h3>
              <span className="text-xs text-green-400">Online</span>
            </div>
          </div>
        </header>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-gray-950">
          {messages.map((msg, idx) => {
            const isMe = msg.sender === "You";
            return (
              <div
                key={idx}
                className={`flex items-end gap-2 ${isMe ? "justify-end" : "justify-start"}`}
              >
                {!isMe && (
                  <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
                    {msg.sender[0]}
                  </div>
                )}
                <div className={`p-3 max-w-sm rounded-xl ${isMe ? "bg-blue-600 text-white rounded-br-none" : "bg-gray-800 text-gray-100 rounded-bl-none"}`}>
                  <p className="text-sm">{msg.text}</p>
                  <div className="text-xs text-gray-300 text-right mt-1">
                    {msg.time || "Now"}
                  </div>
                </div>
                {isMe && (
                  <div className="h-8 w-8 bg-gray-600 rounded-full flex items-center justify-center text-xs font-bold">
                    Y
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Input */}
        <footer className="h-20 bg-gray-900 px-6 py-4 flex items-center border-t border-gray-800">
          <input
            className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="ml-4 p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition"
          >
            <Send size={20} />
          </button>
        </footer>
      </div>
    </div>
  );
}
