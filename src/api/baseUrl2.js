import axios from "axios";

const client = axios.create({
    baseURL : "https://api-react-2.herokuapp.com/api"
})

export default client;