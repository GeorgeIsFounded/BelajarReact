import React from "react";
import Button from "../komponen/button";
import Input from "../komponen/input";
import axios from "axios";
import Select from "../komponen/select";
import UpdateUser from "./UpdateUser";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {

    let navigate = useNavigate();

    const [isLoading, setIsLoading] = React.useState(false)

    const [users, setUsers] = React.useState({
        username: "",
        name: "",
        email: "",
        jenis_kelamin: "laki-laki",
        password: "",
        konfirmasi_password: "",
    });


    const handleChange = (e) => {
        setUsers((users) => {
            return {
                ...users,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(users)


        try {
            setIsLoading(true);
            const response = await axios.post("https://belajar-react.smkmadinatulquran.sch.id/api/users/create", users)
            setIsLoading(false)
            return navigate('users')
        }
        catch (err) {
            setIsLoading(false)
            alert('Terjadi Error pada backEnd')
        }
    }

    return (
        <div className="flex justify-center ">
            <form className="border-2 rounded-xl border-black p-6 mt-11">
                <div>
                    <Input
                        onsubmit={handleSubmit}
                        value={users.username}
                        placeholder="username"
                        label={"Username :"}
                        name="username"
                        onChange={handleChange}
                    />
                    <Input
                        onsubmit={handleSubmit}
                        value={users.name}
                        placeholder="name"
                        label={"Name :"}
                        name="name"
                        onChange={handleChange}
                    />
                    <Input
                        onsubmit={handleSubmit}
                        value={users.email}
                        placeholder="ex@gmail.com"
                        label={"Email :"}
                        name="email"
                        onChange={handleChange}
                    />
                    <label htmlFor="jenis_kelamin">Jenis Kelamin</label>
                    <Select
                        value={users.jenis_kelamin}
                        label={"jenis_kelamin"}
                        placeholder="jenis kelamin"
                        name="jenis_kelamin"
                        onChange={handleChange}
                    >
                        <option>Pilih</option>
                        <option value={"laki-laki"}>laki-laki</option>
                        <option value={"perempuan"}>perempuan</option>
                    </Select>
                    <Input
                        onsubmit={handleSubmit}
                        value={users.password}
                        placeholder="loeca123"
                        label={"Password :"}
                        name="password"
                        onChange={handleChange}
                    />
                    <Input
                        onsubmit={handleSubmit}
                        value={users.konfirmasi_password}
                        placeholder="loeca123"
                        label={"Konfirmasi password :"}
                        name="konfirmasi_password"
                        onChange={handleChange}
                    />
                    <Button
                        title={isLoading ? "Saving" : "Save"}
                        onClick={() => {
                            
                        }}
                    />
                </div>
            </form>
        </div>
    )
}