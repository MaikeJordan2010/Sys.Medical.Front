
export class UsuarioRoot{

    IdUsuario: number;
    Usuario: string;
    Senha : string;
    Role : string;
    token: string;
    Modulo:string;

    constructor(){
        this.IdUsuario = 0,
        this.Usuario = "kria",
        this.Senha = "m1ster",
        this.Role = "adm"
        this.token = ""
        this.Modulo = "SINOPTICO"
    }
}

