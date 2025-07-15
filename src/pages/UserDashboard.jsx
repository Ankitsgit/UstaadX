// UserDashboard.jsx
// import React from "react";
// import {MessageCircle, User, LogOut, Search, Menu, X } from 'lucide-react';

// import { Outlet, NavLink } from "react-router-dom";
// // import Chat from "./Chat";
// // import Home from "../components/UserDashboard.jsx/Home";
// // import Profile from "./Profile";
// const UserDashboard = () => {
//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white border-r border-gray-200 p-4">
//         <h2 className="text-lg font-semibold mb-4">Dashboard</h2>
//         <nav className="flex flex-col gap-2">
//           <User/>
//           <NavLink to="/user" end className={({ isActive }) => isActive ? "text-green-700" : ""}>
//             Home 
//           </NavLink>
//           <NavLink to="Chat" className={({ isActive }) => isActive ? "text-green-700" : ""}>
//             Chat
//           </NavLink>
//           {/* Add other links */}

//           <NavLink to="Booking" className={({ isActive }) => isActive ? "text-green-700" : ""}>
//             Booking
//           </NavLink>
//           <NavLink to="Profile" className={({ isActive }) => isActive ? "text-green-700" : ""}>
//             Profile
//           </NavLink>
          
          
     
      
//         </nav>
      
//       </aside>

//       {/* Main content */}
//       <main className="flex-1">
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default UserDashboard;

// import React, { useState, useEffect } from "react";
// import {
//   MessageCircle,
//   User,
//   LogOut,
//   Menu,
//   X,
//   Calendar,
//   UserCircle
// } from "lucide-react";
// import { Outlet, NavLink, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const UserDashboard = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
//   const navigate = useNavigate();
//   const { user } = useAuth();

//   const users = {
//     name: user?.name || "Guest",
//     avatar: user?.avatar || "https://i.pravatar.cc/100"
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       const isNowMobile = window.innerWidth < 768;
//       setIsMobile(isNowMobile);
//       setIsSidebarOpen(!isNowMobile);
//     };
//     window.addEventListener("resize", handleResize);
//     handleResize();
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate("/login");
//   };

//   const navLinkClasses = ({ isActive }) =>
//     `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-indigo-100 ${
//       isActive
//         ? "bg-indigo-100 text-indigo-700 font-medium"
//         : "text-gray-600 hover:text-indigo-700"
//     }`;

//   const navItems = [
//     { name: "Home", to: "/user", icon: <User size={18} /> },
//     { name: "Chat", to: "chat", icon: <MessageCircle size={18} /> },
//     { name: "Booking", to: "booking", icon: <Calendar size={18} /> },
//     { name: "Profile", to: "profile", icon: <UserCircle size={18} /> }
//   ];

//   return (
//     <div className="flex min-h-screen bg-gray-50 relative">
//       {/* Mobile menu toggle */}
//       {isMobile && (
//         <button
//           className="absolute top-4 left-4 z-50 bg-white p-2 rounded-md border shadow-md"
//           onClick={() => setIsSidebarOpen((prev) => !prev)}
//         >
//           {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
//         </button>
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`fixed md:static z-40 top-0 left-0 h-full bg-white border-r border-gray-200 p-4 flex flex-col justify-between transition-all duration-300 ease-in-out ${
//           isSidebarOpen ? "w-64" : isMobile ? "-translate-x-full w-64" : "w-16"
//         } ${isSidebarOpen ? "translate-x-0" : ""}`}
//       >
//         <div className="flex flex-col flex-1 overflow-hidden">
//           {/* Top user info */}
//           <div className="flex items-center justify-between mb-6">
//             {isSidebarOpen ? (

              
//               <div className=" flex flex-col gap-4 text-sm flex-grow overflow-y-auto px-3 py-3">
//                 <div className>
//                   <div className="w-8 h-8 bg-primary-gradient rounded-lg flex items-center justify-center">
//                      <span className="text-white font-bold text-sm">U</span>
//                   </div>
//                 <span className="text-xl font-heading font-bold gradient-text">UstaadX</span>
//               </div>
              
//                 <img
//                   src={users.avatar}
//                   alt="User"
//                   className="w-8 h-8 rounded-full"
//                 />
//                 <span className="text-sm font-semibold text-indigo-700 truncate">
//                   {users.name}
//                 </span>
//               </div>
//             ) : (
//               <img
//                 src={users.avatar}
//                 alt="User"
//                 className="w-8 h-8 rounded-full mx-auto"
//               />
//             )}
//           </div>

