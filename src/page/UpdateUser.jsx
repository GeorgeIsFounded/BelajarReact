import React from "react";
import Input from "../komponen/input";
import Button from "../komponen/button";
import Select from "../komponen/select";
import axios from "axios";
import { NavLink, useNavigate, useParams } from "react-router-dom";

function Createuser() {
    const navigate = useNavigate();
    let { id } = useParams();
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
            const response = await axios.put(
                `https://belajar-react.smkmadinatulquran.sch.id/api/users/update/${id}`,
                users
            );
            setUsers(response.data)
            setIsLoading(false);
            alert("Success Updating User")
            return navigate("/users");
        } catch (err) {
            console.log(err);
            alert("Failed Updating User");
            setIsLoading(false);
            setUsers({
                username: "",
                email: "",
                name: "",
                jenis_kelamin: "",
            });
        }
    };

    const DetailUser = async () => {
        try {
            const response = await DetailUser(id)
            console.log('response => ', response.data);
            const dataUser = response.data.data
            setUsers(() => {
                return {
                    username: dataUser.username,
                    email: dataUser.email,
                    name: dataUser.name,
                    jenis_kelamin: dataUser.jenis_kelamin,
                }
            })
        } catch (error) {

        }
    }
    React.useEffect(() => {
        DetailUser(id)
    }, []);

    return (
        <React.Fragment>
            <p className="text-center font-bold uppercase mt-10">User Page dengan id {id}</p>
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