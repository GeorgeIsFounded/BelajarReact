import React from "react";
import axios from "axios";
import Button from "../komponen/button";
import Swal from 'sweetalert2';
import { Link, NavLink, useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import Cookies from "js-cookie";

export default function User() {

    let navigate = useNavigate();

    const [users, setUsers] = React.useState([]) //state untuk menyimpan data user dari API
    const [page, setPage] = React.useState(100);
    const [isFetchUser, setIsFetchUser] = React.useState(false)

    const Swal = require('sweetalert2');

    const getUserHandle = async () => {
        try {
            setIsFetchUser(true)
            const response = await axios.get(`https://belajar-react.smkmadinatulquran.sch.id/api/users/${page}`)
            console.log("response => ", response.data);
            setUsers(response.data.data);
            setPage(response.data.page)
        }
        catch (err) {
            console.log(err)
        } finally {
            setIsFetchUser(false)
        }
    };

    const deleteUserHandle = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axios.delete(`https://belajar-react.smkmadinatulquran.sch.id/api/users/hapus/${id}`)
                    setUsers(response.data)
                    Swal.fire(
                        'Deleted!',
                        'the User has been deleted.',
                        'success'
                    )
                }
                catch (err) {
                    Swal.fire(
                        'Cancelled',
                        'User Not found',
                        'success'
                    )
                }
            }
        })
        console.log('button delete berjalan', id)
    }

    console.log("user =>", users)
    console.log("page =>", page)

    React.useEffect(() => {
        getUserHandle();
    }, [page])

    return (
        <div>
            <div>
                <h1 className="text-center border-2 w-36">Tabel User</h1>
            </div>
            <NavLink
                to={"/user/create"}
                className={`border border-black p-2 px-6 hover:bg-red-500 hover:text-black`}
                title="Tambah User"
            >Tambah</NavLink>
            <Button
                title={"Artikel"}
                onClick={() => {
                    return navigate("/artikel", { replace: true })
                }}
            />
            <Button
                title={"log Out"}
                onClick={() => {
                    Cookies.remove("myapps_token");
                    return navigate("/login", { replace: true })
                }}
            />
            <table className="table-auto w-[1200px] mt-5">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Nama</th>
                        <th>Email</th>
                        <th>Jenis Kelamin</th>
                        <th>stored_at</th>
                        <th>updated_at</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return (
                            <tr key={index} className="text-left border">
                                <td>{index + 1}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.name}</td>
                                <td>{user.jenis_kelamin}</td>
                                <td>{user.stored_at}</td>
                                <td>{user.updated_at}</td>
                                <td className="flex flex-col">
                                    <Button
                                        onClick={() => {
                                            return navigate(`/user/update/${user.id}`), {
                                                replace: true
                                            }
                                        }} color="blue" title={"Edit"} />
                                    <Button
                                        onClick={() => {
                                            deleteUserHandle(user.id)
                                        }}
                                        color="red" title={"Delete"} />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <p>Saat ini di page {page}</p>

            <div className="flex items-center justify-center">
                <button
                    onClick={() => {
                        setPage(page - 1)
                    }}
                >
                    Previos
                </button>
                <button

                    onClick={() => {
                        setPage(page + 1)
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    )
}