//           {/* Nav Links */}
//           <nav className="flex flex-col gap-4 text-sm flex-grow overflow-y-auto">
//             {navItems.map((item) => (
//               <NavLink to={item.to} key={item.name} className={navLinkClasses}>
//                 <div title={!isSidebarOpen ? item.name : undefined}>
//                   {item.icon}
//                 </div>
//                 {isSidebarOpen && item.name}
//               </NavLink>
//             ))}
//           </nav>
//         </div>

//         {/* Logout Button */}
//         <div className="pt-4 border-t">
//           <button
//             onClick={handleLogout}
//             className="flex items-center gap-3 px-3 py-2 w-full text-red-600 hover:bg-red-100 rounded-lg"
//             title={!isSidebarOpen ? "Logout" : undefined}
//           >
//             <LogOut size={18} />
//             {isSidebarOpen && "Logout"}
//           </button>
//         </div>
//       </aside>

//       {/* Overlay for mobile */}
//       {isMobile && isSidebarOpen && (
//         <div
//           onClick={() => setIsSidebarOpen(false)}
//           className="fixed inset-0 bg-black opacity-30 z-30"
//         />
//       )}

//       {/* Main content */}
//       <main className="flex-1 p-4 overflow-y-auto">
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default UserDashboard;

import React, { useState, useEffect } from "react";
import {
  MessageCircle,
  User,
  LogOut,
  Menu,
  X,
  Calendar,
  UserCircle
} from "lucide-react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const UserDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();
  const { user } = useAuth();

  const users = {
    name: user?.name || "Guest",
    avatar: user?.profileImage || "https://i.pravatar.cc/100"
  };

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth < 768;
      setIsMobile(isNowMobile);
      setIsSidebarOpen(!isNowMobile);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const navLinkClasses = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
      isActive
        ? "bg-indigo-100 text-indigo-700 font-semibold"
        : "text-gray-600 hover:text-indigo-700 hover:bg-indigo-50"
    }`;

  const navItems = [
    { name: "Home", to: "/user", icon: <User size={18} /> },
    { name: "Chat", to: "chat", icon: <MessageCircle size={18} /> },
    { name: "Booking", to: "booking", icon: <Calendar size={18} /> },
    { name: "Profile", to: "profile", icon: <UserCircle size={18} /> }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 relative">
      {/* Mobile Menu Toggle */}
      {isMobile && (
        <button
          className="absolute top-4 left-4 z-50 bg-white p-2 rounded-md border shadow-md"
          onClick={() => setIsSidebarOpen((prev) => !prev)}
        >
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static z-40 top-0 left-0 h-full bg-white border-r border-gray-200 p-4 flex flex-col justify-between transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "w-64" : isMobile ? "-translate-x-full w-64" : "w-16"
        } ${isSidebarOpen ? "translate-x-0" : ""}`}
      >
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Brand & User */}
          {/* <div className="mb-6 flex items-center justify-between">
            {isSidebarOpen ? (
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  U
                </div>
                <span className="font-heading font-bold text-xl text-indigo-700">
                  UstaadX
                </span>
              </div>
            ) : (
              <div className="w-9 h-9 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                U
              </div>
            )}
          </div> */}
          <div
              onClick={() => navigate("/")}
              className="flex items-center gap-2 cursor-pointer"
          >
          <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
               U
          </div>
          {isSidebarOpen && (
             <span className="font-heading font-bold text-xl text-indigo-700">
              UstaadX
             </span>
           )}
          </div>


          {/* User Avatar */}
          <div className="mb-6 flex items-center gap-3">
            <img
              src={users.avatar}
              alt="User"
              className="w-9 h-9 rounded-full"
            />
            {isSidebarOpen && (
              <span className="text-sm font-medium text-indigo-700 truncate">
                {users.name}
              </span>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-1 text-sm flex-grow overflow-y-auto">
            {navItems.map((item) => (
              <NavLink to={item.to} key={item.name} className={navLinkClasses}>
                <div title={!isSidebarOpen ? item.name : undefined}>
                  {item.icon}
                </div>
                {isSidebarOpen && item.name}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Logout */}
        <div className="pt-4 border-t">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2 w-full text-red-600 hover:bg-red-100 rounded-lg"
            title={!isSidebarOpen ? "Logout" : undefined}
          >
            <LogOut size={18} />
            {isSidebarOpen && "Logout"}
          </button>
        </div>
      </aside>

      {/* Overlay on Mobile */}
      {isMobile && isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black opacity-30 z-30"
        />
      )}

      {/* Main Content */}
      <main className="flex-1 p-4 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default UserDashboard;




