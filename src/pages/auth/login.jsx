import React from 'react';
import yabai from '../../images/yabai.png';
import Input from '../../module/input';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { authLogin } from '../redux/action/authAction';
import '../../styles/styles.css';

const Login = () => {
  const Swal = require('sweetalert2');
  let dispatch = useDispatch();

  const [error, setError] = React.useState({});
  const [payload, setPayload] = React.useState({
    email: '',
    password: '',
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

    try {
      setIsLoading(true);
      const response = await dispatch(authLogin(payload));
      console.log('response', response);
      if (response?.status === 'Success') {
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
          icon: 'success',
          title: 'Signed in successfully',
        });
        return navigate('/dashboard', { replace: true });
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
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }

    console.log(payload);

    if (payload.password.length <= 8) {
      setError('password must have 8 length');
    } else {
      setError('');
    }
    if (payload.email === '' || payload.password === '') {
      if (payload.email === '') {
        setError((errors) => {
          return {
            ...errors,
            email: true,
          };
        });
      }
      if (payload.password === '') {
        setError((errors) => {
          return {
            ...errors,
            password: true,
          };
        });
      }
      return;
    }
  };

  const handleBlur = (e) => {
    if (e.target.value === '')
      setError((errors) => {
        return {
          ...errors,
          [e.target.name]: true,
        };
      });
    else
      setError((errors) => {
        return {
          ...errors,
          [e.target.name]: false,
        };
      });
  };

  const navigate = useNavigate();
  return (
    <div>
      <div className="flex">
        <div className="h-screen w-[45%]">
          <img src={yabai} alt="" className="h-[100%] w-full" />
        </div>
        <div className="pl-60 pt-12">
          <div className="space-y-12">
            <p className="font-bold">Welcome back</p>
            <form onSubmit={handleSubmit}>
              <p className="font-bold text-3xl">Login</p>
              <div className="flex space-x-1">
                <p className="font-small text-md text-gray-400">
                  Don't have any account?
                </p>
                <button
                  onClick={() => {
                    return navigate('/register');
                  }}
                  className="hover:underline"
                >
                  Sign Up
                </button>
              </div>
              <div className="flex-col pt-8 h-42 space-y-5">
                <div>
                  <Input
                    name="email"
                    value={payload.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isError={error.email}
                    label={'Your name/Email'}
                  />
                </div>
                <div>
                  <Input
                    name="password"
                    value={payload.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isError={error.password}
                    label={'Password'}
                    type="password"
                  />
                  <div className="flex justify-end">
                    <button
                      onClick={() => {
                        return navigate('/forgot-password');
                      }}
                      className="text-gray-400 text-sm font-thin"
                    >
                      Forgot Password?
                    </button>
                  </div>
                </div>
                <div className="w-72">
                  <button className="fancy" href="/">
                    <span className="top-key" />
                    <span className="text">Sign In</span>
                    <span className="bottom-key-1" />
                    <span className="bottom-key-2" />
                  </button>
                  <p className="text-gray-400 text-sm mt-2">
                    Welcome back! Hope you will always have a good day
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
