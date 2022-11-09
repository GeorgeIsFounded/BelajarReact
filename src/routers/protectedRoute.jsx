import React from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authMe } from "../redux/action/authAction";
import { syncToken } from "../api/baseUrl2";

export default function ProtectedRoute({children}) {
    const auth = Cookies.get('myapps_token')
    const isAuth = useSelector ((state) => state?.authProgress?.isAuth);

    console.log('auth', isAuth);

    let [proces, setProces] = React.useState(true);
    let dispatch = useDispatch();
    
    const onLoaded = async (values) => {
        let result = await dispatch(authMe(values));
        syncToken();
        setProces(false);

        console.log('res', result);
    }

    React.useEffect(() => {
        if (!isAuth){
            if (auth !== undefined) {
                onLoaded();
            } else  {
                setProces(false);
            }
        } else {
            syncToken();
            setProces(false);
        }
    }, []);

    if (proces){
        return <div className="text-red-500 bg-black">Loading</div>
    } else {
        console.log("auth", auth);
        return auth !== undefined ? children : <Navigate to="/login" />
    }
}