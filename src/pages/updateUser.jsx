import React from "react";
import Input from "../module/Input";
import Button from "../module/Button";
import axios from "axios";
import { useNavigate, Link, useParams } from 'react-router-dom'

export default function UpdateBuku() {
    let navigate = useNavigate()
    const { id } = useParams();
    const [user, setUser] = React.useState()
    const [isLoading, setIsLoading] = React.useState(false)
    const [books, setBooks] = React.useState({
        kode_penulis: '11111',
        judul_buku: "",
        nama_pengarang: "",
        nama_penerbit_buku: "",
        ketebalan_buku: Number,
        tahun_terbit_buku: Number,
        sinopsis: ""
    });
    const handleChange = (e) => {
        setBooks((books) => {
            return {
                ...books,
                [e.target.name]: e.target.value,
            };
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(books);
        try {
            setIsLoading(true)
            const response = await axios.post('https://api-react-2.herokuapp.com/api/perpustakaan', books)
            setIsLoading(false)
            // return navigate('/user')
            alert('Berhasil Menyimpan')
        } catch (err) {
            console.log(err);
            setIsLoading(false)
            alert('Error!!')
        }
    }
    const getDetailUser = async (id) => {
        try {
            const response = await axios.get(
                `https://api-react-2.herokuapp.com/api/perpustakaan/${id}?kode=11111`
            );
            const dataUser = response.data.data;
            console.log(dataUser);
            setUser(() => {
                return {
                    kode_penulis: "11111",
                    judul_buku: dataUser.judul_buku,
                    nama_pengarang: dataUser.nama_pengarang,
                    nama_penerbit_buku: dataUser.nama_penerbit_buku,
                    ketebalan_buku: dataUser.ketebalan_buku,
                    tahun_terbit_buku: dataUser.tahun_terbit_buku,
                    sinopsis: dataUser.sinopsis,
                };
            });
        } catch (error) { }
    };
    React.useEffect(() => {
        getDetailUser(id);
    }, []);
    return (
        <div>
            <h1 className="text-center mb-10 flex justify-center">Perbaharui Buku</h1>
            <form className="border-2 rounded-xl border-black p-6 mt-11" onSubmit={handleSubmit}>
                <Input
                    value={books.kode_penulis}
                    label={"kode_penulis"}
                    placeholder="kode"
                    name={"kode_penulis"}
                    onChange={handleChange}
                />
                <Input
                    value={books.judul_buku}
                    label={"Judul"}
                    placeholder="Judul"
                    name={"judul_buku"}
                    onChange={handleChange}
                />
                <Input
                    value={books.nama_pengarang}
                    label={"Nama Pengarang"}
                    placeholder="Nama Pengarang"
                    name={"nama_pengarang"}
                    onChange={handleChange}
                />
                <Input
                    value={books.nama_penerbit_buku}
                    label={"Nama Penerbit"}
                    placeholder="Nama Penerbit"
                    name={"nama_penerbit_buku"}
                    onChange={handleChange}
                />
                <Button title={isLoading ? 'Memperbaharui' : 'Perbaharui'} />
                <Button title={books ? 'Reset' : 'Reseting'} />
                <Link to={'/admin/buku'} className='pl-5'>
                    <Button title={'Back'} />
                </Link>
            </form>
        </div>
    );
}