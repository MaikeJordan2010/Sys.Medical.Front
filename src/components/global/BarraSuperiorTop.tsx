import { Faders, IconContext, X } from "phosphor-react";
import { Perfil } from "../perfil/Perfil";

interface IConfiguracoesBarraSuperior{
    AlterarMenu : (valor : any) => void;
    AbrirMenu : boolean;
}

export function BarraSuperiorTop(){
    return(
        
        <div className="w-full h-full grid grid-flow-col-dense grid-cols-12 grid-rows-1 bg-slate-700 top-0 left-0  z-1000000" id="topBar">
            <div className="col-span-6 h-auto pl-5 pt-1">
            </div>
            <div className="col-span-6 grid grid-row-reverse pr-6">
                <Perfil />
            </div>
        </div>
    )
}