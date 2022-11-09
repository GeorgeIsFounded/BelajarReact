import Cookies from "js-cookie"
import Input from "../../komponen/input"
import { Navigate, useNavigate } from "react-router-dom"
import Button from "../../komponen/button"
import React from "react"
import { useDispatch } from "react-redux"
import { authRegister } from "../../redux/action/authAction"

export default function Register() {

    let dispatch = useDispatch();

    const [errorName, setErrorName] = React.useState();
    const [errorEmail, setErrorEmail] = React.useState();
    const [errorPassword, setErrorPassword] = React.useState();
    const [errorConfirmPassword, setErrorConfirmPassword] = React.useState();
    const [messageError, setMessageError] = React.useState()

    const [payload, setPayload] = React.useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
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
            const response = await dispatch(authRegister(payload));
            console.log('response', response)
            if (response?.status === "Success") {
                return navigate("/user", { replace: true })
            } else {
                // setErrorName(response?.response?.data?.errors?.name),
                // setErrorEmail(response?.response?.data?.errors?.email),
                // setErrorPassword(response?.response?.data?.errors?.password),
                // setErrorConfirmPassword(response?.response?.data?.errors?.password_confirmation)
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
                <p className="text-red-500">{messageError}</p>
                <h1 className="text-center">Register</h1>
                <p className="text-red-500 font-thin">{errorName}</p>
                <Input
                    onChange={handleChange}
                    placeholder="name"
                    type="text"
                    name="name"
                    label="Name"
                />
                <p className="text-red-500 font-thin">{errorEmail}</p>
                <Input
                    onChange={handleChange}
                    placeholder="email"
                    type="text"
                    name="email"
                    label="Email"
                />
                <p className="text-red-500 font-thin">{errorPassword}</p>
                <Input
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    name="password"
                    label="Password"
                />
                <p className="text-red-500 font-thin">{errorConfirmPassword}</p>
                <Input
                    onChange={handleChange}
                    type="password"
                    placeholder="Password_confirmation"
                    name="password_confirmation"
                    label="Password Confirmation"
                />
                <div className="flex justify-between">
                    <Button
                        onClick={() => {
                            navigate("/login", { replace: true });
                        }}
                        color="black"
                        title={'Go Back'}
                    />
                    <Button
                        color="black"
                        title={isLoading ? 'o o o' : 'Register'}
                    />
                </div>
            </div>
        </form>

    )
}