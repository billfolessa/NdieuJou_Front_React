import axios from "axios";


 const API  = axios.create({
    baseURL: "localhost:8080"
})

API.interceptors.request.use((config)=>{
    const jwt = localStorage.getItem("jwt")
    if(jwt){
        config.headers.Authorization = `Bearer ${jwt}`
    }
    return config
})


export default API;