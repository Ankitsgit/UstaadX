import React from 'react'
import { Router,Routes, Route, useNavigate } from "react-router-dom";
import Landing from './pages/Landing';
// import Dashboard from './pages/Dashboard';
import Home from './components/UserDashboard.jsx/Home';
import UserDashboard from './pages/UserDashboard';
import Chat from './pages/Chat';
function App() {
  return (
      <Routes>
        <Route path="/" element={<Landing/>} />
        {/* <Route path="/Dashboard" element={<Dashboard/>} /> */}

        <Route path="/User" element={<UserDashboard/>}>
          <Route path="Home" element={<Home/>} />
          <Route path="chat" element={<Chat/>} />
        </Route>

      </Routes>
  )
}

export default App

