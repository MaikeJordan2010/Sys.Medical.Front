import { IUsuario } from "../features/Medicos/IUsuario";

export const _usuario = "USUARIO_LOGADO";
export const _token = "TOKEN";
export const _emailUsuario = "EMAIL_USUARIO_LOGADO"
export const _idUsuario = "ID_USUARIO_LOGADO"
export const _roleUsuario = "ROLE_USUARIO"

export const obterObjUsuario= () => {
  const objGravado = localStorage.getItem(_usuario);
  const objEmMemoria : IUsuario = JSON.parse(objGravado as string)
  return objEmMemoria;
};


interface DadosUsuario {
  unique_name : string;
  role : string;
  email : string;
  actort : string;
}


export const atualizarUsuario = (login : IUsuario ) => {
  if(login.nomeMedico != null ){
    localStorage.setItem(_usuario, login.nomeMedico!);
    localStorage.setItem(_emailUsuario, login.email!);
    localStorage.setItem(_idUsuario, login.codMedico!);
    localStorage.setItem(_roleUsuario, login.crm!!);
    localStorage.setItem(_token, login.token!);
    return true;
  }
  return false;
};

export const obterUsuario = () => localStorage.getItem(_usuario);
export const obterEmailUsuario = () => localStorage.getItem(_emailUsuario);
export const codUsuario = async () => localStorage.getItem(_idUsuario);

export const obterIdUsuario = () => {
  const idStr = localStorage.getItem(_idUsuario);
  return parseInt(idStr as string);
}

export const isAuthenticated = async () => {
  var tokenGuardado = localStorage.getItem(_token);
  if(tokenGuardado != null && tokenGuardado !=  undefined && tokenGuardado != ""){
    return true;
  }
  return false;
};

export const obterToken= () => localStorage.getItem(_token);

export const atualizarToken = (novoToken : string) => {
  localStorage.setItem(_token, novoToken);
};

export const logout = () => {
  localStorage.removeItem(_usuario);
  localStorage.removeItem(_token);
  localStorage.removeItem(_emailUsuario);
  localStorage.removeItem(_idUsuario);
  localStorage.removeItem(_roleUsuario);
};