import axios from "./baseUrl";

export async function getAllUser(pageSize = 10) {
    return axios.get(`/users/${pageSize}`);
}

export async function createUser(payload) {
    return axios.post("/users/create", payload);
}

export async function updateUser(id, payload) {
    return axios.put(`/users/update/${id}`, payload);
}

export async function detailUser(id) {
    return axios.get(`/users/detail/${id}`);
}

export async function deleteUser(id) {
    return axios.delete(`/users/hapus/${id}`)
}