import React from 'react';
import Input from '../komponen/input';
import emailPic from '../images/sendmail.png';
import 'swiper/css/autoplay';
import Register from './register';
import { useNavigate } from 'react-router-dom';
import { BsFillCaretLeftFill } from 'react-icons/bs';
import { MdEmail, MdSend } from 'react-icons/md';

const ForgotPassword = () => {
  let navigate = useNavigate();
  return (
    <div className="p-10">
      <div className="bg-black h-full w-full p-10 rounded-lg flex justify-between">
        <div className="bg-white rounded-lg shadow-md h-[600px] w-[200px] p-5"></div>
        <div className="bg-white rounded-lg shadow-md h-[600px] w-[900px] p-5">
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-xl font-medium">Forgot Password?</h1>
            <div className="h-2 bg-black w-[50px] rounded-xl"></div>
          </div>
          <h1>We will send a code on your email!</h1>
          <div className="pt-20 h-[270px] space-y-5 flex justify-center flex-col">
            <div className="ml-56 mt-14 w-[400px] bg-cover ">
              <img src={emailPic} alt="" className="bg-cover" />
            </div>
            <div className="flex items-center justify-between w-full">
              <Input label={'Email'} name="email" />
              <div className=""><MdEmail size={30}/></div>
            </div>
          </div>
          <div className="flex w-[860px] mt-40 items-center space-x-24 justify-between">
            <button
              onClick={() => {
                return navigate(-1);
              }}
              className="bg-black w-1 h-16 hover:border-black hover:border-2 hover:bg-white hover:scale-120 duration-150"
            >
              <BsFillCaretLeftFill size={40} />
            </button>
            <button
              onClick={() => {}}
              className="bg-black w-72 h-16 text-white hover:border-black hover:border-2 hover:text-black hover:bg-white hover:scale-120 duration-150"
            >
              <div className='flex items-center justify-center'>Send <MdSend className='ml-2 hover:translate-x-3 duration-150'/></div> 
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md h-[600px] w-[200px] p-5"></div>
      </div>
    </div>
  );
};

export default ForgotPassword;
