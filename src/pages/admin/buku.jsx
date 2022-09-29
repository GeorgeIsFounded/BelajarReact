import React from "react";
import Button from "../../module/Button";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";


export default function Admin() {
  let navigate = useNavigate();
  const handleDashboard = () => {
    return navigate("/admin/dashboard");
  };
  const handleBuku = () => {
    return navigate("/admin/buku");
  };
  const handleAbout = () => {
    return navigate("/admin/about");
  };
  const handleNew = (book) => {
    return navigate(`/admin/Tambah/${book.id}`);
  };
  const [books, setBook] = React.useState([]);
  const [page, setPage] = React.useState(100);
  const getBookHandle = async () => {
    try {
      const response = await axios.get(`https://api-react-2.herokuapp.com/api/perpustakaan?kode=11111`);
      setBook(response.data.data.data);
      setPage(response.data.page);
      console.log(response.data);
    } catch (err) { }
  };

  React.useEffect(() => {
    getBookHandle();
  }, [page]);

  return (
    <React.Fragment>
      <div className="flex flex-row">
        <div className="basis-1/5 flex flex-col">
          <Button title={"Dashboard"} onClick={handleDashboard} />
          <Button title={"Buku"} onClick={handleBuku} />
          <Button title={"About"} onClick={handleAbout} />
        </div>
        <div className="basis-3/4 flex flex-col h-1000">
          <h1 className="">PAGE BUKU</h1>
          <Button title={'Tambah Buku'} onClick={handleNew} />
          <div className="flex flex-row mt-5">
            {books.map((book, index) => {
              return (
                <div key={index} className=''>
                  <div className=" w-52">
                    <p>Kode  penulis : {book.kode_penulis}</p>
                    <p>Judul : {book.judul_buku}</p>
                    <p>Pengarang : {book.nama_pengarang}</p>
                    <p>Penerbit : {book.nama_penerbit_buku}</p>
                    <p>Ketebalan Buku : {book.ketebalan_buku}</p>
                    <p>Diterbitkan pada tahun {book.tahun_terbit_buku}</p>
                    <Button onClick={() => {
                      return navigate(`/admin/update/${book.id}`)
                    }} color='blue' title={'Edit'} />
                    <Button color="red" title={'Detail'} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Outlet />
      </div>
    </React.Fragment>
  );
}