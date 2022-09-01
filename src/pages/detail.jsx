import { useNavigate, useParams } from "react-router-dom"
export default function Detail(){

    let navigate = useNavigate()

    let {id, nama} = useParams()
    return (
        <div>
            <p>ini adalah detail</p>
            <button onClick={() => {
                return navigate("/home")
            }}>Home</button>
        </div>
    )
}