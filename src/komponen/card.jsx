import React from "react";

export default function Card({ data, setData }) {

    const handleDelete = (e, filter) => {
        e.preventDefault();
        console.log(e.target.value)
        data.filter((item) => {
            return item.id !== e.target.value
        });

        console.log(filter)
        setData(()=> {
            return filter
        })

        console.log("button delete kliked")
    }

    return (
        <React.Fragment>
            <div>
                {/* <p>Username : george</p>
                <p>Email : iqbalnie@gmail.com</p>
                <p>Password : 1234</p>
                <p>Confirm Password : 1234</p> */}
                {data?.map((item, i) => {
                    return (
                        <div>
                            <p>Username : {item.username}</p>
                            <p>Email : {item.email}</p>
                            <p>Tempat Lahir : {item.tempatLahir}</p>
                            <p>Tanggal Lahir : {item.tanggalLahir}</p>
                            <p>Jenis kelamin : {item.jenisKelamin}</p>
                            <p>Password : {item.password}</p>
                            <p>Confirm-Password : {item.confirmPassword}</p>
                            <button onClick={handleDelete}>delete</button>
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
    )
} 