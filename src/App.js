import React from "react";
import DetailUser from "./page/DetailUser";
import User from "./page/User";
import UpdateUser from "./page/UpdateUser";
import CreateUser from "./page/CreateUser";
import {Routes, Route, Navigate} from "react-router-dom";
import ProtectedRoute from "./routers/protectRoute";
import Login from "./page/auth/login";

function App() {
  return  (
    <React.Fragment>
      <h1 className="bg-red-500">Belajar API</h1>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path='/user' element={<ProtectedRoute><User /></ProtectedRoute>} />
        <Route path='/user/:id/detail' element={<ProtectedRoute><DetailUser /></ProtectedRoute>} />
        <Route path='/user/create' element={<ProtectedRoute><CreateUser /></ProtectedRoute>} />
        <Route path='/user/update/:id' element={<ProtectedRoute><UpdateUser/></ProtectedRoute>} />
        <Route path='*' element={<Navigate to="/user" replace={true}/>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;