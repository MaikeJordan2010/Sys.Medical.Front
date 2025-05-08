import { useState } from "react";
import { IAgendaMensal } from "../../features/Agendas/IAgendaMensal";
import { codUsuario } from "../../services/autenticacao";
import { CadastrarAgendaMensal } from "../../features/Agendas/AgendaServices";
import { notifySucesso } from "../toats/Toats";

export function ModalCadstrarAgenda(props:{
    abrirTelaCadastroAgenda : boolean,
    setAbrirTelaCadastroAgenda: (valor: boolean) => void
}){
    const [dataInicial, setDataInicial] = useState("");
    const [dataFinal, setDataFinal] = useState("");
    const [horaInicial, setHoraInicial] = useState("");
    const [horaFinal, setHoraFinal] = useState("");
    const [domingo, setDomingo] = useState<boolean>(true);
    const [segunda, setSegunda] = useState<boolean>(true);
    const [terca, setTerca] = useState<boolean>(true);
    const [quarta, setQuarta] = useState<boolean>(true);
    const [quinta, setQuinta] = useState<boolean>(true);
    const [sexta, setSexta] = useState<boolean>(true);
    const [sabado, setSabado] = useState<boolean>(true);
    const [desconsiderarFeriados, setDesconsidaderarFeriados] = useState<boolean>(true);

    const [tempoMedioPorConsulta, setTempoMedioPorConsulta] = useState<number>(30);
    const [valorConsulta, setValorConsulta] = useState<number>(0);


    async function cadastrarAgenda(){
        var agendaMensal : IAgendaMensal = {
            codMedico : await codUsuario() || null,
            dataInicial : new Date(dataInicial),
            dataFinal : new Date(dataFinal),
            horaInicioTurno : horaInicial,
            horaFimTurno : horaFinal,
            domingo : domingo,
            segunda : segunda,
            terca : terca,
            quarta : quarta,
            quinta : quinta,
            sexta : sexta,
            sabado : sabado,
            desconsiderarFeriados : desconsiderarFeriados,
            tempoMedioAtendimento : tempoMedioPorConsulta,
            valor : valorConsulta

        }

        var resultado =  await CadastrarAgendaMensal(agendaMensal);

        if(resultado.sucesso)
        {
            notifySucesso(resultado.mensagem ?? "Sucesso");
        }
        else{
            notifySucesso(resultado.mensagem ?? "Erro");
        }

        props.setAbrirTelaCadastroAgenda(!props.abrirTelaCadastroAgenda);
    }

    return(
        <>
            <div className="w-full h-full absolute justify-center content-center bg-slate-500/50 z-50 " >
                <div className="w-[60%] h-[70%] mb-[5%] border border-gray-200 shadow-md mt-5 bg-white ml-[20%]" >
                    <div className="w-full h-[50px] items-center bg-slate-600 flex justify-between">
                        <p className="w-auto text-center p-3 text-white font-bold ">Cadastrar de Agenda</p>
                        <p className="w-auto p-2  text-white font-bold cursor-pointer" onClick={() => props.setAbrirTelaCadastroAgenda(!props.abrirTelaCadastroAgenda)} > X </p>
                    </div>
                    <div className="w-full h-[90%] relative overflow-y-auto mt-3">
                        <div className="w-full flex content-center">
                            <div className="z-0 w-full mb-2 p-2">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Data Inicio</label>
                                <input 
                                    type="date" 
                                    id="dataInicial" 
                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"  
                                    required 
                                    onChange={(e) => {setDataInicial(e.target.value)}}
                                    value={dataInicial}
                                    />
                            </div>
                            <div className="z-0 w-full mb-2 p-2">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Data Final</label>
                                <input 
                                    type="date" 
                                    id="dataFinal" 
                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" 
                                    onChange={(e) => {setDataFinal(e.target.value)}}
                                    value={dataFinal}
                                />
                            </div>
                        </div>

                        <div className="w-full flex content-center">
                            <div className="z-0 w-full mb-2 p-2">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hora Inicio</label>
                                <input 
                                    type="time" 
                                    id="dataInicial" 
                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"  
                                    required 
                                    onChange={(e) => {setHoraInicial(e.target.value)}}
                                    value={horaInicial}
                                    />
                            </div>
                            <div className="z-0 w-full mb-2 p-2">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hora Final</label>
                                <input 
                                    type="time" 
                                    id="dataFinal" 
                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" 
                                    onChange={(e) => {setHoraFinal(e.target.value)}}
                                    value={horaFinal}
                                />
                            </div>
                        </div>

                        <div className="w-full flex content-center">
                            <div className="z-0 w-full mb-2 p-2">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tempo Médio por Consulta</label>
                                <input 
                                    type="number" 
                                    id="Tempo médio por consulta" 
                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"  
                                    required 
                                    onChange={(e) => {setTempoMedioPorConsulta(parseInt(e.target.value))}}
                                    value={tempoMedioPorConsulta}
                                    />
                            </div>
                            <div className="z-0 w-full mb-2 p-2">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Valor da Consulta</label>
                                <input 
                                    type="number" 
                                    id="Valor da Consulta" 
                                    className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" 
                                    onChange={(e) => {setValorConsulta(parseFloat(e.target.value))}}
                                    value={valorConsulta}
                                />
                            </div>
                        </div>

                        <div className="w-full flex content-center justify-around">
                            <div className="z-0 w-auto mb-2 p-2 flex">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    <input 
                                        type="checkbox" 
                                        id="Domingo" 
                                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"  
                                        required 
                                        onChange={(e) => {setDomingo((e.target.checked))}}
                                        checked={domingo}
                                    />
                                     Domingo
                                </label>
                            </div>
                            <div className="z-0 w-auto mb-2 p-2 flex ">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    <input 
                                        type="checkbox" 
                                        id="Domingo" 
                                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"  
                                        required 
                                        onChange={(e) => {setSegunda((e.target.checked))}}
                                        checked={segunda}
                                    />
                                     Segunda
                                </label>
                            </div>
                            <div className="z-0 w-auto mb-2 p-2 flex">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    <input 
                                        type="checkbox" 
                                        id="Domingo" 
                                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"  
                                        required 
                                        onChange={(e) => {setTerca((e.target.checked))}}
                                        checked={terca}
                                    />
                                     Terça
                                </label>
                            </div>
                            <div className="z-0 w-auto mb-2 p-2 flex">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    <input 
                                        type="checkbox" 
                                        id="Domingo" 
                                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"  
                                        required 
                                        onChange={(e) => {setQuarta((e.target.checked))}}
                                        checked={quarta}
                                    />
                                     Quarta
                                </label>
                            </div>

                            <div className="z-0 w-auto mb-2 p-2 flex">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    <input 
                                        type="checkbox" 
                                        id="Domingo" 
                                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"  
                                        required 
                                        onChange={(e) => {setQuinta((e.target.checked))}}
                                        checked={quinta}
                                    />
                                     Quinta
                                </label>
                            </div>

                            <div className="z-0 w-auto mb-2 p-2 flex">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    <input 
                                        type="checkbox" 
                                        id="Domingo" 
                                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"  
                                        required 
                                        onChange={(e) => {setSexta((e.target.checked))}}
                                        checked={sexta}
                                    />
                                     Sexta
                                </label>
                            </div>

                            <div className="z-0 w-auto mb-2 p-2 flex">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    <input 
                                        type="checkbox" 
                                        id="Domingo" 
                                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"  
                                        required 
                                        onChange={(e) => {setSabado((e.target.checked))}}
                                        checked={sabado}
                                    />
                                     Sábado
                                </label>
                            </div>

                            <div className="z-0 w-auto mb-2 p-2 flex">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    <input 
                                        type="checkbox" 
                                        id="Domingo" 
                                        className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light"  
                                        required 
                                        onChange={(e) => {setDesconsidaderarFeriados((e.target.checked))}}
                                        checked={desconsiderarFeriados}
                                    />
                                     Desconsiderar Feriados
                                </label>
                            </div>
                        </div>
                        <div className="w-full flex content-center justify-end p-5">
                            <span className="w-[200px] h-[50px] text-center  bg-blue-600 p-2 mr-1 text-white font-bold cursor-pointer" onClick={() => cadastrarAgenda()}  > Cadastrar </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}