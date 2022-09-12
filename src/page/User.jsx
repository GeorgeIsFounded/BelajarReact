import React from "react";
import axios from "axios";

export default function Quran() {

    const [quran, setQuran] = React.useState([]) //state untuk menyimpan data user dari API
    const [page, setPage] = React.useState(1)
    const getUserHandle = async () => {
        try {
            const response = await axios.get(`https://equran.id/api/surat`)
            console.log("response => ", response.data);
            setQuran(response.data)
            setPage(response.data.page)
        }
        catch (err) {

        }
    };

    console.log("quran =>", quran)
    console.log("page =>", page)

    React.useEffect(() => {
        getUserHandle();
    }, [page])

    return (
        <div>
            <h1>Tabel User</h1>
            <button onClick={getUserHandle}>list quran</button>
            <table className="table-auto">
                <thead>
                    <tr>nomor</tr>
                    <tr>nama</tr>
                    <tr>nama_latin</tr>
                    <tr>jumlah_ayat</tr>
                    <tr>tempat_turun</tr>
                    <tr>arti</tr>
                    <tr>deskripsi</tr>
                </thead>
                <tbody>
                    {quran.map((quran, index) => {
                        return (
                            <tr key={index} className="text-left border">
                                <td>{index + 1}</td>
                                <td>{quran.nama}</td>
                                <td>{quran.nama_latin}</td>
                                <td>{quran.jumlah_ayat}</td>
                                <td>{quran.tempat_turun}</td>
                                <td>{quran.arti}</td>
                                <td></td>
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