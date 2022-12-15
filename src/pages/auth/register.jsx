import React from 'react';
import yabai from '../../images/yabai.png';
import Input from '../../module/input';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { authRegister } from '../redux/action/authAction';

const Register = () => {
  const Swal = require('sweetalert2');
  let dispatch = useDispatch();

  const navigate = useNavigate();
  const [error, setError] = React.useState({});
  const [errorForm, setErrorForm] = React.useState('');

  const [payload, setUser] = React.useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    status: '',
    jenisKelamin: '',
  });

  const handleChange = (e) => {
    setUser((payload) => {
      return { ...payload, [e.target.name]: e.target.value };
    });
    console.log('tes');
  };

  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await dispatch(authRegister(payload));
      console.log('response', response);
      if (response?.data?.password.length < 8) {
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
          title: 'Password must have 8 letters lenght',
        });
        return navigate('/login', { replace: true });
      }
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
          title: 'Succesfully Registered',
        });
        return navigate('/login', { replace: true });
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
          title: 'Please check your form again',
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
    console.log(payload);

    if (
      payload.name === '' ||
      payload.email === '' ||
      payload.password === '' ||
      payload.confirmPassword === '' ||
      payload.status === '' ||
      payload.jenisKelamin === ''
    ) {
      setErrorForm("There's Empty Form");
      if (payload.name === '') {
        setError((errors) => {
          return {
            ...errors,
            name: true,
          };
        });
      }
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
      if (payload.confirmPassword === '') {
        setError((errors) => {
          return {
            ...errors,
            password: true,
          };
        });
      }
      if (payload.status === 'status') {
        setError((errors) => {
          return {
            ...errors,
            status: true,
          };
        });
      }
      if (payload.jenisKelamin === 'pilih') {
        setError((errors) => {
          return {
            ...errors,
            jenisKelamin: true,
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
  return (
    <div>
      <div className="flex ml-64">
        <div className=" pr-32 pt-5">
          <div className="space-y-10">
            <p className="font-bold">Get Started</p>
            <form isError={errorForm} onSubmit={handleSubmit}>
              <p className="font-bold text-3xl">Register</p>
              <div className="flex space-x-1">
                <p className="font-small text-md text-gray-400">
                  Already have an account?
                </p>
                <button
                  onClick={() => {
                    return navigate('/login');
                  }}
                  className="fonst-small text-md text-black hover:underline"
                >
                  Sign In
                </button>
              </div>
              <div className="flex-col pt-3 h-full space-y-3">
                <Input
                  isError={error.name}
                  value={payload.name}
                  name="name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label={'Your name'}
                />
                <Input
                  isError={error.email}
                  value={payload.email}
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label={'Your email'}
                />
                <Input
                  isError={error.password}
                  value={payload.password}
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label={'Password'}
                  type="password"
                />
                <Input
                  isError={error.confirmPassword}
                  value={payload.confirmPassword}
                  name="confirmPassword"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  label={'Confirm Password'}
                  type="password"
                />
                <div className="flex">
                  <select
                    name="status"
                    isError={error.status}
                    value={payload.status}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className="w-32 h-10 text-gray-400 hover:text-black"
                    id="status"
                  >
                    <option value="status">status</option>
                    <option value="active">active</option>
                    <option value="nonactive">nonactive</option>
                  </select>
                  <select
                    value={payload.jenisKelamin}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className="w-32 h-10 text-gray-400 hover:text-black"
                    name="jenisKelamin"
                    id="jenisKelamin"
                  >
                    <option value="pilih">pilih</option>
                    <option value="laki-laki">laki-laki</option>
                    <option value="perempuan">perempuan</option>
                  </select>
                </div>
              </div>
              <button
                onClick={() => {}}
                className="bg-black w-72 h-16 mt-16 text-white hover:border-black hover:border-2 hover:text-black hover:bg-white hover:scale-120 duration-150"
              >
                Sign Up
              </button>
            </form>
          </div>
          <div className="w-72">
            <p className="text-gray-400 text-sm mt-2">
              By signing up you agree to our Privacy and Policy and Terms of
              Service
            </p>
          </div>
        </div>
        <div className="h-screen ml-[160px] w-[55%]">
          <img src={yabai} alt="" className="h-[100%] w-full" />
        </div>
      </div>
    </div>
  );
};

export default Register;
