import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast, ToastContainer, useToast } from "react-toastify";
import ButtonRoundedSend from "../button/ButtonRoundedSend";
import TextInputLogin from "../input/TextInputLogin";
import 'react-toastify/dist/ReactToastify.css';
import { IUsuarioLogin } from "../../features/Medicos/UsuarioLogin";
import { isAuthenticated } from "../../services/autenticacao";
import { Login } from "../../features/Medicos/medicoServices";
import { IResultadoGenerico } from "../../features/ResultadoGenerico";


export function AreaDeLogin(){

    const [username, setUsername] = useState<string>();
    const [password, setPassword ] = useState<string>();
    const [desativarBotao, setDesativarBotao] = useState(false);
    const [spinner, setSpinner] = useState(false);

    var navigate = useNavigate();

    function usernameChange(novoNome : string){
        setUsername(novoNome)
    }

    function passwordChange(novaSenha : string){
        setPassword(novaSenha)
    }

    const notifySucesso = (mensagem : string) =>{
        toast.success(mensagem ,{
            position:toast.POSITION.TOP_RIGHT
        });
    }

    const notifyErro = (mensagem : string) =>{
        toast.error(mensagem ,{
            position:toast.POSITION.TOP_RIGHT
        });
    }

    async function logar(){
        setSpinner(true)
        setDesativarBotao(true);
      
        var usuarioLogin: IUsuarioLogin = {
            senha: password,
            usuario: username,
        }
        await Login(usuarioLogin)
        const autenticado = await isAuthenticated();
        
        if(autenticado){
            notifySucesso("Login realizado com sucesso!")
            setTimeout(() =>{navigate("/Home")}, 3000)
        }
        else{
            notifyErro("Usuário ou senha incorretos!")
        }
        setSpinner(false)
        setDesativarBotao(false);
    }

    return (
        <div className='w-full h-auto lg:w-10/12 lg:h-3/6 sm:w-full sm:h-4/6 mx-auto my-auto '>
            <div className='w-full h-auto flex justify-center'>
                <div className='w-10 h-10 border-2 border-gray-200 mr-3 rounded-full'>
                    <img src="./src/assets/avatar.jpg" className='w-full h-full rounded-full' />
                </div>
                <div className='w-auto h-auto'>
                    <p className='mx-auto w-auto h-auto my-auto text-3xl lg:text-2xl text-center text-gray-400' id='nomeConcessionaria'>Login</p>
                </div>
            </div>
            <div>
                <TextInputLogin
                    descricao='Username'
                    id='username'
                    tipo='text'
                    valor={username}
                    placeholder='CRM ou CPF'
                    onInputChange={usernameChange}
                />

                <TextInputLogin
                    descricao='Password'
                    id='password'
                    tipo='password'
                    valor={password}
                    placeholder='Password'
                    onInputChange={passwordChange}
                    
                />

                <ButtonRoundedSend
                    key={"btnLogar"}
                    title={"Login"}
                    id={"btnLogar"}
                    click={logar}
                    spinner ={spinner}
                    desabilitar={desativarBotao}
                />
                
                <ToastContainer
                />

            </div>
        </div>
    )
}




