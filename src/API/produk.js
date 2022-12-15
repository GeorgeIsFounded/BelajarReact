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
  return axios.get(`http://34.128.70.114/produk/detail/${uuid}`);
}
