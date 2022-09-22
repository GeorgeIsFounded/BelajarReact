import React from "react";
import Button from "../komponen/button";
import Input from "../komponen/input";
import axios from "axios";
import Select from "../komponen/select";
import UpdateUser from "./UpdateUser";
import { useNavigate, useParams } from "react-router-dom";

export default function CreateUser() {

    let response = useParams();

    let navigate = useNavigate();

    // kenapa id karena di routingnya kita kasi nama ID
    let { id } = useParams();

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
            // const response = await axios.post("https://belajar-react.smkmadinatulquran.sch.id/api/users/create", users)
            // setIsLoading(false)
            // return navigate('users')
        }
        catch (err) {
            setIsLoading(false)
            alert('Terjadi Error pada backEnd')
        }
    }

    const getDetailUser = async () => {
        try {
            const response = await axios.get(`https://belajar-react.smkmadinatulquran.sch.id/api/users/detail/${id}`)
            console.log('response =>', response.data)
        }
        catch (err) {
            console.log(err)
        }

        const dataUser = response.data.data;
        console.log(dataUser);
        setUsers(() => {
            return {
                username: "dataUser.username",
                name: "dataUser.name",
                email: "dataUser.email",
                jenis_kelamin: "dataUser.jenis_kelamin"
            }
        })
    }

    React.useEffect(() => {
        
    }, [])

    return (
        <div className="flex justify-center ">
            <form className="border-2 rounded-xl border-black p-6 mt-11">
                <h1>User page dengan id {id}</h1>
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
                    <Input
                        onsubmit={handleSubmit}
                        value={users.konfirmasi_password}
                        placeholder="loeca123"
                        label={"Konfirmasi password :"}
                        name="konfirmasi_password"
                        onChange={handleChange}
                    />
                    <div className="flex justify-between">
                        <Button
                            title={isLoading ? "Canceling" : "Back"}
                            // onClick={() => {
                            //     navigate("/user")
                            // }}
                            className="h-5"
                        />
                        <Button
                            title={isLoading ? "Saving" : "Save"}
                            onClick={() => {
                                navigate("/user")
                            }}
                        />
                    </div>

                </div>
            </form>
        </div>
    )
}