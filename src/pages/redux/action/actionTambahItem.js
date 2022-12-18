import { PutTambahItem } from "../../../API/produk";

export function actionUbahItem(payload) {
    return async (dispatch) => {
      try {
        let response = await PutTambahItem(payload);
        let data = response;
        console.log('data tambahKeranjang =>', data.data);
  
        return data
      } catch (err) {
        console.log('actionUbahItem =>', err);
        return err
      }
    };
  }