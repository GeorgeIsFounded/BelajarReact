import React from "react";
import { Routes, Route, Link, NavLink, Navigate } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Setting from "./pages/setting";
import Detail from "./pages/detail";
import NotFound from "./pages/NotFound";
import computer from "./pages/setting/computer";
import phone from "./pages/setting/phone";
import profile from "./pages/setting/profile";

function App() {
  return (
    <React.Fragment>
      <section className="space-x-5 border py-5">
        {/* <Link to={"/"} >Home</Link>
        <Link to={"/setting"} >Setting</Link>
        <Link to={'/about'} >About</Link> */}
        <NavLink
          exact
          to="/"
          style={({ isActive }) =>
            isActive
              ? {
                color: "red",
              }
              : undefined
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) =>
            isActive
              ? {
                color: "red",
              }
              : undefined
          }
        >
          About
        </NavLink>

        <NavLink
          to="/setting"
          className={({ isActive }) =>
            isActive ? 'text-white border p-2 bg-red-500'
              : undefined
          }
        // style={({ isActive }) =>
        //   isActive
        //     ? {
        //         color: "red",
        //       }
        //     : undefined
        // }
        >
          Setting
        </NavLink>
      </section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/setting" element={<Setting />}>
          <Route path="phone" element={<phone />} />
          <Route path="profile" element={<profile />} />
          <Route path="computer" element={<computer />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/about/:id/:nama" element={<Detail />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;