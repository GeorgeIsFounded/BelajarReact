import { navigate , useNavigate , useParams } from "react-router-dom";
import Home from "./home";

export default function Register() {
    let navigate = useNavigate()

    let {id, nama} = useParams()

    return (
        <div className="flex flex-row border-2 border-solid border-black rounded-lg p-3 ml-28">
            <h1 className="mr-5">Register Page</h1>
            <button 
            className="border-2 border-solid border-b-black rounded-lg px-5"
            onClick={() => {
                return navigate("/home")
            }}>Back</button>
        </div>
    );
}
