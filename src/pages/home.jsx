import React from "react";
import Button from "../module/Button";
import {useNavigate} from 'react-router-dom';

export default function Home() {
    let navigate = useNavigate()
    const handleClick = () => {
        return navigate('/admin/dashboard')
    }
    const handleHome = () => {
        return navigate('/home')
    }
  return (
    <React.Fragment>
      <h1 className="text-center my-auto">PENILAIAN TENGAH SEMESTER</h1>
      <div className="container mx-auto h-10 w-25 grid grid-cols-2">
        <div className="mx-80">
          <Button title={"Login"} onClick={handleClick}/>
        </div>
        <div className="mx-80">
          <Button title={"Home"} onClick={handleHome} />
        </div>
      </div>
    </React.Fragment>
  );
}