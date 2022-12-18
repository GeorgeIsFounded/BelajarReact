import axios from './baseUrl2';

export async function GetProduk(
  kategori,
  keyword,
  hargaTerendah,
  hargaTertinggi
) {
  return axios.get(
    `/produk/list?kategori=${kategori}&page=1&pageSize=100&keyword=${keyword}&hargaTerendah=${hargaTerendah}&hargaTertinggi=${hargaTertinggi}`
  );
}

export async function GetDetailProduct(uuid) {
  return axios.get(`https://sainuu.xyz/produk/detail/${uuid}`);
}

export async function GetKategori() {
  return axios.get(`https://sainuu.xyz/kategori`);
}

export async function GetKeranjang() {
  return axios.get(`https://sainuu.xyz/keranjang`);
}

export async function GetTambahKeranjang(load) {
  return axios.post(`https://sainuu.xyz/keranjang/tambah`, load);
}

export async function PutTambahItem(id, jumlah) {
  return axios.put(`https://sainuu.xyz/keranjang/ubah-jumlah-item`, id, jumlah);
}

export async function DeleteHapusKeranjang(id) {
  return axios.delete(`https://sainuu.xyz/keranjang/hapus/${id}`);
}

export async function GetHistory() {
  return axios.get(`https://sainuu.xyz/beli/history`);
}

export async function PostBeli(payload) {
  return axios.post(`https://sainuu.xyz/beli/tambah`, payload);
}