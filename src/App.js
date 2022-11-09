import React from "react";
import DetailUser from "./page/DetailUser";
import User from "./page/User";
import UpdateUser from "./page/UpdateUser";
import CreateUser from "./page/CreateUser";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./routers/protectedRoute";
import Register from "./page/auth/register";
import { useSelector } from "react-redux";
import Login from "./page/auth/login";
import { authProcess } from "./redux/reducers/authReducer";

import Artikel from "./page/artikel";
import CreateArtikel from "./page/CreateArtikel";
import EditArtikel from "./page/EditArtikel";
import DetailArtikel from "./page/EditArtikel"

function App() {

  const name = useSelector((state) => state.authProcess.name)

  const email = useSelector((state) => state.authProcess.email)

  const color = useSelector((state) => state.color)

  return (
    <React.Fragment>
      <div style={{ backgroundColor: color.color }} className="flex space-x-2"><p>{name}</p><p>{email}</p></div>
      <h1 style={{ backgroundColor: color.color }} >BELAJAR API</h1>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/artikel' element={<ProtectedRoute><Artikel /></ProtectedRoute>} />
        <Route path='/user' element={<ProtectedRoute><User /></ProtectedRoute>} />
        <Route path='/artikel/create' element={<ProtectedRoute><CreateArtikel /></ProtectedRoute>} />
        <Route path='/artikel/edit/:slug' element={<ProtectedRoute><EditArtikel /></ProtectedRoute>} />
        <Route path='/artikel/detailArtikel/:slug' element={<ProtectedRoute><DetailArtikel /></ProtectedRoute>} />
        <Route path='/user/create' element={<ProtectedRoute><CreateUser /></ProtectedRoute>} />
        <Route path='/user/update/:id' element={<ProtectedRoute><UpdateUser /></ProtectedRoute>} />
        <Route path='*' element={<Navigate to="/user" replace={true} />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;