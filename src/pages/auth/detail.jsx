import React from 'react';
import shin from '../../images/shin.png';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import {
  GetBeli,
  GetDetailProduct,
  GetTambahKeranjang,
} from '../../API/produk';
import '../../styles/styles.css';
import { TiArrowBackOutline } from 'react-icons/ti';
import Swal from 'sweetalert2';
import { FaStar } from 'react-icons/fa';
import { actionBeli } from '../redux/action/actionBeli';

const DetailProduk = () => {
  let { uuid } = useParams();
  let dispatch = useDispatch();

  const author = useSelector((state) => state.auth);
  const [product, setProduct] = React.useState([]);
  const [load, setLoad] = React.useState({ produkId: '' });
  const [gambar, setGambar] = React.useState();
  const [payloadBeli, setPayloadBeli] = React.useState({
    data: [
      {
        id: '',
        produkId: '',
        jumlah: 1,
        userId: 1,
        createdAt: '',
        updatedAt: '',
        produk: {
          namaProduk: '',
          harga: '',
          stok: '',
          rating: '',
          gambarProduk: '',
        },
      },
    ],
  });

  const convertRupiah = require('rupiah-format');
  let number = product.harga;
  let rupiah = convertRupiah.convert(number);

  const handleKeranjang = async () => {
    try {
      const response = await GetTambahKeranjang(load);
      if (response?.data.status === 'Success') {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });
        Toast.fire({
          icon: 'success',
          title: 'Berhasil tambahkan ke keranjang',
        });
      }
    } catch {}
  };

  const getDetailProductHandle = async (e) => {
    try {
      const response = await GetDetailProduct(uuid);
      setLoad({ produkId: response.data.data.id });
      const json = response.data.data.gambarProduk;
      const obj = JSON.parse(json);
      setGambar(obj[0].gambar1);
      setProduct(response.data.data);
      setPayloadBeli({
        data: [
          {
            id: response.data.data.id,
            jumlah: 1,
            userId: 1,
            produkId: response.data.data.id,
            createdAt: response.data.data.createdAt,
            updatedAt: response.data.data.updatedAt,
            produk: {
              namaProduk: response.data.data.namaProduk,
              harga: response.data.data.harga,
              stok: response.data.data.stok,
              rating: response.data.data.rating,
              gambarProduk: response.data.data.gambarProduk,
            },
          },
        ],
      });
    } catch (err) {
      console.log('err =>', err);
    }
  };

  const beliHandle = async (e) => {
    e.preventDefault();

    try {
      const response = await dispatch(actionBeli(payloadBeli));
      console.log('responseBeli =>', response);
      if (
        response.data.status === 'Berhasil menambah 1 data dan gagal 0 data'
      ) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: 'success',
          title: response?.data?.msg,
        });
      }
    } catch (err) {
      console.log('handleBeli err =>', err);
    } finally {
    }
  };

  React.useEffect(() => {
    getDetailProductHandle();
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      <div className="border-b-2 border-black h-24 w-full flex justify-between items-center p-12">
        <div>
          <h1 className="font-bold">BOGHE'</h1>
        </div>
        <div className="flex items-center w-48 justify-between">
          <button
            onClick={() => {
              return navigate('/keranjang');
            }}
            className="hover:scale-105 duration-150 hover:shadow-lg rounded-full p-2"
          >
            <IoCartOutline size={25} />
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
      <div className="flex w-[96vw] p-4 h-[600px] space-x-5">
        <div className="h-[80%] border-black border-2 w-[40%] ">
          <button
            onClick={() => {
              return navigate('/dashboard');
            }}
            className="bg-white rounded-full flex justify-center items-center text-xl absolute hover:scale-105 duration-150 hover:shadow-lg p-2"
          >
            <TiArrowBackOutline />
          </button>
          <img src={gambar} alt="" className="w-full h-full" />
        </div>
        <div className="flex flex-col h-[455px] justify-between">
          <div>
            <p className="text-2xl ">{product.namaProduk}</p>
            <p className="w-[600px] font-light text-gray-500">
              {product.deskripsi}
            </p>
          </div>
          <div className="h-26 space-y-4">
            <p className="flex items-center">
              Rating :{' '}
              <p className="ml-2 text-orange-400 text-lg flex items-center">
                <FaStar size={15} className="mr-2" /> {product.rating}
              </p>
            </p>
            <p className="flex">
              kategori :{' '}
              <p className="ml-2 underline font-bold">{product.kategori}</p>{' '}
            </p>
            <p className="text-lg">Harga : {rupiah}</p>
            <div>
              <button
                onClick={beliHandle}
                className="w-48 h-14 bg-black text-white rounded-tl-2xl duration-150"
              >
                <p>Beli</p>
              </button>
              <button 
                onClick={handleKeranjang}
                className="w-48 h-14 border border-black rounded-tr-2xl duration-150"
              >
                <p>Keranjang</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduk;
