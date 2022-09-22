import React from "react";
import Register from "./pages/register";
import Home from "./pages/home";
import Login from "./pages/login";
import Admin from "./pages/admin";
import Dashboard from "./pages/admin/dashboard";
import User from "./pages/admin/user";
import Kelas from "./pages/admin/kelas";
import { Routes, Route, Link, NavLink, Navigate } from "react-router-dom";

function App() {
  return <React.Fragment>
    <section className="flex space-x-5">
      <NavLink
        className="border-2 border-solid border-b-black rounded-lg px-5"
        exact
        to="/Register"
        style={({ isActive }) =>
          isActive
            ? {
              color: "blue",
            }
            : undefined
        }
      >
        Register
      </NavLink>
      <NavLink
        className="border-2 border-solid border-b-black rounded-lg px-5"
        to="/admin/Dashboard"
        style={({ isActive }) =>
          isActive
            ? {
              color: "blue",
            }
            : undefined
        }
      >
        Login
      </NavLink>
      </section>
      <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} >
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="User" element={<User />} />
          <Route path="Kelas" element={<Kelas />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </section>
  </React.Fragment>;
}

export default App;