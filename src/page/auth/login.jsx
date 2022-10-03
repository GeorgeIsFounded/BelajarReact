import Cookies from "js-cookie"
import Input from "../../komponen/input"
import { Navigate, useNavigate } from "react-router-dom"
import Button from "../../komponen/button"
import React from "react"
import { logInProgress } from "../../api/auth"

export default function Login() {

    const [login, setLogin] = React.useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setLogin((login) => {
            return {
                ...login,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(login);
        try {
            setIsLoading(true)
            const response = await logInProgress(login);
            const data = response.data;
            Cookies.set("myapps_token", data?.token)
            return navigate ("/user" , {replace : true});
        }catch (err) {
            console.log(err);
        }finally {
            setIsLoading(false)
        }
    };

    const [isLoading, setIsLoading] = React.useState(false)

    let navigate = useNavigate()

    return (
        <form
            onSubmit={handleSubmit}
            className="border-2 rounded-xl border-black p-11 mt-11 flex justify-center">
            <div className="">
                <h1 className="text-center">Login</h1>
                <Input
                    onChange={handleChange}
                    placeholder="email"
                    type="text"
                    name="email"
                    label="Email"
                />
                <Input
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    name="password"
                    label="Password"
                />
                <Button
                    color="black"
                    title={isLoading ? 'o o o' : 'login'}
                />
            </div>
        </form>

    )
}