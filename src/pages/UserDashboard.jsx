
// import  { React,useState, useEffect } from "react";
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
// const backendURL = import.meta.env.VITE_API_URL;

// const UserDashboard = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
//   const navigate = useNavigate();
//   const { user } = useAuth();
//  const [preview, setPreview] = useState(
//       user.userId.profileImage ? `${backendURL}${user.profileImage}` : "/default-profile.png"
//     )
  

// const users = {
//   name: user?.name || "Guest",
//   email: user?.email || "guest@example.com",
// };



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
//     `flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer text-sm ${
//       isActive
//         ? "bg-gray-100 text-blue-600 font-medium"
//         : "text-gray-700 hover:bg-gray-50"
//     }`;

//   const navItems = [
//     { name: "Dashboard", to: "/user", icon: <User size={18} /> },
//     { name: "Chat", to: "chat", icon: <MessageCircle size={18} /> },
//     { name: "Bookings", to: "booking", icon: <Calendar size={18} /> },
//     { name: "Profile", to: "profile", icon: <UserCircle size={18} /> }
//   ];

//   return (
    
//     <div className="flex min-h-screen bg-gray-50 relative">
      

//       {/* Mobile Toggle Button */}
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
//         className={`fixed md:static z-40 top-0 left-0 h-full bg-white border-r shadow-sm flex flex-col justify-between transition-all duration-300 ease-in-out ${
//           isSidebarOpen ? "w-64" : isMobile ? "-translate-x-full w-64" : "w-16"
//         } ${isSidebarOpen ? "translate-x-0" : ""}`}
//       >
//         {/* Top Section */}
//         <div>
//           <div className="bg-gray-900 px-6 py-4 flex items-center space-x-3 cursor-pointer"
//            onClick={() => navigate("/")}
//           >
          
//             <div className=" bg-gray-300 w-8 h-8 bg-primary-gradient rounded-full flex items-center justify-center text-sm++">
//               <span className="text-white font-bold text-sm">U</span>
//             </div>
//             <span className="text-white font-semibold text-lg gradient-text">UstaadX</span>
//           </div>
           
//           {/* Profile Info */}
//           <div className="px-6 py-4 border-b">
//             <div className="flex items-center space-x-3">
//               <img
//                 //  src={users.avatar}
//                  src={preview}

//                  alt="Profile"
//                  className="w-12 h-12 rounded-full object-cover"
//                  />


//               {isSidebarOpen && (
//                 <div>
//                   <p className="text-sm font-semibold text-gray-800">
//                     {users.name}
//                   </p>
//                   <p className="text-sm text-gray-500 truncate">{users.email}</p>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Navigation Links */}
//           <nav className="mt-4 space-y-1 px-4">
//             {navItems.map((item) => (
//               <NavLink key={item.name} to={item.to} className={navLinkClasses}>
//                 {item.icon}
//                 {isSidebarOpen && <span>{item.name}</span>}
//               </NavLink>
//             ))}
//           </nav>
//         </div>

//         {/* Logout Button */}
//         <div className="p-4 border-t">
//           <button
//             onClick={handleLogout}
//             className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition text-sm"
//           >
//             <LogOut className="w-5 h-5" />
//             {isSidebarOpen && <span>Sign out</span>}
//           </button>
//         </div>
//       </aside>

//       {/* Mobile Overlay */}
//       {isMobile && isSidebarOpen && (
//         <div
//           onClick={() => setIsSidebarOpen(false)}
//           className="fixed inset-0 bg-black opacity-30 z-30"
//         />
//       )}

//       {/* Page Content */}
//       <main className="flex-1 p-4 overflow-y-auto">
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default UserDashboard;
import React, { useState, useEffect } from "react"; // Fixed import
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

const backendURL = import.meta.env.VITE_API_URL;

const UserDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [imageError, setImageError] = useState(false); // Add error state
  const navigate = useNavigate();
  const { user } = useAuth();
  
  // Better preview logic with error handling
  const [preview, setPreview] = useState(() => {
    // Check multiple possible field names for profile image
    const profileImageField = user?.profileImage || user?.avatar || user?.profile_picture || user?.image;
    
    if (profileImageField && profileImageField.trim() !== '') {
      // Check if it's already a full URL or needs backend URL prepended
      if (profileImageField.startsWith('http')) {
        return profileImageField;
      }
      return `${backendURL}${profileImageField}`;
    }
    return "/default-profile.png"; // Or use: "https://via.placeholder.com/150/gray/white?text=User"
  });

  const users = {
    name: user?.name || "Guest",
    email: user?.email || "guest@example.com",
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

  // Update preview when user changes
  useEffect(() => {
    // console.log('Full user object:', user); // Debug: see entire user object
    // console.log('Backend URL:', backendURL);
    
    // Check multiple possible field names
    const profileImageField = user?.profileImage || user?.avatar || user?.profile_picture || user?.image;
    // console.log('Profile image field value:', profileImageField);
    
    if (profileImageField && profileImageField.trim() !== '') {
      const newPreview = profileImageField.startsWith('http') 
        ? profileImageField 
        : `${backendURL}${profileImageField}`;
      // console.log('Setting new preview URL:', newPreview);
      setPreview(newPreview);
      setImageError(false);
    } else {
      // console.log('No profile image found, using default');
      setPreview("/default-profile.png"); // Or use: "https://via.placeholder.com/150/gray/white?text=User"
    }
  }, [user, backendURL]); // Watch entire user object, not just profileImage

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleImageError = () => {
    setImageError(true);
    setPreview("/default-profile.png");
  };

  const navLinkClasses = ({ isActive }) =>
    `flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer text-sm ${
      isActive
        ? "bg-gray-100 text-blue-600 font-medium"
        : "text-gray-700 hover:bg-gray-50"
    }`;

  const navItems = [
    { name: "Dashboard", to: "/user", icon: <User size={18} /> },
    { name: "Chat", to: "chat", icon: <MessageCircle size={18} /> },
    { name: "Bookings", to: "booking", icon: <Calendar size={18} /> },
    { name: "Profile", to: "profile", icon: <UserCircle size={18} /> }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 relative">
      {/* Mobile Toggle Button */}
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
        className={`fixed md:static z-40 top-0 left-0 h-full bg-white border-r shadow-sm flex flex-col justify-between transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "w-64" : isMobile ? "-translate-x-full w-64" : "w-16"
        } ${isSidebarOpen ? "translate-x-0" : ""}`}
      >
        {/* Top Section */}
        <div>
          <div 
            className="bg-gray-900 px-6 py-4 flex items-center space-x-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">U</span>
            </div>
            <span className="text-white font-semibold text-lg">UstaadX</span>
          </div>
           
          {/* Profile Info */}
          <div className="px-6 py-4 border-b">
            <div className="flex items-center space-x-3">
              {imageError ? (
                // Fallback to icon if image fails
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <UserCircle size={32} className="text-gray-500" />
                </div>
              ) : (
                <img
                  src={preview}
                  alt="Profile"
                  className="w-12 h-12 rounded-full object-cover border border-gray-200"
                  onError={handleImageError}
                  onLoad={() => setImageError(false)}
                />
              )}

              {isSidebarOpen && (
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    {users.name}
                  </p>
                  <p className="text-sm text-gray-500 truncate">{users.email}</p>
                </div>
              )}
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="mt-4 space-y-1 px-4">
            {navItems.map((item) => (
              <NavLink key={item.name} to={item.to} className={navLinkClasses}>
                {item.icon}
                {isSidebarOpen && <span>{item.name}</span>}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Logout Button */}
        <div className="p-4 border-t">
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition text-sm"
          >
            <LogOut className="w-5 h-5" />
            {isSidebarOpen && <span>Sign out</span>}
          </button>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isMobile && isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black opacity-30 z-30"
        />
      )}

      {/* Page Content */}
      <main className="flex-1 p-4 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default UserDashboard;


