import React from "react";
import DetailUser from "./page/DetailUser";
import User from "./page/User";
import CreateUser from "./page/CreateUser";
import {Routes, Route, Navigate} from "react-router-dom";

function App() {
  return  (
    <React.Fragment>
      <h1 className="bg-red-500">Belajar API</h1>
      <Routes>
        <Route path='/user' element={<User />} />
        <Route path='/user/:id/detail' element={<DetailUser />} />
        <Route path='/user/create' element={<CreateUser />} />
        <Route path='*' element={<Navigate to="/user" replace={true}/>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;