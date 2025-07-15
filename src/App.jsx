// import React from 'react'
// import { Router,Routes, Route, useNavigate } from "react-router-dom";
// import Landing from './pages/landing';
// // import Dashboard from './pages/Dashboard';
// import Home from './components/UserDashboard.jsx/Home';
// import UserDashboard from './pages/UserDashboard';
// import Chat from './pages/Chat';
// import Profile from './pages/Profile';
// import Bookings from './pages/Bookings';
// import Login from './components/Login/Login';
// import Register from './components/Register/Register';
// import PrivateRoute from './PrivateRoute/PrivateRoute';

// function App() {
//   return (
//     <Routes>
//       {/* Public Routes */}
//       <Route path="/" element={<Landing />} />
//         {/* <Route index element={<Home />} /> */}
//         <Route path="/Home" element={<Home/>} />

//         <Route path="/login" element={<Login />} />
//         <Route path="/Register" element={<Register />} />  
      
//       {/* Nested Routes for UserDashboard */}

//     <Route element={<PrivateRoute />}>
//       <Route path="/user" element={<UserDashboard />}>
//         <Route index element={<Home />} />
//         <Route path="Chat" element={<Chat />} />
//         <Route path="Profile" element={<Profile />} />
//         <Route path="Booking" element={<Bookings />} />
//       </Route>
//     </Route>

//     </Routes>
//   )
// }

// export default App

import React from 'react';
import { Routes, Route } from "react-router-dom";

import Landing from './pages/landing';
import Home from './components/UserDashboard.jsx/Home';
import UserDashboard from './pages/UserDashboard';
import Chat from './pages/Chat';
import Profile from './pages/Profile';
import Bookings from './pages/Bookings';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <Routes>
      {/* 🌐 Public Routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* 🔒 Protected Routes */}
      <Route element={<PrivateRoute />}>
        <Route path="/user" element={<UserDashboard />}>
          <Route index element={<Home />} />
          <Route path="chat" element={<Chat />} />
          <Route path="chat/:partnerId" element={<Chat />} />
          <Route path="profile" element={<Profile />} />
          <Route path="booking" element={<Bookings />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
