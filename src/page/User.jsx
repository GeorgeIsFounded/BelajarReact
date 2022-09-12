import React from "react";
import axios from "axios";

export default function User() {

    const [users, setUsers] = React.useState([]) //state untuk menyimpan data user dari API
    const [page, setPage] = React.useState(100)
    const getUserHandle = async () => {
        try {
            const response = await axios.get(`https://belajar-react.smkmadinatulquran.sch.id/api/users/${page}`)
            console.log("response => ", response.data);
            setUsers(response.data.data)
            setPage(response.data.page)
        }
        catch (err) {

        }
    };

    console.log("user =>", users)
    console.log("page =>", page)

    React.useEffect(() => {
        getUserHandle();
    }, [page])

    return (
        <div>
            <h1>Tabel User</h1>
            <button className="p-2 bg-blue-500 border-2 border-black " onClick={getUserHandle}>Tambah User</button>
            <table className="table-auto w-[1000px]">
                <thead>
                    <tr>Username</tr>
                    <tr>Nama</tr>
                    <tr>Email</tr>
                    <tr>Jenis Kelamin</tr>
                    <tr>stored_at</tr>
                    <tr>updated_at</tr>
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