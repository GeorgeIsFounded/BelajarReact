import React from 'react';
import shin from '../../images/shin.png';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import { GetDetailProduct } from '../../API/produk';
import '../../styles/styles.css';
import { TiArrowBackOutline } from 'react-icons/ti';

const DetailProduk = () => {
  let { uuid } = useParams();

  const author = useSelector((state) => state.auth);
  const [product, setProduct] = React.useState([]);

  const getDetailProductHandle = async (e) => {
    try {
      const response = await GetDetailProduct(uuid);
      console.log('response =>', response);
      console.log('product =>', response.data.data);
      setProduct(response.data.data);
    } catch (err) {
      console.log('err =>', err);
    }
  };

  React.useEffect(() => {
    getDetailProductHandle();
  }, []);

  console.log('detailProduct =>', DetailProduk);

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
      <div className="flex w-[96vw] p-4 h-[600px] space-x-5">
        <div className="h-[80%] border-black border-2 w-[40%] ">
          <button
            onClick={() => {
              return navigate('/dashboard');
            }}
            className="h-7 w-7 rounded-full flex justify-center items-center text-xl pl-2 absolute"
          >
            <TiArrowBackOutline />
          </button>
          <img src="" alt="" />
        </div>
        <div className="flex flex-col h-[455px] justify-between">
          <div>
            <p className="text-2xl ">{product.namaProduk}</p>
            <p className="w-[600px] font-light text-gray-500">
              {product.deskripsi}
            </p>
          </div>
          <div className="h-26 space-y-8">
            <p className="text-lg">Harga : Rp{product.harga}</p>
            <div>
              <button className="w-48 h-14 bg-black text-white rounded-tl-2xl duration-150">
                <p>Beli</p>
              </button>
              <button className="w-48 h-14 border border-black rounded-tr-2xl duration-150">
                Keranjang
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduk;
