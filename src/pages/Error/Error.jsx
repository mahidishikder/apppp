import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary text-white text-center p-6">
      {/* Icon */}
      <AlertTriangle size={80} className="text-yellow-400 mb-4 animate-bounce" />
      
      {/* Error Message */}
      <h1 className="text-5xl font-bold">Oops!</h1>
      <p className="text-lg mt-2">Something went wrong.</p>
      <p className="text-md opacity-80">The page you are looking for does not exist.</p>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-white text-primary font-semibold rounded-lg shadow-md hover:bg-gray-200 transition-all"
      >
        Go to Home
      </Link>
    </div>
  );
}

export default Error;
