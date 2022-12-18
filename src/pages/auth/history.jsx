import React from 'react';
import shin from '../../images/shin.png';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import {
  GetHapusKeranjang,
  GetHistory,
  GetKeranjang,
  GetTambahItem,
} from '../../API/produk';
import '../../styles/styles.css';
import { HiMinus, HiPlus } from 'react-icons/hi';
import { TiArrowBackOutline } from 'react-icons/ti';
import { BsTrash } from 'react-icons/bs';
import Swal from 'sweetalert2';

const History = () => {
  const [listHistory, setListHistory] = React.useState([]);
  const author = useSelector((state) => state.auth);
  const [payload, setPayload] = React.useState({
    gambarProduk: '',
    namaProduk: '',
    deskripsi: '',
    harga: '',
  });

  const getHistory = async (e) => {
    try {
      const response = await GetHistory();
      setListHistory(response.data.data);
      setPayload(response.data.data);
    } catch (err) {
      console.log('err =>', err);
    }
  };

  React.useEffect(() => {
    getHistory();
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      <div className="border-b-2 border-black h-24 w-full flex justify-between items-center p-12">
        <div>
          <h1 className="font-bold">BOGHE'</h1>
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={() => {
              return navigate('/keranjang');
            }}
            className="hover:scale-105 duration-150 hover:shadow-lg rounded-full p-2"
          >
            <IoCartOutline size={25} />
          </button>
        </div>
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
        {listHistory.length === 0 ? (
          <div className="mt-12">
            <p className="text-xl">Anda belum melakukan apa-apa . . .</p>
          </div>
        ) : (
          listHistory.map((item, index) => {
            const convertRupiah = require('rupiah-format');
            let number = item.produk.harga;
            let rupiah = convertRupiah.convert(number);
            const json = item?.produk.gambarProduk;
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
                  </div>
                </div>
                <div className="space-y-24 w-64">
                  <p className="text-2xl">{rupiah}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default History;
