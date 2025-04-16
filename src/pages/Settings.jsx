import { useState } from "react";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState("yes");
  const [privacy, setPrivacy] = useState("no");
  const [autoUpdate, setAutoUpdate] = useState("yes");
  const [language, setLanguage] = useState("en");
  const [saved, setSaved] = useState(false);

  const ButtonGroup = ({ value, onChange }) => (
    <div className="inline-flex bg-gray-700 rounded-md overflow-hidden border border-gray-600">
      <button
        className={`px-4 py-1 text-sm ${value === "yes" ? "bg-blue-600 text-white" : "text-gray-300"}`}
        onClick={() => onChange("yes")}
      >
        Yes
      </button>
      <button
        className={`px-4 py-1 text-sm ${value === "no" ? "bg-blue-600 text-white" : "text-gray-300"}`}
        onClick={() => onChange("no")}
      >
        No
      </button>
    </div>
  );

  const handleSave = async () => {
    const settings = {
      darkMode,
      notifications,
      privacy,
      autoUpdate,
      language,
    };

    try {
      // Send settings to backend API
      const response = await fetch("/api/saveSettings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(settings),
      });

      if (response.ok) {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000); // Show feedback for 2 seconds
      } else {
        throw new Error("Failed to save settings");
      }
    } catch (error) {
      console.error("Error saving settings:", error);
      // Optionally show an error message
    }
  };

  return (
    <div className="p-6 space-y-6 text-white">
      <h2 className="text-2xl font-semibold mb-4">Settings</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Dark Mode Toggle */}
        <div className="bg-gray-800 rounded-2xl p-5 shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium">Dark Mode</h3>
              <p className="text-sm text-gray-400">Enable dark theme for dashboard</p>
            </div>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
              <span className="ml-2 text-sm">{darkMode ? "On" : "Off"}</span>
            </label>
          </div>
        </div>

        {/* Language Selector */}
        <div className="bg-gray-800 rounded-2xl p-5 shadow-md">
          <div className="flex flex-col">
            <h3 className="text-lg font-medium mb-1">Language</h3>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-gray-700 text-white border border-gray-600 rounded px-3 py-2 mt-2"
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="es">Spanish</option>
            </select>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-gray-800 rounded-2xl p-5 shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium">Notifications</h3>
              <p className="text-sm text-gray-400">Enable system notifications</p>
            </div>
            <ButtonGroup value={notifications} onChange={setNotifications} />
          </div>
        </div>

        {/* Privacy */}
        <div className="bg-gray-800 rounded-2xl p-5 shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium">Private Account</h3>
              <p className="text-sm text-gray-400">Only visible to approved users</p>
            </div>
            <ButtonGroup value={privacy} onChange={setPrivacy} />
          </div>
        </div>

        {/* Auto Update */}
        <div className="bg-gray-800 rounded-2xl p-5 shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium">Auto Updates</h3>
              <p className="text-sm text-gray-400">Always use the latest version</p>
            </div>
            <ButtonGroup value={autoUpdate} onChange={setAutoUpdate} />
          </div>
        </div>
      </div>

      {/* Save Settings Button */}
      <div className="flex justify-end mt-4">
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-700"
        >
          Save Settings
        </button>
      </div>

      {/* Feedback Message */}
      {saved && (
        <div className="text-center text-green-500 mt-4">
          <p>Settings saved successfully!</p>
        </div>
      )}
    </div>
  );
}
