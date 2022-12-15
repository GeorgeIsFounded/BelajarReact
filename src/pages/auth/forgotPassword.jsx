import React from 'react';
import yabai from '../../images/yabai.png';
import forgot from '../../images/forgotpw.png';
import Input from '../../module/input';
import { useNavigate } from 'react-router-dom';
import { IoCaretBackOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { authForgot } from '../redux/action/authAction';

const ForgotPassword = () => {
  const Swal = require('sweetalert2');
  let dispatch = useDispatch();

  const [error, setError] = React.useState({});
  const [payload, setPayload] = React.useState({
    email: '',
  });

  const handleChange = (e) => {
    setPayload((payload) => {
      return { ...payload, [e.target.name]: e.target.value };
    });
    console.log('tes');
  };

  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit jalan")
    try {
      setIsLoading(true);
      const response = await dispatch(authForgot(payload));
      console.log('response', response);
      if (response?.status === 'Success') {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: response.msg
        })
      } else {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: 'error',
          title: 'Check again',
        });
      }
      if (response?.response?.data === 'Error') {
        return 
      } 
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
    console.log(payload);
  };

  const navigate = useNavigate();
  return (
    <div>
      <div className="flex">
        <div className="h-screen w-[45%]">
          <img src={yabai} alt="" className="h-[100%] w-full" />
        </div>
        <div className="p-3">
          <button
            onClick={() => {
              return navigate('/login');
            }}
            className="border-black border h-7 w-7 rounded-full flex justify-center items-center text-xl pr-1"
          >
            <IoCaretBackOutline />
          </button>
        </div>
        <div className="pl-52 pt-20">
          <form onSubmit={handleSubmit}>
            <div>
              <p className="font-bold text-3xl">Forgot Password?</p>
              <p className="w-96 text-sm text-gray-400">
                Don't worry! It happends. Please enter your address associated
                with your account.
              </p>
              <div className="flex-col pt-8 h-42 space-y-3">
                <div className="h-[100px]">
                  <img src={forgot} alt="" />
                </div>
                <div className="pt-40">
                  <Input
                    onChange={handleChange}
                    value={payload.email}
                    name="email"
                    label={'Email'}
                  />
                </div>
              </div>
            </div>
            <div className="w-72">
              <button
                className="bg-black w-72 h-16 mt-12 text-white hover:border-black hover:border-2 hover:text-black hover:bg-white hover:scale-120 duration-150"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
