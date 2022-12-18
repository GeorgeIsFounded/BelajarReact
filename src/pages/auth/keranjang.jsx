import React from 'react';
import shin from '../../images/shin.png';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import {
  DeleteHapusKeranjang,
  PostBeli,
  GetHapusKeranjang,
  GetKeranjang,
  GetTambahItem,
} from '../../API/produk';
import '../../styles/styles.css';
import { HiMinus, HiPlus } from 'react-icons/hi';
import { TiArrowBackOutline } from 'react-icons/ti';
import { BsClockHistory, BsTrash } from 'react-icons/bs';
import { actionBeli } from '../redux/action/actionBeli';
import Swal from 'sweetalert2';
import { actionUbahItem } from '../redux/action/actionTambahItem';

const Keranjang = () => {
  const [listKeranjang, setListKeranjang] = React.useState([]);
  let dispatch = useDispatch();
  const author = useSelector((state) => state.auth);
  const [payloadTambah, setPayloadTambah] = React.useState({});
  const [fetchProduct, setFetchProduct] = React.useState(false);
  const [product, setProduct] = React.useState([]);
  const [payload, setPayload] = React.useState({
    data: "",
  });

  const getKeranjang = async () => {
    try {
      let response = await GetKeranjang();
      console.log("responseKeranjang =>", response);
      setProduct(response.data.data);
      setPayload(response.data);
    } catch (err) {
      console.log("errGetKeranjang =>", err);
    } finally {
    }
  };

  let array = product.map((value) => value?.produk?.harga);
  const hasil = array.reduce((total, currentValue) => total + currentValue, 0);
  const convertRupiah = require('rupiah-format');
  let number = hasil;
  let total = convertRupiah.convert(number);

  const getTambahItem = async (id, jumlah) => {
    try {
      const response = await dispatch(actionUbahItem(payloadTambah));
      setPayloadTambah({ id: id, jumlah: jumlah });
      setPayload(response.data.data);
    } catch (err) {
      console.log('err =>', err);
    }
  };

  const handleHapusKerangjang = async (id) => {
    try {
      const response = await DeleteHapusKeranjang(id);
      getKeranjang();
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
          title: 'Berhasil di hapus dari keranjang',
        });
      }
    } catch {}
  };

  const beliHandle = async () => {
    try {
      setFetchProduct(true);
      if (product.length === 0) {
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
        return Toast.fire({
          icon: 'info',
          title: 'Tidak ada barang dikeranjang',
        });
      } else {
        const response = await dispatch(actionBeli(payload));
        console.log('Beli =>', response);
        getKeranjang();
        if (response.status === 201) {
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
            title: response.data.msg,
          });
        }
      }
    } catch (err) {
    } finally {
      setFetchProduct(false);
    }
  };

  React.useEffect(() => {
    getKeranjang();
  }, []);

  const navigate = useNavigate();
  console.log("peylod => ", payload)
  return (
    <div>
      <div className="border-b-2 border-black h-24 w-full flex justify-between items-center p-12">
        <div>
          <h1 className="font-bold">BOGHE'</h1>
        </div>
        <button
          onClick={() => {
            return navigate('/history', { replace: true });
          }}
          className="hover:scale-105 duration-150 hover:shadow-lg rounded-full p-2"
        >
          <BsClockHistory size={20} />
        </button>
      </div>
      <div className="pl-2 pt-2">
        <button
          onClick={() => {
            return navigate(-1);
          }}
          className="rounded-full flex justify-center items-center text-xl absolute hover:scale-105 duration-150 hover:shadow-lg p-2"
        >
          <TiArrowBackOutline />
        </button>
      </div>
      <div className="flex w-[96vw] p-4 h-full space-x-5 flex-col">
        <div className="flex flex-col justify-between"></div>
        {product.length === 0 ? (
          <div className="mt-12">
            <p className="text-xl">
              Anda belum memasukan apapun kedalam keranjang anda . . .
            </p>
          </div>
        ) : (
          product.map((item, index) => {
            const convertRupiah = require('rupiah-format');
            let number = item.produk.harga;
            let rupiah = convertRupiah.convert(number);
            const json = item?.produk.gambarProduk;
            const increment = () => {
              getTambahItem(item?.id, item?.jumlah + 1);
              getKeranjang();
            };
            const decrement = () => {
              getTambahItem(item?.id, item?.jumlah - 1);
              getKeranjang();
            };
            const obj = JSON.parse(json);
            return (
              <div
                key={index}
                className="p-5 flex w-[1400px] h-[13rem] items-center"
              >
                <div className="w-[1300px] h-44 flex space-x-3">
                  <div className="border-2 border-black w-64 h-full rounded-xl bg-cover">
                    <img
                      src={obj[0].gambar1}
                      alt=""
                      className="h-full rounded-lg w-full"
                    />
                  </div>
                  <div className="flex justify-between flex-col">
                    <div>
                      <p className="text-2xl">{item.produk.namaProduk}</p>
                      <p>{item.produk.deskripsi}</p>
                    </div>
                    <div className="flex w-32 space-x-12">
                      <button
                        onClick={() => {
                          return decrement();
                        }}
                        className="border border-black w-6 h-6 font-bold rounded-md p-1 hover:scale-105 duration-150 hover:border-b-2 hover:border-r-2"
                      >
                        <HiMinus />
                      </button>
                      <p>{item.jumlah}</p>
                      <button
                        onClick={() => {
                          return increment();
                        }}
                        className="border border-black w-6 h-6 font-bold rounded-md p-1 hover:scale-105 duration-150 hover:border-b-2 hover:border-r-2"
                      >
                        <HiPlus />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="space-y-24">
                  <p className="text-2xl w-56">{rupiah}</p>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => {
                        handleHapusKerangjang(item.id);
                      }}
                      className="hover:bg-red-400 flex justify-center items-center w-32 h-12 border rounded-md hover:-translate-y-1 hover:border-b-4 hover:border-r-4 hover:-translate-x-1 border-black duration-150"
                    >
                      <p>
                        <BsTrash size={20} />
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      <button
        onClick={beliHandle}
        className="mb-2 ml-9 w-56 h-12 text-white border-black rounded-md hover:-translate-y-1 hover:border-b-4 hover:border-r-4 hover:-translate-x-1 bg-black duration-150"
      >
        <p>Checkout</p>
      </button>
      <button className="mb-2 ml-9 w-56 h-12 text-white border-black rounded-md hover:-translate-y-1 hover:border-b-4 hover:border-r-4 hover:-translate-x-1 bg-black duration-150">
        <p>Total : {total}</p>
      </button>
    </div>
  );
};

export default Keranjang;
