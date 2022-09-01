import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate()

    const [msg, setMsg] = React.useState('belum login')

    const handleLogin = () => {
        setMsg('proses login')

        return navigate("about", { replace: true })
    }

    return (
        <div>
            <p>ini adalah page home</p>
            <p>{msg}</p>
            <button className="border-solid border-2 border-gray-900 rounded-lg w-20" onClick={handleLogin}>Login</button>
        </div>
    )
}