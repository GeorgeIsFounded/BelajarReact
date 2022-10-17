import React from "react";
import { getAllArtikel } from "../../api/artikel";
import Skeleton from "react-loading-skeleton";
import Button from "../../komponen/button";
import ButtonD from "../../komponen/buttonD";
import { useNavigate, NavLink } from "react-router-dom";
import Cookies from "js-cookie";

export default function Artikel() {
    const Swal = require('sweetalert2');
    const [listArtikel, setListArtikel] = React.useState([]);
    const [isFetchArtikel, setIsFetchArtikel] = React.useState(false);
    let navigate = useNavigate();

    const getListArtikelHandle = async () => {
        try {
            setIsFetchArtikel(true)
            const response = await getAllArtikel();
            console.log("response => ", response.data);
            setListArtikel(response.data.data.data);
        }
        catch (err) {
            console.log(err)
        } finally {
            setIsFetchArtikel(false)
        }
    };

    React.useEffect(() => {
        getListArtikelHandle();
    }, []);

    return (
        <div>
            <div>
                <h1 className="text-center border-2 w-36">Tabel Artikel</h1>
            </div>
            <NavLink
                to={"/artikel/create"}
                className={`border border-black p-2 px-6 hover:bg-red-500 hover:text-black`}
                title="Tambah Artikel"
            >Tambah</NavLink>
            <Button
                title={"User"}
                onClick={() => {
                    return navigate("/User", { replace: true })
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
                    <tr className="text-left border">
                        <th>No</th>
                        <th>Judul</th>
                        <th>Thumbnail</th>
                        <th>Artikel</th>
                        <th>Penulis</th>
                        <th>Dibuat</th>
                        <th>Diupdate</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {isFetchArtikel ? (
                        <tr>
                            <td colSpan={9}>
                                <Skeleton baseColor="red" highlightColor="black" count={1} />
                            </td>
                        </tr>
                    ) : (
                        listArtikel.map((artikel, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{artikel?.judul}</td>
                                    <td>
                                        <img src={artikel?.thumbnail} className="w-10 h-10" />
                                    </td>
                                    <td className="-indent-9">
                                        {artikel?.artikel}
                                    </td>
                                    <td>{artikel?.name}</td>
                                    <td>{artikel.created_at}</td>
                                    <td>{artikel.updated_at}</td>
                                    <td className="flex flex-col">
                                        <Button
                                            onClick={() => {
                                                return navigate(`/artikel/update/${artikel.id}`)
                                            }}
                                            color="white"
                                            title="Edit"
                                        />
                                        <ButtonD
                                            onClick={() => {
                                                console.log("delete running")
                                            }}
                                            color="red"
                                            title="Delete"
                                        />
                                        {/* <Button
                                            onClick={
                                                async () => {
                                                    console.log("delete jalan");
                                                    const response = await deleteArtikel(artikel.id);
                                                    console.log(response.data)
                                                    try {
                                                        if (response.data.status === "Fail") {
                                                            const Toast = Swal.mixin({
                                                                toast: true,
                                                                position: 'top-end',
                                                                showConfirmButton: false,
                                                                timer: 3000,
                                                                timerProgressBar: true,
                                                                didOpen: (toast) => {
                                                                    toast.addEventListener('mouseenter', Swal.stopTimer)
                                                                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                                                                }
                                                            })

                                                            Toast.fire({
                                                                icon: 'error',
                                                                title: 'Failed to Delete artikel'
                                                            })
                                                        }
                                                        else {
                                                            const Toast = Swal.mixin({
                                                                toast: true,
                                                                position: 'top-end',
                                                                showConfirmButton: false,
                                                                timer: 3000,
                                                                timerProgressBar: true,
                                                                didOpen: (toast) => {
                                                                    toast.addEventListener('mouseenter', Swal.stopTimer)
                                                                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                                                                }
                                                            })

                                                            Toast.fire({
                                                                icon: 'success',
                                                                title: 'Deleted'
                                                            })
                                                        }
                                                        getListArtikelHandle();
                                                    }
                                                    catch (err) {
                                                        console.log(err);
                                                    }
                                                }
                                            }
                                            color="white"
                                            title="View"
                                        /> */}
                                    </td>
                                </tr>
                            );
                        })
                    )}
                </tbody>
            </table>
        </div>
    );
}