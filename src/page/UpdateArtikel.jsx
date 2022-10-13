import React from "react";
import Input from "../komponen/input";
import Button from "../komponen/button";
import Select from "../komponen/select";
import axios from "axios";
import { article, articleCreate, articleDetail, articleUpdate, } from "../api/artikel";
import { updateArtikel } from "../api/artikel";
import { NavLink, useNavigate, useParams } from "react-router-dom";

function Createuser() {
    const navigate = useNavigate();
    let { slug, id } = useParams();
    const [isLoading, setIsLoading] = React.useState(false);
    const [payload, setPayload] = React.useState({
        judul: "",
        slug: "",
        thumbnail: "",
        artikel: "",
        imagePreview: null,
    });

    const handleChange = (e) => {
        setPayload((payload) => {
            return { ...payload, [e.target.name]: e.target.value };
        });
        console.log("tes");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await updateArtikel(id, payload);
            setPayload(response.data)
            alert("Success Creating Artikel")
            return navigate("/artikel");
        } catch (err) {
            console.log(err);
            alert("Failed Creating Artikel");
            setIsLoading(false);
            setPayload({
                judul: "",
                slug: "",
                thumbnail: "",
                artikel: "",
            });
        }
    };

    const updateArtikel = async () => {
        try {
            const response = await updateArtikel(slug, payload)
            console.log('response => ', response.data);
            const dataArtikel = response.data.data
            setPayload(() => {
                return {
                    id: dataArtikel.id,
                    judul: dataArtikel.judul,
                    slug: dataArtikel.slug,
                    thumbnail: dataArtikel.thumbnail,
                    artikel: dataArtikel.artikel,
                    imagePreview: null,
                }
            })
        } catch (error) {

        }
    }
    React.useEffect(() => {
        updateArtikel(id)
    }, []);

    return (
        <React.Fragment>
            <p className="text-center font-bold uppercase mt-10">User Artikel dengan id {id}</p>
            <div className="flex justify-center">
                <form
                    onSubmit={handleSubmit}
                    className="mt-5 space-y-5 w-[830px] h-[790px] mb-32 border border-black p-5"
                >
                    <div className="flex space-x-2 space-between">
                        <Input
                            onChange={handleChange}
                            value={payload.judul}
                            isError={""}
                            label="Judul"
                            type="text"
                            name="judul"
                            id="judul"
                            placeholder="judul"
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
                    </div>
                    <div>
                        <Input
                            onChange={handleChange}
                            value={payload.artikel}
                            isError={""}
                            label="Artikel"
                            type="text"
                            name="artikel"
                            id="artikel"
                            placeholder="artikel"
                        />
                        <Input
                            onChange={handleChange}
                            value={payload.slug}
                            isError={""}
                            label="Slug"
                            type="text"
                            name="slug"
                            id="slug"
                            placeholder="slug"
                        />
                    </div>
                    <img src={payload.imagePreview} alt={payload.imagePreview} />
                    <div className="flex flex-row justify-between">
                        <NavLink to="/artikel" className={`border border-black p-2 px-5`}>
                            Cancel
                        </NavLink>
                        <Button
                            className={`border border-black p-2 px-5`}
                            title={isLoading ? "Submitting" : "Submit"}
                        />
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}

export default Createuser;