import React from 'react';
import yabai from '../../images/yabai.png';
import newpw from '../../images/new-password.png';
import Input from '../../module/input';
import { useNavigate, useParams } from 'react-router-dom';
import { IoCaretBackOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { authReset } from '../redux/action/authAction';

const ResetPassword = () => {
  let { id, token } = useParams();
  const Swal = require('sweetalert2');
  let dispatch = useDispatch();

  const [payload, setPayload] = React.useState({
    passwordBaru: '',
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
    console.log('submit jalan');
    try {
      setIsLoading(true);
      const response = await dispatch(authReset(id, token, payload));
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
          title: 'Check it again',
        });
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
        <div className="pl-52 pt-16">
          <form onSubmit={handleSubmit} className="">
            <div>
              <p className="font-bold text-3xl">Reset Password</p>
              <p className="w-96 text-sm text-gray-400">
                Enter your new password and be sure that it's easy to remember
              </p>
              <div className="flex-col h-42 space-y-2">
                <div className="h-[100px]">
                  <img src={newpw} alt="" />
                </div>
                <div className="pt-40 space-y-3">
                  <Input
                    value={payload.passwordBaru}
                    name="passwordBaru"
                    onChange={handleChange}
                    label={'New Password'}
                    type="password"
                  />
                  <Input
                    value={payload.confirmPassword}
                    name="confirmPassword"
                    onChange={handleChange}
                    label={'Confirm Password'}
                    type="password"
                  />
                </div>
              </div>
            </div>
            <div className="w-72">
              <button className="bg-black w-72 h-16 mt-12 text-white hover:border-black hover:border-2 hover:text-black hover:bg-white hover:scale-120 duration-150">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
