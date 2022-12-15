import React from 'react';
import shin from '../../images/shin.png';
import shinShoes from '../../images/shin-shoes.png';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { GetProduk } from '../../API/produk';
import '../../styles/styles.css';

const Dashboard = () => {
  // let [status, setStatus] = React.useState(false);
  const author = useSelector((state) => state.auth);
  // const navigate = useNavigate();

  const [listProduct, setListProduct] = React.useState([]);
  const [payload, setPayload] = React.useState({
    kategori: '',
    keyword: '',
    hargaTerendah: '',
    hargaTertinggi: '',
  });
  const [fetchProduct, setFetchProduct] = React.useState(false);

  const getProduct = async (e) => {
    // e.preventDefault()
    try {
      setFetchProduct(true);
      const response = await GetProduk(
        payload.kategori,
        payload.keyword,
        payload.hargaTerendah,
        payload.hargaTertinggi
      );
      console.log('response =>', response);
      console.log('product =>', response.data.data.rows);
      setListProduct(response.data.data.rows);
      setPayload(response.data.data.rows)
    } catch (err) {
      console.log('err =>', err);
    } finally {
      setFetchProduct(false);
    }
  };
  React.useEffect(() => {
    getProduct(payload.kategori);
  }, []);

  console.log('listProduct =>', listProduct);
  console.log('payload =>', payload);

  const navigate = useNavigate();
  return (
    <div>
      <div className="border-b-2 border-black h-24 w-full flex justify-between items-center p-12">
        <div>
          <h1 className="font-bold">BOGHE'</h1>
        </div>
        <div className="flex items-center w-48 justify-between">
          <button className="hover:scale-105 duration-150">
            <IoCartOutline size={35} />
          </button>
          <div className="border-black rounded-full h-[72px] w-[72px] border">
            <button
              onClick={() => {
                return navigate('/login');
              }}
            >
              <img src={shin} alt="shin" className="rounded-full" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="h-full p-3 w-[200%] flex justify-between">
          <div className="grid grid-cols-4 w-[100%] h-full">
            {listProduct.map((item, index) => {
              const json = item.gambarProduk;
              const ko = JSON.parse(json);
              return (
                <div
                  key={index}
                  className="mb-5 border-4 border-black h-96 w-[300px] hover:scale-105 duration-150"
                >
                  <button
                    onClick={() => {
                      return navigate(`/produk/detail/${item.uuid}`);
                    }}
                  >
                    <div className="flex justify-center">
                      <div className="h-[230px] border-b border-black w-[292px] flex items-center">
                        <img
                          src={ko[0].gambar1}
                          alt=""
                          className="h-full w-full"
                        />
                      </div>
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      return navigate(`/produk/detail/${item.uuid}`);
                    }}
                  >
                    <div className="pl-1 flex justify-between items-center w-72">
                      <div className="flex">
                        <FaStar className="text-yellow-400" size={20} />
                        <p>{item?.rating}</p>
                      </div>
                      <div>
                        <p>Rp.{item?.harga}</p>
                      </div>
                    </div>
                    <div className="pl-1 flex flex-col items-start">
                      <p className="font-medium text-md">{item?.namaProduk}</p>
                      <p className="text-xs w-60 text-gray-400 font-medium text-start h-12 overflow-hidden">
                        {item?.deskripsi}
                      </p>
                      <p className="text-sm">stock left {item?.stok}</p>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-[30%] pl-2">
          <div className="h-96">
            <div className="bg-black w-full flex justify-center py-2">
              <p className="text-white">More</p>
            </div>
            <div className="border-4 border-black h-96 p-5 space-y-12">
              <div className='kategori'>
                <button className="text-xl">Kategori</button>
                <div className='content'>
                  <a className='hover:bg-black hover:text-white border border-black'>mobil</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
