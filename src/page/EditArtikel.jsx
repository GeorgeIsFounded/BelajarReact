import React from "react";
import Button from "../komponen/button";
import Input from "../komponen/input";
import { useNavigate, useParams } from "react-router-dom";
import { editArtikel } from "../api/artikel";
import Resizer from "react-image-file-resizer";

export default function EditArtikel() {
    const [payload, setPayload] = React.useState({
        judul: "",
        thumbnail: "",
        artikel: "",
        imagePreview: null,
    });

    const Swal = require('sweetalert2');

    const handleChange = (e) => {
        setPayload((payload) => {
            return {
                ...payload,
                [e.target.name]: e.target.value
            }
        })
    }

    let { slug } = useParams();

    const [isSubmiting, setIsSubmiting] = React.useState(false);

    const handleSubmit = async (e) => {
        try {
            setIsSubmiting(true);
            e.preventDefault();
            const response = await editArtikel(payload);
            let data = response?.data
            if(data?.status === 'Fail'){
                return alert(data?.message)
            }
            alert(
                "success",
                Swal.fire({
                    title: 'Sweet!',
                    text: 'success updating',
                    imageUrl: 'https://media.tenor.com/43UBbcjN6VYAAAAj/levi-levi-ackerman.gif',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                  })
            )
            console.log("response, success", response);

            return navigate("/artikel", { replace: true })
        } catch (err) {
            console.log(err)
        } finally {
            setIsSubmiting(false);
        }
    }

    const getEditArtikelHandle = async () => {
        try {
            const response = await editArtikel(slug);
            
            const data = response.data.data
            console.log(data);
            setPayload ((payload) => {
                return {
                    ...payload,
                    "id" : data?.id,
                    "judul" : data?.judul,
                    "thumbnail" : data?.thumbnail,
                    "artikel" : data?.artikel,
                    "imagePreview" : data?.imagePreview,
                }
            })
        } catch (err) {
            console.log(err)
        }
    }

    React.useEffect(() => {
        getEditArtikelHandle();
    }, []);

    const [isLoading, setIsLoading] = React.useState(false);

    let navigate = useNavigate()
    return (
        <div className="flex justify-center ">
            <form
                onSubmit={handleSubmit}
                className="border-2 rounded-xl border-black p-6 mt-11">
                <h1 className="text-center mb-11">Edit Artikel</h1>
                <div>
                    <Input
                        onChange={handleChange}
                        value={payload.judul}
                        label="Judul"
                        type="text"
                        name="judul"
                        id="judul"
                        placeholder="Judul"
                    />
                    <Input
                        onChange={(e) => {
                            console.log("event", e.target.files[0]);
                            let file = e.target.files[0];
                            if (file.size > 3000000) {
                                return alert("ukuran lebih dari 800 KB")
                            }
                            if (file.type === 'image/jpeg' || file.type === "image/png" || file.type === "application/pdf") {
                                let reader = new FileReader();
                                reader.readAsDataURL(file)
                                reader.onloadend = () => {
                                    setPayload((payload) => {
                                        return {
                                            ...payload,
                                            imagePreview: reader.result,
                                            thumbnail: file
                                        }
                                    })
                                }
                                console.log("code here");
                            } else {
                                return alert("file harus png atau PDF")
                            }
                        }}
                        value={payload?.file}
                        label="Thumbnail"
                        type="file"
                        name="thumbnail"
                        id="thumbnail"
                        placeholder="thumbnail"
                    />
                    <Input
                        onChange={handleChange}
                        value={payload.artikel}
                        label="artikel"
                        type="text"
                        name="artikel"
                        id="artikel"
                        placeholder="artikel"
                    />
                    <img src={payload.imagePreview} alt={payload.imagePreview} />
                    <div className="flex justify-between">
                        <Button
                            title={"back"}
                            onClick={() => {
                                navigate("/artikel", { replace: true });
                            }}
                        />
                        <Button
                            title={isLoading ? "o o o" : "Update"}
                        />
                    </div>
                </div>
            </form >
        </div >
    )
}