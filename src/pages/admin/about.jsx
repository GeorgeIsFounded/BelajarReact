import React from "react";
import {useNavigate} from 'react-router-dom';

export default function About() {

  let navigate = useNavigate()

  return (
    <div>
      <h1 className="bg-red-500 text-center">APLIKASI DIBUAT OLEH iqbal</h1>
      <button
      onClick={() => {
        return navigate(-1)
      }}
      className="border-2 px-6 mt-4 ml-5 border-black rounded-full bg-slate-500"
      >
        Back
      </button>
    </div>
  );
}
