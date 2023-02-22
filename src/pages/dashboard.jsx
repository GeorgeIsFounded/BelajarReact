import React from 'react';
import { GiWashingMachine } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import clothes from '../images/clothes.jpg';

const Dashboard = () => {
  let navigate = useNavigate();
  return (
    <div className="p-5">
      <div className="border-black items-center border-2 h-[80px] w-full p-5 rounded-lg flex justify-between">
        <h1 className="flex items-center text-lg font-semibold">
          B<GiWashingMachine size={30} className="mb-2" />
          GEM
        </h1>
        Dashboard
        <div className="flex">
          <button
            onClick={() => {
              return navigate('/login');
            }}
            className="hover:border-b-2 hover:border-red-500 duration-150 text-red-500"
          >
            Log Out
          </button>
        </div>
      </div>
      <div className="w-full flex">
        <div className="flex h-[300px] w-[750px] pt-2">
          <div className="flex-col w-full space-y-2">
            <div className="bg-[url('images/clothes.jpg')] bg-bottom duration-150 hover:shadow-xl border-black border-2 h-full w-full p-5 rounded-lg flex justify-between">
              <h1 className="font-semibold text-[30px] text-white shadow-2xl h-0 ">
                Outlet
              </h1>
            </div>
            <div className="bg-[url('images/clothes1.jpg')] bg-right duration-150 hover:shadow-xl border-black border-2 h-full w-full p-5 rounded-lg flex justify-between">
              <h1 className="font-semibold text-[30px] text-white shadow-black shadow-2xl h-0 ">
                Paket Cucian
              </h1>
            </div>
          </div>
        </div>
        <div className="pt-2 pl-2 h-[600px]">
          <div className="border-black items-center border-2 h-full w-[700px] p-5 rounded-lg flex justify-between"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
