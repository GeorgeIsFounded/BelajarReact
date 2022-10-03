import axios from "./baseUrl2";

export function logInProgress(payload) {
    return axios.post("/login" , payload);
}