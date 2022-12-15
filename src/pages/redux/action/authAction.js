import {
  authMeProcess,
  loginProses,
  registerProses,
  forgotProses,
  resetProses
} from '../../../API/auth';
import Cookies from 'js-cookie';

export function authLogin(payload) {
  return async (dispatch) => {
    try {
      const response = await loginProses(payload);
      const data = response.data;
      dispatch({
        type: 'login',
        name: data?.user?.name,
        email: data?.user?.email,
        password: data?.user?.password,
        status: data?.user?.status,
        jenisKelamin: data?.user?.jenisKelamin,
        isAuth: true,
      });
      Cookies.set('myapps_token', data?.token);
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
}

export function authRegister(payload) {
  return async (dispatch) => {
    try {
      const response = await registerProses(payload);
      const data = response.data;
      dispatch({
        type: 'login',
        name: data?.user?.name,
        email: data?.user?.email,
        password: data?.user?.password,
        status: data?.user?.status,
        jenisKelamin: data?.user?.jenisKelamin,
        isAuth: true,
      });
      Cookies.set('myapps_token', data?.token);
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
}

export function authForgot(payload) {
  return async (dispatch) => {
    try {
      const response = await forgotProses(payload);
      const data = response.data;
      dispatch({
        type: 'login',
        email: data?.user?.email,
        isAuth: true,
      });
      Cookies.set('myapps_token', data?.token);
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
}

export function authReset(id, token, payload) {
  return async (dispatch) => {
    try {
      const response = await resetProses(id, token, payload);
      const data = response.data;
      // dispatch({
      //   type: 'login',
      //   email: data?.user?.email,
      //   password: data?.user?.password,
      //   isAuth: true,
      // });
      Cookies.set('myapps_token', data?.token);
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
}

export function authMe(payload) {
  return async (dispatch) => {
    try {
      let response = await authMeProcess();
      let data = response.data;

      dispatch({
        type: 'login',
        name: data?.user?.name,
        email: data?.user?.email,
        isAuth: true,
      });

      Cookies.set('myapps_token', data?.token);
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
}