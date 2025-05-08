import api from "../../config/http";
import { IAgenda } from "../IAgenda";
import { IResultadoGenerico } from "../ResultadoGenerico";
import { IAgendaMensal } from "./IAgendaMensal";
import { IFiltroAgenda } from "./IFiltroAgenda";

export async function ObterLista(codMedico : string) {
    var resultado : Array<IAgenda> = []; 
    await api.get<Array<IAgenda>>(`Agendamento/ObterListaPorMedico/${codMedico}`)
    .then((response) => {
        let {status} = response;
        if(status === 200){
            resultado = response.data as Array<IAgenda>;
        }
    })
    .catch((response) =>{
        console.log(response.data)
    })

    return resultado;
}

export async function ObterListaPorFiltro(filtro : IFiltroAgenda) {
    var resultado : Array<IAgenda> = []; 
    await api.post<Array<IAgenda>>(`Agendamento/ObterPorFiltro`, filtro)
    .then((response) => {
        let {status} = response;
        if(status === 200){
            resultado = response.data as Array<IAgenda>;
        }
    })
    .catch((response) =>{
        console.log(response.data)
    })

    return resultado;
}

export async function Atualizar(agenda : IAgenda) {
    var resultado : IResultadoGenerico = {}; 
    await api.put<IResultadoGenerico>(`Agendamento/Atualizar`, agenda)
    .then((response) => {
        let {status} = response;
        if(status === 200){
            resultado = response.data as IResultadoGenerico;
        }
    })
    .catch((response) =>{
        console.log(response.data)
    })

    return resultado;
}


export async function CadastrarAgendaMensal(agendaMensal : IAgendaMensal) {
    var resultado : IResultadoGenerico = {}; 
    await api.post<IResultadoGenerico>(`Agendamento/CadastrarAgendaMensal`, agendaMensal)
    .then((response) => {
        let {status} = response;
        if(status === 200){
            resultado = response.data as IResultadoGenerico;
        }
    })
    .catch((response) =>{
        console.log(response.data)
    })

    return resultado;
}