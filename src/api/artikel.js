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

export async function updateArtikel(payload) {
    console.log("payload akan dikirim", payload)

    const formData = new FormData()
    formData.append('judul', payload.judul)
    formData.append('artikel', payload.artikel)
    formData.append('thumbnail', payload.thumbnail)

    return axios.post(`/artikel/update/${payload.id}`, formData)
}

export async function editArtikel(slug) {
    return axios.get(`/artikel/${slug}`)
}

export async function deleteArtikel(id) {
    return axios.post(`/artikel/delete/${id}`);
}