import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Menu, X, Home, Settings, User, Image, Star, Grid, Plus } from "lucide-react"; // Replace Banner with Image

function Dashboard() {
  // todo
  const isAdmin = true
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
        <nav className="space-y-6 ">
         {
          isAdmin ? 
          <>
           <Link
            onClick={() => setIsOpen(false)} // Close the menu when clicked
            className="flex items-center space-x-4 p-4 hover:bg-blue-800 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            to="/dashboard"
          >
            <Grid size={22} className="text-white" />
            <span className="text-lg font-semibold">Dashboard</span>
          </Link>

          <Link
            onClick={() => setIsOpen(false)} // Close the menu when clicked
            className="flex items-center space-x-4 p-4 hover:bg-blue-800 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            to="/dashboard/profile"
          >
            <User size={22} className="text-white" />
            <span className="text-lg font-semibold">Admin Profile</span>
          </Link>

          <Link
            onClick={() => setIsOpen(false)} // Close the menu when clicked
            className="flex items-center space-x-4 p-4 hover:bg-blue-800 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            to="/dashboard/addBanner"
          >
            <Plus size={22} className="text-white" />
            <span className="text-lg font-semibold">Add Banner</span>
          </Link>

          <Link
            onClick={() => setIsOpen(false)} // Close the menu when clicked
            className="flex items-center space-x-4 p-4 hover:bg-blue-800 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            to="/dashboard/manageBanner"
          >
            <Image size={22} className="text-white" />
            <span className="text-lg font-semibold">Manage Banner</span>
          </Link>

          <Link
            onClick={() => setIsOpen(false)} // Close the menu when clicked
            className="flex items-center space-x-4 p-4 hover:bg-blue-800 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            to="/dashboard/manageReview"
          >
            <Star size={22} className="text-white" />
            <span className="text-lg font-semibold">Manage Review</span>
          </Link>

          <Link
            onClick={() => setIsOpen(false)} // Close the menu when clicked
            className="flex items-center space-x-4 p-4 hover:bg-blue-800 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            to="/dashboard/allUser"
          >
            <Star size={22} className="text-white" />
            <span className="text-lg font-semibold">All User</span>
          </Link>

          <div className="border-t-2 border-gray-400 mt-6"></div> {/* Divider */}
          
          <Link
            onClick={() => setIsOpen(false)} // Close the menu when clicked
            className="flex items-center space-x-4 p-4 hover:bg-blue-800 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            to="/"
          >
            <Home size={22} className="text-white" />
            <span className="text-lg font-semibold">Home</span>
          </Link>
          </> 
          : 
          <>
           <Link
            onClick={() => setIsOpen(false)} // Close the menu when clicked
            className="flex items-center space-x-4 p-4 hover:bg-blue-800 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            to="/dashboard"
          >
            <Grid size={22} className="text-white" />
            <span className="text-lg font-semibold">Dashboard</span>
          </Link>

          <Link
            onClick={() => setIsOpen(false)} // Close the menu when clicked
            className="flex items-center space-x-4 p-4 hover:bg-blue-800 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            to="/dashboard/profile"
          >
            <User size={22} className="text-white" />
            <span className="text-lg font-semibold">User Profile</span>
          </Link>

         

         

          

          <div className="border-t-2 border-gray-400 mt-6"></div> {/* Divider */}
          
          <Link
            onClick={() => setIsOpen(false)} // Close the menu when clicked
            className="flex items-center space-x-4 p-4 hover:bg-blue-800 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            to="/"
          >
            <Home size={22} className="text-white" />
            <span className="text-lg font-semibold">Home</span>
          </Link>
          </>
         }
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
