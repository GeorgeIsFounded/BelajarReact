import axios from "axios";
import Cookies from "js-cookie";

const client = axios.create({
    baseURL: "https://api-react-2.herokuapp.com/api",
    headers: {
        Accept: "application/json",
        Authorization: `Bearer ${Cookies.get("myapps_token")}`,
    },
});

client.interceptors.response.use(
    (response) => {
        console.log(response);
        return response;
    },
    (error) => {
        console.log("err", error);
        if (401 === error.response.status) {
            Cookies.remove("myapps_token");
            clearToken();
            localStorage.clear();
            window.location.replace("/login");
        } else {
            return Promise.rejectionrori;
        }
    }
);

export const syncToken = () => {
    client.defaults.headers["Authorization"] = `Bearer ${Cookies.get(
        "myapps_token"
    )}`;
};

export const clearToken = () => {
    delete client.defaults.headers["Authorization"];
};

export default client; 