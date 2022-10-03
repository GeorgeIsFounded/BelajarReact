import React from "react";
import Button from "../komponen/button";
import Input from "../komponen/input";
import axios from "axios";
import Select from "../komponen/select";
import { useNavigate, useParams } from "react-router-dom";

function CreateUser() {
    let navigate = useNavigate();

    // kenapa id karena di routingnya kita kasi nama ID
    const [err, setError] = React.useState({})

    const [isLoading, setIsLoading] = React.useState(false)

    let [errorMessage, setErrorMessage] = React.useState('');

    const [users, setUser] = React.useState({
        username: "",
        name: "",
        email: "",
        jenis_kelamin: "laki-laki",
        password: "",
        konfirmasi_password: "",
    });



    const handleChange = (e) => {
        setUser((users) => {
            return {
                ...users,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(users);
        try {
            setIsLoading(true);
            const response = await axios.post(
                "https://belajar-react.smkmadinatulquran.sch.id/api/users/create",
                users
            );
            setIsLoading(false);
            alert("Success Creating User")
            return navigate("/users");
        } catch (err) {
            console.log(err);
            setIsLoading(false);
            setError(err?.response?.data?.errors);
            setUser({
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
                <h1>Create User</h1>
                <p className="text-red-500">{errorMessage}</p>
                <div>
                    <Input
                        onChange={handleChange}
                        value={users.username}
                        isError={""}
                        label="Username"
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Username"
                    />
                    <Input
                        onChange={handleChange}
                        value={users.name}
                        isError={""}
                        label="Name"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                    />
                    <Input
                        onChange={handleChange}
                        value={users.email}
                        isError={""}
                        label="Email"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Username"
                    />
                    <Select
                        value={users.jenis_kelamin}
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
                        value={users.password}
                        isError={""}
                        label="Password"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                    />
                    <Input
                        value={users.konfirmasi_password}
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

export default CreateUser;