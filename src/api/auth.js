import axios, { syncToken } from "./baseUrl2";

export function logInProcess(payload) {
    return axios.post("/login" , payload);
}

export function registerProcess(payload) {
    return axios.post("/register" , payload);
}

export function authMeProcess() {
    syncToken()
    return axios.get("/authme");
}