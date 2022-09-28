import React  from "react";
import {Routes, Navigate, Route} from 'react-router-dom'
import UserDetail from './pages/userDetail';
import NotFound from './pages/NotFound';
import TambahBuku from './pages/TambahBuku'
import UpdateUser from './pages/updateUser'
import Home from './pages/home';
import Admin from './pages/admin';
import Dashboard from './pages/admin/dashboard';
import About from './pages/admin/about';
import Buku from './pages/admin/buku';

function App() {
  return(
    <React.Fragment>
      <Routes>
        <Route path="*" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/admin/:id/detail" element={<UserDetail/>}/>
        <Route path="/admin/tambah/:id" element={<TambahBuku/>}/>
        <Route path="/admin/update/:id" element={<UpdateUser/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/admin/dashboard" element={<Dashboard/>}/>
        <Route path="/admin/buku" element={<Buku/>}/>
        <Route path="/admin/about" element={<About/>}/>
        <Route path="404" element={<NotFound replace={true}/>}/>
      </Routes>
    </React.Fragment>
  )
}

export default App;