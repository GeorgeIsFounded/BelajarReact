import React from "react";
import Button from "../komponen/button";
import Input from "../komponen/input";
import axios from "axios";
import Select from "../komponen/select";
import { useNavigate, useParams } from "react-router-dom";
import { createUser } from "../api/user";

export default function CreateUser() {
    let navigate = useNavigate();

    // kenapa id karena di routingnya kita kasi nama ID
    const [err, setError] = React.useState({})

    const [isLoading, setIsLoading] = React.useState(false)

    let [errorMessage, setErrorMessage] = React.useState('');

    const [payload, setPayload] = React.useState({
        username: "",
        name: "",
        email: "",
        jenis_kelamin: "",
        password: "",
        konfirmasi_password: "",
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
        try {
            e.preventDefault();
            await createUser(payload);
            alert("Success Creating User")
            return navigate("/users", {replace : true});
        } catch (err) {
            console.log(err);
            setIsLoading(false);
            setError(err?.response?.data?.errors);
            setPayload({
                username: "",
                name: "",
                email: "",
                jenis_kelamin: "",
                password: "",
                konfirmasi_password: "",
            });
        }
    };

    return (
        <div className="flex justify-center ">
            <form
                onsubmit={handleSubmit}
                className="border-2 rounded-xl border-black p-6 mt-11">
                <h1 className="text-center mb-11">Create User</h1>
                <div>
                    <Input
                        onChange={handleChange}
                        value={payload.username}
                        isError={""}
                        label="Username"
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Username"
                    />
                    <Input
                        onChange={handleChange}
                        value={payload.name}
                        isError={""}
                        label="Name"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                    />
                    <Input
                        onChange={handleChange}
                        value={payload.email}
                        isError={""}
                        label="Email"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Username"
                    />
                    <Select
                        value={payload.jenis_kelamin}
                        label={"jenis_kelamin"}
                        placeholder="jenis kelamin"
                        name="jenis_kelamin"
                        onChange={handleChange}
                    >
                        <option>
                            pilih
                        </option>
                        <option value={"laki-laki"}>laki-laki</option>
                        <option value={"perempuan"}>perempuan</option>
                    </Select>
                    <Input
                        onChange={handleChange}
                        value={payload.password}
                        isError={""}
                        label="Password"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                    />
                    <Input
                        value={payload.konfirmasi_password}
                        placeholder="loeca123"
                        label={"Konfirmasi password :"}
                        name="konfirmasi_password"
                        type="password"
                        id="konfirmasiPassword"
                        onChange={handleChange}
                    />
                    <div className="flex justify-between">
                        <Button
                            title={isLoading ? "Canceling" : "Back"}
                            onClick={() => {
                                navigate("/user")
                            }}
                            className="h-5"
                        />
                        <Button
                            title={isLoading ? "Saving" : "Save"}
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}
