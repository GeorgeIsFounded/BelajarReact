import React from 'react';
import Input from '../komponen/input';
import Laundry from '../images/laundry.jpeg';
import Laundry2 from '../images/laundry.jpg';
import Laundry3 from '../images/clothe1.jpg';
import Laundry4 from '../images/clothe2.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import Swal from 'sweetalert2';
import * as Yup from 'yup';

const Register = () => {
  const SignupSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, 'Password must have 8 lenght')
      .required('Required'),
  });
  let navigate = useNavigate();
  return (
    <div className="p-10">
      <div className="bg-black h-full w-full p-10 rounded-lg flex justify-between">
        <div className="bg-white rounded-lg shadow-md h-[600px] w-[500px] p-5">
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-xl font-medium">Register</h1>
            <div className="h-2 bg-black w-[50px] rounded-xl"></div>
          </div>
          <Formik
            validationSchema={SignupSchema}
            initialValues={{ email: '', password: '', jenisKelamin: '...' }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              if (!values.jenisKelamin) {
                errors.jenisKelamin = 'Required';
              }
              if (!values.password) {
                errors.password = 'Required';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                const Toast = Swal.mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 2000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer);
                    toast.addEventListener('mouseleave', Swal.resumeTimer);
                  },
                });
                Toast.fire({
                  icon: 'success',
                  title: 'Registered successfully',
                });
                navigate('/dashboard');
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form
                onSubmit={handleSubmit}
                className="pt-16 h-[270px] space-y-5"
              >
                <div className="flex items-center space-x-[160px] w-[600px]">
                  <div>
                    <Input
                      value={values.email}
                      type="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label={'Email'}
                      name="email"
                    />
                    <h1 className="text-red-500">
                      {errors.email && touched.email && errors.email}
                    </h1>
                  </div>
                  <div className="h-2 bg-black w-[30px] rounded-xl"></div>
                </div>
                <div className="flex items-center space-x-[160px] w-[600px]">
                  <div className="border-b-2 border-black space-y-3">
                    <h1>Jenis Kelamin</h1>
                    <select
                      className="w-[270px] hover:border-l-2 hover:border-r-2 hover:border-t-2 hover:border-black"
                      value={values.jenisKelamin}
                      type="jenisKelamin"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="jenisKelamin"
                    >
                      <option value="...">...</option>
                      <option value="laki-laki">laki-laki</option>
                      <option value="perempuan">perempuan</option>
                    </select>
                  </div>
                  <div className="h-2 bg-black w-[30px] rounded-xl"></div>
                </div>
                <div className="flex items-center space-x-[160px] w-[600px]">
                  <div>
                    <Input
                      value={values.password}
                      type="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      label={'Password'}
                      name="password"
                    />
                    <h1 className="text-red-500">
                      {errors.password && touched.password && errors.password}
                    </h1>
                  </div>
                  <div className="h-2 bg-black w-[30px] rounded-xl"></div>
                </div>
                <div className="flex mt-28 items-center space-x-24">
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
              </form>
            )}
          </Formik>

          <div className="flex justify-center mt-60">
            Already have an account?{' '}
            <button
              className="hover:border-b-2 hover:border-black duration-100"
              onClick={() => {
                return navigate('/Login');
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
            autoplay={{ delay: 2000 }}
            slidesPerView={1}
            pagination={{ clickable: true }}
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
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Register;
