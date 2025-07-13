// UserDashboard.jsx
import React from "react";
import {MessageCircle, User, LogOut, Search, Menu, X } from 'lucide-react';

import { Outlet, NavLink } from "react-router-dom";
// import Chat from "./Chat";
// import Home from "../components/UserDashboard.jsx/Home";
// import Profile from "./Profile";
const UserDashboard = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 p-4">
        <h2 className="text-lg font-semibold mb-4">Dashboard</h2>
        <nav className="flex flex-col gap-2">
          <User/>
          <NavLink to="/user" end className={({ isActive }) => isActive ? "text-green-700" : ""}>
            Home 
          </NavLink>
          <NavLink to="Chat" className={({ isActive }) => isActive ? "text-green-700" : ""}>
            Chat
          </NavLink>
          {/* Add other links */}

          <NavLink to="Booking" className={({ isActive }) => isActive ? "text-green-700" : ""}>
            Booking
          </NavLink>
          <NavLink to="Profile" className={({ isActive }) => isActive ? "text-green-700" : ""}>
            Profile
          </NavLink>
          
          
     
      
        </nav>
      
      </aside>

      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default UserDashboard;


