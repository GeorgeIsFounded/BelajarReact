import axios from 'axios';
import Cookies from 'js-cookie';

const login = axios.create({
  baseURL: 'https://sainuu.xyz',
  headers: {
    Accept: 'application/json',
    Autorization: `${Cookies.get('myapps_token')}`,
  },
});

login.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log('err', error);
    if (401 === error.response.status) {
      Cookies.remove('myapps_token');
      clearToken();
      localStorage.clear();
      window.location.replace('/login');
    } else {
      return Promise.reject(error);
    }
  }
);
export const syncToken = () => {
  login.defaults.headers['Authorization'] = `Bearer ${Cookies.get(
    'myapps_token'
  )}`;
};
export const clearToken = () => {
  delete login.defaults.headers['Authorization'];
};
export default login;