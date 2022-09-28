import React from "react";
import Input from "../komponen/input";
import Button from "../komponen/button";
import Select from "../komponen/select";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

function Createuser() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = React.useState(false);
    const [users, setUsers] = React.useState({
        username: "",
        email: "",
        name: "",
        jenis_kelamin: "",
        password: "",
        password_confirmation: "",
    });

    const handleChange = (e) => {
        setUsers((users) => {
            return { ...users, [e.target.name]: e.target.value };
        });
        console.log("tes");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(users);
        try {
            setIsLoading(true);
            const response = await axios.post(
                "https://belajar-react.smkmadinatulquran.sch.id/api/users/create",
                users
            );
            setUsers(response.data)
            setIsLoading(false);
            alert("Success Creating User")
            return navigate("/users");
        } catch (err) {
            console.log(err);
            alert("Failed Creating User");
            setIsLoading(false);
            setUsers({
                username: "",
                email: "",
                name: "",
                jenis_kelamin: "",
                password: "",
                password_confirmation: "",
            });
        }
    };
    return (
        <React.Fragment>
            <p className="text-center font-bold uppercase mt-10">User Register</p>
            <div className="flex justify-center">
                <form
                    onSubmit={handleSubmit}
                    className="mt-5 space-y-5 w-[830px] h-[510px] border border-black p-5"
                >
                    <div className="flex space-x-2 space-between">
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
                            value={users.username}
                            isError={""}
                            label="Username"
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Username"
                        />
                    </div>
                    <div>
                        <Input
                            onChange={handleChange}
                            value={users.email}
                            isError={""}
                            label="Email"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                        />
                    </div>
                    <div>
                        <Select
                            value={users.jenis_kelamin}
                            label={"jenis_kelamin"}
                            placeholder="jenis kelamin"
                            name="jenis_kelamin"
                            onChange={handleChange}
                        >
                            <option>
                                Pilih
                            </option>
                            <option value={"laki-laki"}>laki-laki</option>
                            <option value={"perempuan"}>perempuan</option>
                        </Select>
                    </div>
                    <div>
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
                    </div>
                    <div>
                        <Input
                            onChange={handleChange}
                            value={users.password_confirmation}
                            isError={""}
                            label="Confirm Password"
                            type="password"
                            name="password_confirmation"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                        />
                    </div>

                    <div className="flex flex-row justify-between">
                        <NavLink to="/user" className={`border border-black p-2 px-5`}>
                            Cancel
                        </NavLink>
                        <Button
                            className={`border border-black p-2 px-5`}
                            title={isLoading ? "Submitting" : "Submit"}
                        />
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}

export default Createuser;