import React from 'react'
import Button from '../module/Button'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Admin() {
  let navigate = useNavigate()
  const handleDashboard = () => {
    return navigate('/admin/dashboard')
  }
  const handleBuku = () => {
    return navigate('/admin/buku')
  }
  const handleAbout = () => {
    return navigate('/admin/about')
  }
  return (
    <React.Fragment>
      <div className='flex flex-row'>
        <div className='basis-1/5 flex flex-col'>
          <Button title={'Dashboard'} onClick={handleDashboard} />
          <Button title={'Buku'} onClick={handleBuku} />
          <Button title={'About'} onClick={handleAbout} />
        </div>
        <div className='basis-3/4'>
          <h1 className='text-center'>PAGE ADMIN</h1>
        </div>
        <Outlet />
      </div>
    </React.Fragment>
  )
}