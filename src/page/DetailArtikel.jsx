import React from "react";
import Button from "../komponen/button";
import { useNavigate, useParams } from "react-router-dom";
import { detailArtikel } from "../api/artikel";

export default function UpdateArtikel() {
    const navigate = useNavigate();
    const { slug } = useParams();

    const [Art, setArt] = React.useState({
        judul: "",
        thumbnail: "",
        slug: "",
        artikel: "",
        imagePreview: null,
    });

    const [isLoading, setIsLoading] = React.useState(false);

    const getDetailArtikel = async () => {
        try {
            const response = await detailArtikel(slug);
            const dataArtikel = response.data.data;
            setArt(() => {
                return {
                    judul: dataArtikel?.judul,
                    slug: dataArtikel?.slug,
                    thumbnail: dataArtikel?.thumbnail,
                    artikel: dataArtikel?.artikel,
                };
            });
        } catch (error) {
            console.log(error);
        }
    };
    React.useEffect(() => {
        getDetailArtikel();
    }, []);
    return (
        <div className="flex justify-center ">
            <form
                className="border-2 rounded-xl border-black p-6 mt-11">
                <h1 className="text-center mb-11">View Artikel</h1>
                <div>
                    <img src={Art.thumbnail} alt={Art.thumbnail} className="w-50 h-50" />
                </div>
                <div>
                    <h1 className="font-bold">Judul</h1>
                    <h1>{Art.judul}</h1>
                    <h1 className="mt-10 font-bold">Artikel</h1>
                    <p className="mb-10">{Art.artikel}</p>
                    <p className="mt-10 font-bold">Slug</p>
                    <p className="mb-10">{Art.slug}</p>
                    <div className="flex justify-between">
                        <Button
                            title={"back"}
                            onClick={() => {
                                navigate("/artikel", { replace: true });
                            }}
                        />
                        <Button
                            title={isLoading ? "o o o" : "Save"}
                            onClick={() => {
                                navigate("/artikel", { replace: true });
                            }}
                        />
                    </div>
                </div>
            </form >
        </div >
    )
}