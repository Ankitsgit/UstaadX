import React from 'react'
import { Router,Routes, Route, useNavigate } from "react-router-dom";
import Landing from './pages/landing';
// import Dashboard from './pages/Dashboard';
import Home from './components/UserDashboard.jsx/Home';
import UserDashboard from './pages/UserDashboard';
import Chat from './pages/Chat';
import Profile from './pages/Profile';
import Bookings from './pages/Bookings';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
        {/* <Route index element={<Home />} /> */}
        <Route path="/Home" element={<Home/>} />

        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />  
      
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

