import React, { useState, useEffect } from "react";

function UserCount() {
  const [userCount, setUserCount] = useState(0);
  const [downloadCount, setDownloadCount] = useState(1000); // Initial downloads
  const [userColor, setUserColor] = useState("text-blue-500");
  const [downloadColor, setDownloadColor] = useState("text-green-400");

  useEffect(() => {
    const userInterval = setInterval(() => {
      setUserCount((prevCount) => prevCount + Math.floor(Math.random() * 10) + 1);
      changeColor(setUserColor);
    }, 1000); // Users update every second

    const downloadInterval = setInterval(() => {
      setDownloadCount((prevCount) => prevCount + Math.floor(Math.random() * 5) + 1);
      changeColor(setDownloadColor);
    }, 2000); // Downloads update every 2 seconds

    return () => {
      clearInterval(userInterval);
      clearInterval(downloadInterval);
    };
  }, []);

  // Random color changer
  const changeColor = (setColor) => {
    const colors = [
      "text-blue-500",
      "text-green-400",
      "text-red-500",
      "text-yellow-400",
      "text-pink-500",
      "text-purple-500",
      "text-orange-500"
    ];
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  return (
    <div className="flex flex-col items-center justify-center py-32 bg-black text-white">
      {/* Flex Container for Side-by-Side Layout */}
      <div className="flex flex-wrap justify-center gap-16">
        {/* User Count Section */}
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4 animate-pulse text-gray-300">Live User Count</h1>
          <div className={`text-7xl font-extrabold ${userColor} transition-all duration-500 transform scale-105 shadow-lg glow`}>
            {userCount.toLocaleString()} {/* Formats numbers (e.g., 1,000) */}
          </div>
        </div>

        {/* App Download Count Section */}
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4 text-gray-300">App Downloads</h1>
          <div className={`text-7xl font-extrabold ${downloadColor} transition-all duration-500 transform scale-105 shadow-lg`}>
            {downloadCount.toLocaleString()} {/* Formats numbers (e.g., 1,000) */}
          </div>
        </div>
      </div>

      <p className="mt-10 text-gray-400 italic">Updating in real-time...</p>
    </div>
  );
}

export default UserCount;
