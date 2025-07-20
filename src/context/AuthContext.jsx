// // src/context/AuthContext.jsx
// import { createContext, useContext, useState } from 'react';
// import axios from '../api/axios'; // make sure this file exists and points to your backend

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) || null);

//   // ✅ Register function
//   const register = async (email, password, name) => {
//     const res = await axios.post('/api/auth/register', {
//       name,
//       email,
//       password
//     });
//     return res.data;
//   };

//   // ✅ Login function
//   const login = async (email, password) => {
//     const res = await axios.post('/api/auth/login', { email, password });
//     const { token, user } = res.data;
//     localStorage.setItem('token', token);
//     localStorage.setItem('user', JSON.stringify(user));
//     localStorage.setItem('userId', user._id); // ✅ This line is essential


//     setUser(user);
//   };

//   const logout = () => {
//     localStorage.clear();
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{user,register, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // ✅ Custom Hook
// export const useAuth = () => useContext(AuthContext);

import { createContext, useContext, useState } from 'react';
import axios from '../api/axios'; // make sure this file exists and points to your backend

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) || null);

  // ✅ Update user data (call this after profile updates)
  const updateUser = (updatedUserData) => {
    const newUser = { ...user, ...updatedUserData };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  // ✅ Register function
  const register = async (email, password, name) => {
    const res = await axios.post('/api/auth/register', {
      name,
      email,
      password
    });
    return res.data;
  };

  // ✅ Login function
  const login = async (email, password) => {
    const res = await axios.post('/api/auth/login', { email, password });
    const { token, user } = res.data;
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('userId', user._id); // ✅ This line is essential

    setUser(user);
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      register,
      login,
      logout,
      updateUser
    }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Custom Hook
export const useAuth = () => useContext(AuthContext);
