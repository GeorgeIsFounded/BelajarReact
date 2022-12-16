import React from 'react';
import shin from '../../images/shin.png';
import shinShoes from '../../images/shin-shoes.png';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaHistory, FaSearch, FaStar, FaTruckLoading } from 'react-icons/fa';
import { IoCartOutline, IoSearchCircleOutline } from 'react-icons/io5';
import { GetKategori, GetProduk } from '../../API/produk';
import '../../styles/styles.css';
import Input from '../../module/input';
import InputSearch from '../../module/inputSearch';
import InputHarga from '../../module/inputharga';
import { BsClockHistory } from 'react-icons/bs';

const Dashboard = () => {
  const author = useSelector((state) => state.auth);

  const [listProduct, setListProduct] = React.useState([]);
  const [payload, setPayload] = React.useState({
    kategori: '',
    keyword: '',
    hargaTerendah: '',
    hargaTertinggi: '',
  });
  const [fetchProduct, setFetchProduct] = React.useState(false);

  const getProduct = async (e) => {
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
    } catch (err) {
      console.log('err =>', err);
    } finally {
      setFetchProduct(false);
    }
  };

  const handleChange = (e) => {
    setPayload((payload) => {
      return { ...payload, [e.target.name]: e.target.value };
    });
    console.log('tes');
  };

  React.useEffect(() => {
    getProduct();
  }, [
    payload.kategori,
    payload.keyword,
    payload.hargaTerendah,
    payload.hargaTertinggi,
  ]);

  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-white border-b-2 border-black h-24 w-full flex justify-between items-center p-12">
        <div className="">
          <h1 className="font-bold">BOGHE'</h1>
        </div>
        <div className="w-[750px] flex items-center">
          <InputSearch
            onChange={handleChange}
            value={payload.keyword}
            name="keyword"
            placeholder={'Search'}
            className=""
          />
          <FaSearch className="text-xl" />
        </div>
        <div className="flex items-center w-48 justify-between ">
          <button
            onClick={() => {
              return navigate('/keranjang', { replace: true });
            }}
            className="hover:scale-105 duration-150 hover:shadow-lg rounded-full p-2"
          >
            <IoCartOutline size={25} />
          </button>
          <button
            onClick={() => {
              return navigate('/history', { replace: true });
            }}
            className="mr-3 hover:scale-105 duration-150 hover:shadow-lg rounded-full p-2"
          >
            <BsClockHistory size={20} />
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
        <div className="h-full p-3 w-[83%] flex justify-between">
          <div className="grid grid-cols-4 w-[100%] h-full">
            {listProduct.length === 0 ? (
              <div className='w-96'>
                <p className='text-xl'>We can't find what you're looking for . . .</p>
              </div>
            ) : (
              listProduct.map((item, index) => {
                const convertRupiah = require('rupiah-format');
                let number = item.harga;
                let rupiah = convertRupiah.convert(number);
                const json = item.gambarProduk;
                const ko = JSON.parse(json);
                return (
                  <div
                    key={index}
                    className="hover:rounded-xl mb-5 border-4 border-black h-96 w-[300px] hover:scale-105 duration-150"
                  >
                    <button
                      onClick={() => {
                        return navigate(`/produk/detail/${item.uuid}`);
                      }}
                    >
                      <div className="flex justify-center w-[292px]">
                        <div className="snap-x overflow-x-scroll snap-mandatory h-[230px] border-b border-black w-[400px] flex items-center">
                          <img
                            src={ko[0].gambar1}
                            alt=""
                            className="h-full w-[500px] rounded-xl duration-150 snap-always snap-center"
                          />
                          <img
                            src={ko[1].gambar2}
                            alt=""
                            className="h-full w-[500px] rounded-xl duration-150 snap-always snap-center"
                          />
                          <img
                            src={ko[2].gambar3}
                            alt=""
                            className="h-full w-[500px] rounded-xl duration-150 snap-always snap-center"
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
                          <p>{rupiah}</p>
                        </div>
                      </div>
                      <div className="pl-1 flex flex-col items-start">
                        <p className="font-medium text-md">
                          {item?.namaProduk}
                        </p>
                        <p className="text-xs w-60 text-gray-400 font-medium text-start h-12 overflow-hidden">
                          {item?.deskripsi}
                        </p>
                        <p className="text-sm">stock left {item?.stok}</p>
                      </div>
                    </button>
                  </div>
                );
              })
            )}
          </div>
        </div>
        <div>
          <div className="w-[30%] pl-3 fixed flex items-end">
            <div className="h-96">
              <div className="bg-black w-full flex justify-center py-2">
                <p className="text-white">Filter</p>
              </div>
              <div className="border-4 border-black h-96 p-5 space-y-7">
                <div className="kategori">
                  <select
                    value={payload.kategori}
                    name="kategori"
                    onChange={handleChange}
                    className="text-xl w-40"
                  >
                    <option value={''}>kategori</option>
                    <option value="mobil">mobil</option>
                    <option value="tas">tas</option>
                    <option value="televisi">televisi</option>
                    <option value="handphone">handphone</option>
                    <option value="motor">motor</option>
                    <option value="sepatu">sepatu</option>
                  </select>
                </div>
                <InputHarga
                  onChange={handleChange}
                  type="number"
                  value={payload.hargaTertinggi}
                  name="hargaTertinggi"
                  placeholder={'Harga Tertinggi'}
                />
                <InputHarga
                  type="number"
                  value={payload.hargaTerendah}
                  name="hargaTerendah"
                  onChange={handleChange}
                  placeholder={'Harga Terendah'}
                />
                <div>
                  <button
                    onClick={() => {
                      return setPayload({
                        kategori: '',
                        keyword: '',
                        hargaTerendah: '',
                        hargaTertinggi: '',
                      });
                    }}
                    className="w-48 h-14 border border-black duration-150 hover:bg-black hover:text-white hover:rounded-xl"
                  >
                    <p>hapus</p>
                  </button>
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
