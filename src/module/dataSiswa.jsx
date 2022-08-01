import React from "react";

export default function DataSiswa({ data, nilai }) {
    return (
        <React.Fragment>
            ini komponen data siswadd
            {data?.map(function (item, index) {
                return (
                    <React.Fragment>
                        <div className="identitas">
                            <p>Nama : {item.nama}</p>
                            <p>Kelas : {item.kelas}</p>
                            <p>Nilai : {item.nilai}</p>
                        </div>

                    </React.Fragment>
                )
            })}
            <div>
                <p>Nama : {nilai.nama}</p>
                <p>kelas : {nilai.kelas}</p>
                <div>Nilai adalah
                    {nilai.nilai.map((item) => {
                        return (
                            <p>{item}</p>
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}