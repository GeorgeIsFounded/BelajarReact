import axios from "./baseUrl2";

export async function getAllArtikel() {
    return axios.get(`/artikel`)
}

export async function createArtikel(payload) {
    console.log("payload akan dikirim", payload)

    const formData = new FormData()
    formData.append('judul', payload.judul)
    formData.append('artikel', payload.artikel)
    formData.append('thumbnail', payload.thumbnail)

    return axios.post("/artikel", formData)
}

export async function updateArtikel(slug) {
    console.log("payload akan dikirim", slug)

    const formData = new FormData()
    formData.append('judul', slug.judul)
    formData.append('artikel', slug.artikel)
    formData.append('thumbnail', slug.thumbnail)

    return axios.post(`/artikel/update/${slug}`, formData)
}

export async function detailArtikel(slug) {
    return axios.get(`/artikel/${slug}`)
}

export async function deleteArtikel(id) {
    return axios.post(`/artikel/delete/${id}`);
}