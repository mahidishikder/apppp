import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Menu, X, Home, Settings, User, Image, Star, Grid, Plus } from "lucide-react"; // Replace Banner with Image

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`bg-blue-900 text-white w-64 p-4 space-y-6 fixed inset-y-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <button onClick={() => setIsOpen(false)} className="md:hidden">
            <X size={24} />
          </button>
        </div>

        {/* Sidebar Menu */}
        <nav className="space-y-4">
        <Link className="flex items-center space-x-3 p-3 hover:bg-blue-700 rounded-lg" to="/dashboard">
        <Grid size={20} /> {/* Dashboard Icon */}
        <span>Dashboard</span>
      </Link>
          <Link className="flex items-center space-x-3 p-3 hover:bg-blue-700 rounded-lg" to="/dashboard/profile">
            <User size={20} />
            <span>Profile</span>
          </Link>
          <Link className="flex items-center space-x-3 p-3 hover:bg-blue-700 rounded-lg" to="/dashboard/addBanner">
  <Plus size={20} /> {/* Plus icon */}
  <span>Add Banner</span>
</Link>
          <Link className="flex items-center space-x-3 p-3 hover:bg-blue-700 rounded-lg" to="/dashboard/manageBanner">
            <Image size={20} /> {/* Replaced Banner with Image */}
            <span>Manage Banner</span>
          </Link>
          <Link className="flex items-center space-x-3 p-3 hover:bg-blue-700 rounded-lg" to="/dashboard/manageReview">
            <Star size={20} /> {/* Use an icon for Manage Review */}
            <span>Manage Review</span>
          </Link>
          <div className="divider">or</div>
          <Link className="flex items-center space-x-3 p-3 hover:bg-blue-700 rounded-lg" to="/">
            <Home size={20} />
            <span>Home</span>
          </Link>
        
        </nav>
      </div>

      {/* Content Area */}
      <div className="flex-1 ml-0 md:ml-64 p-6 transition-all duration-300">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden bg-blue-900 text-white p-2 rounded-lg mb-4"
        >
          <Menu size={24} />
        </button>

        {/* Main Content */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
