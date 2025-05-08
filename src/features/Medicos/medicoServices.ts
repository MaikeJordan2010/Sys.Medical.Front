import api from "../../config/http";
import {atualizarUsuario, logout } from "../../services/autenticacao";
import { IUsuarioLogin } from "./UsuarioLogin";
import { IResultadoGenerico } from "../ResultadoGenerico";
import { IUsuario } from "./IUsuario";

export async function Login(usuarioLogin : IUsuarioLogin) {
    var resultado : IResultadoGenerico; 
    await api.post<IResultadoGenerico>("Medico/Login", usuarioLogin)
    .then((response) => {
        let {status} = response;
        if(status === 200){
            resultado = response.data as IResultadoGenerico;
            return atualizarUsuario(resultado.dados as IUsuario);
        }
    })
    .catch((response) =>{
        logout();
        console.log(response.data)
    })
}
