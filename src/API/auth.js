import login, { syncToken } from './baseUrl';
import register from './baseUrl';
import forgot from './baseUrl';
import reset from './baseUrl'

export async function loginProses(payload) {
  return login.post(`/login`, payload);
}

export async function registerProses(payload) {
  return register.post(`/register`, payload);
}

export async function forgotProses(payload) {
  return forgot.post(`/lupa-password`, payload);
}

export async function resetProses(id,token,payload) {
  return reset.post(`/reset-password/${id}/${token}`, payload);
}

export function authMeProcess() {
  syncToken();
  return login.get('/authme');
}