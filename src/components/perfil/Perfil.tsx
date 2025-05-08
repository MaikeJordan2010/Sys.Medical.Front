import { IconContext, User } from "phosphor-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout, obterEmailUsuario, obterUsuario } from "../../services/autenticacao";

export function Perfil({
    notificacoes = false
}){
    const [mostrarDadoUsuario, setMostrarDadosUsuario] = useState(false)
    const [nomeUsuario, setNomeUsuario] = useState("Anônimo")
    const [emailUsuario, setEmailUsuario] = useState("");

    var navigate = useNavigate();

    useEffect(() => {
        setNomeUsuario(obterUsuario() as string);
        setEmailUsuario(obterEmailUsuario() as string);
    })

    const  atualizarPopupDadosUsuario = () => {
        if(mostrarDadoUsuario){
            setMostrarDadosUsuario(false)
        }
        else{
            setMostrarDadosUsuario(true);
        }
    }

    const realizarLogout = () =>{
        logout();
        navigate("/")
    }

    return(
        <>
        <div className="flex  inset-y-0 w-full h-full  mx-auto items-center justify-end pl-10  pr-5 sm:static sm:inset-auto sm:ml-6 lg:ml-0 sm:pr-0 ">
            {
                notificacoes ?
                    <button 
                        type="button" 
                        className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 "
                    >
                        <span className="sr-only">View notifications</span>
                        <svg 
                            className="h-6 w-6" 
                            xmlns="" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke-width="1.5" 
                            stroke="currentColor" 
                            aria-hidden="true"
                        >
                            <path 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" 
                            />
                        </svg>
                    </button>
                :
                    <></>
            }
            
           
            <div className="">
                <div>
                    <button 
                        type="button" 
                        onClick={atualizarPopupDadosUsuario} 
                        className="flex p-1 w-auto rounded-full bg-CorFundoLocalPerfil text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" 
                        id="user-menu-button" 
                        aria-expanded="false" 
                        aria-haspopup="true"
                    >
                        <span className=" w-auto content-center justify-center m-auto ml-2 mr-2 text-white bold">
                        {
                            nomeUsuario
                        }
                        </span>
                        <IconContext.Provider
                            value={{
                                color:"white",
                                size:30,
                                weight:"bold"
                            }}
                        >
                            <User />
                        </IconContext.Provider>
                    </button>
                </div>
                {
                    mostrarDadoUsuario ?
                        <div className="absolute mr-2 right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={1}>
                            <a href="#" className="block px-4 py-2 text-sm text-CorFundoMenu hover:text-white hover:bg-CorFundoMenu" role="menuitem" tabIndex={1} id="user-menu-item-1">Nome: {nomeUsuario}</a>
                            <a href="#" className="block px-4 py-2 text-sm text-CorFundoMenu hover:text-white hover:bg-CorFundoMenu" role="menuitem" tabIndex={1} id="user-menu-item-2">Email: {emailUsuario}</a>
                            <a href="#" onClick={realizarLogout} className="block px-4 py-2 text-sm text-CorFundoMenu hover:text-white hover:bg-CorFundoMenu" role="menuitem" tabIndex={1} id="user-menu-item-2">Sair</a>
                        </div>
                    :
                        <></>
                }
            </div>
        </div>
        </>
    );
}

