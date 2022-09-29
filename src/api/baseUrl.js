import axios from "axios";

const client = axios.create({
    baseURL : "https://belajar-react.smkmadinatulquran.sch.id/"
})

export default client;