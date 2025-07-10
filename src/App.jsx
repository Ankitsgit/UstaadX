import React from 'react'
import { Router,Routes, Route, useNavigate } from "react-router-dom";
import Landing from './pages/Landing';
// import Dashboard from './pages/Dashboard';
import Home from './components/UserDashboard.jsx/Home';
import UserDashboard from './pages/UserDashboard';
import Chat from './pages/Chat';
import Profile from './pages/Profile';
import Bookings from './pages/Bookings';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}

      {/* Nested Routes for UserDashboard */}
      <Route path="/user" element={<UserDashboard />}>
        <Route index element={<Home />} />
        <Route path="Chat" element={<Chat />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="Booking" element={<Bookings />} />


      </Route>
    </Routes>
  )
}

export default App

