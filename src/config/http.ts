import axios from "axios";
import config from "../config/config";
import { obterToken } from "../services/autenticacao";

const api = axios.create({
    baseURL: config.BACK_END_URL
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