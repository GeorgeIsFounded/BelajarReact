import React from 'react';
import Input from '../komponen/input';
import Laundry from '../images/laundry.jpeg';
import Laundry2 from '../images/laundry.jpg';
import Laundry3 from '../images/clothe1.jpg';
import Laundry4 from '../images/clothe2.jpg';
import { GiWashingMachine } from 'react-icons/gi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  let navigate = useNavigate();
  return (
    <div className="p-10">
      <div className="bg-black h-full w-full p-10 rounded-lg flex justify-between">
        <div className="bg-white rounded-lg shadow-md h-[600px] w-[500px] p-5">
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-xl font-medium">Register</h1>
            <div className="h-2 bg-black w-[50px] rounded-xl"></div>
          </div>
          <div className="pt-12 h-[270px] space-y-3">
            <div className="flex items-center space-x-[160px] w-[600px]">
              <Input label={'Email'} name="email" />
              <div className="h-2 bg-black w-[30px] rounded-xl"></div>
            </div>
            <div className="flex items-center space-x-[160px] w-[600px]">
              <Input label={'Name'} name="name" />
              <div className="h-2 bg-black w-[30px] rounded-xl"></div>
            </div>
            <div className="flex items-center space-x-[160px] w-[600px]">
              <Input label={'Password'} name="password" />
              <div className="h-2 bg-black w-[30px] rounded-xl"></div>
            </div>
          </div>
          <div className="flex mt-20 items-center space-x-24">
            <button
              onClick={() => {}}
              className="bg-black w-72 h-16  text-white hover:border-black hover:border-2 hover:text-black hover:bg-white hover:scale-120 duration-150"
            >
              Sign Up
            </button>
            {/* <GiWashingMachine
              size={60}
              className="p-0 hover:h-[65px] hover:w-[65px] duration-150"
            /> */}
          </div>
          <div className="flex justify-center mt-24">
            Already have an account?{' '}
            <button
              className="hover:border-b-2 hover:border-black duration-100"
              onClick={() => {
                return navigate('/Login')
              }}
            >
              Login
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md h-[600px] w-[850px] p-5">
          <Swiper
            className="w-full h-full"
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            autoplay={{delay: 2000}}
            slidesPerView={1}
            pagination={{clickable: true}}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className="w-[500px]" data-swiper-autoplay="2000">
              <img className="h-[700px]" src={Laundry} alt="" />
            </SwiperSlide>
            <SwiperSlide className="w-[500px]" data-swiper-autoplay="2000">
              <img className="h-[700px]" src={Laundry2} alt="" />
            </SwiperSlide>
            <SwiperSlide className="w-[500px]" data-swiper-autoplay="2000">
              <img className="h-[700px]" src={Laundry3} alt="" />
            </SwiperSlide>
            <SwiperSlide className="w-[500px]" data-swiper-autoplay="2000">
              <img className="h-[700px]" src={Laundry4} alt="" />
            </SwiperSlide>
            ...
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Register;
