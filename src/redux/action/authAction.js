import { logInProcess, registerProcess, authMeProcess } from "../../api/auth";
import Cookies from "js-cookie";

export function authRegister(payload) {
    return async (dispatch) => {
        try {
            let response = await registerProcess(payload);
            let data = response.data
            dispatch({
                type: "Register",
                name: data?.user?.name,
                email: data?.user?.email,
                password: data?.user?.password,
                password_confirmation: data?.user?.password_confirmation,
                isAuth: true,
            });

            Cookies.set("myapps_token", data?.token)
            return data;
        } catch (err) {
            console.log(err);
            return err
        }
    }
} 

export function authMe(payload) {
    return async (dispatch) => {
        try {
            let response = await authMeProcess();
            let data = response.data;

            dispatch({
                type: "Login",
                name: data?.user?.name,
                email: data?.user?.email,
                password: data?.user?.password,
                isAuth: true,
            });

            Cookies.set("myapps_token", data?.token)
            return data;
        } catch (err) {
            console.log(err);
            return err
        }
    }
} 

export function authLogin(payload) {
    return async (dispatch) => {
        try {
            let response = await logInProcess(payload)
            let data = response.data
            dispatch({
                type : "Login",
                name : data?.user?.name,
                email : data?.user?.email,
                isAuth : true
            })
            Cookies.set("myapps_token", data?.token);
            return data
        } catch (error) {
            console.log(error);
            return error;
        }
    }
}