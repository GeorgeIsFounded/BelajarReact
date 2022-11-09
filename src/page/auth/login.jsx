import Cookies from "js-cookie"
import Input from "../../komponen/input"
import { Navigate, useNavigate } from "react-router-dom"
import Button from "../../komponen/button"
import React from "react"
import { logInProgress } from "../../api/auth"
import { useDispatch } from "react-redux"
import { authLogin } from "../../redux/action/authAction"

export default function Login() {

    let dispatch = useDispatch();

    const [messageError, setMessageError] = React.useState()

    const [payload, setPayload] = React.useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setPayload((payload) => {
            return {
                ...payload,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true)
            const response = await dispatch(authLogin(payload));
            console.log('response', response)

            if (response?.status === "Success") {
                return navigate("/user", { replace: true })
            } else {
                setMessageError(response?.response?.data?.message)
            }
            // return navigate ("/user" , {replace : true});
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false)
        }
    };

    const [isLoading, setIsLoading] = React.useState(false)

    let navigate = useNavigate()

    return (
        <form
            onSubmit={handleSubmit}
            className="p-11 mt-11 flex justify-center">
            <div className="border-2 p-12 border-black rounded-xl bg-slate-300">
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
                <div className="flex justify-between">
                    <Button
                        color="black"
                        title={isLoading ? 'o o o' : 'login'}
                    />
                    <Button
                        onClick={() => {
                            navigate("/register", { replace: true });
                        }}
                        color="black"
                        title={'Register'}
                    />
                </div>
            </div>
        </form>

    )
}