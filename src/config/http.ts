import axios from "axios";
import { obterToken } from "../services/autenticacao";

const api = axios.create({
    baseURL: "http://localhost:5279/"
});


api.interceptors.request.use(async config =>{
    const token = await obterToken();
    if(token){
        config.headers ? config.headers.Authorization = `Bearer ${token}` : null;
    }
    return config;
})
api.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
api.defaults.headers.common["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, PATCH";
api.defaults.headers.common["Content-Type"] = "application/json";

export default api;