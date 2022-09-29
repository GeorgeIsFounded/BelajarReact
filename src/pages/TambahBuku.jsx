import React from "react";
import Input from "../module/Input";
import Button from "../module/Button";
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom'

export default function TambahBuku() {
    let navigate = useNavigate()
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
            return { ...books, [e.target.name]: e.target.value };
        });
        console.log("tes");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(books);
        try {
            setIsLoading(true)
            const response = await axios.post('https://api-react-2.herokuapp.com/api/perpustakaan', books)
            setIsLoading(false)
            setBooks(response.data.data);
            alert('Berhasil Menyimpan')
            return navigate('/book')
        } catch (err) {
            console.log(err);
            setIsLoading(false)
            alert('Error!!')
        }
    }

    return (
        <div>
            <h1 className="text-center">Tambah Buku</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    value={books.kode_penulis}
                    label={"Kode Penulis"}
                    placeholder="Kode Penulis"
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
                <Input
                    value={books.ketebalan_buku}
                    label={"Ketebalan Buku"}
                    placeholder="Ketebalan Buku"
                    name={'ketebalan_buku'}
                    onChange={handleChange}
                />
                <Input
                    value={books.tahun_terbit_buku}
                    label={"Tahun diterbitkannya Buku"}
                    placeholder="tahun diterbitkannya Buku"
                    name={'tahun_terbit_buku'}
                    onChange={handleChange}
                />
                <Input
                    value={books.sinopsis}
                    label={"Sinopsis"}
                    placeholder="Sinopsis"
                    name={'sinopsis'}
                    onChange={handleChange}
                />
                <Button title={isLoading ? 'Saving Data' : 'Save'} />
                <Link to={'/admin/buku'} className=''>
                    <Button title={'Back'} />
                </Link>
            </form>
        </div>
    );
}