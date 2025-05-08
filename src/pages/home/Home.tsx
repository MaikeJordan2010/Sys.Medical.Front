import { useEffect, useState } from "react";
import { BarraSuperiorTop } from "../../components/global/BarraSuperiorTop";
import { Atualizar, ObterLista, ObterListaPorFiltro } from "../../features/Agendas/AgendaServices";
import { IAgenda } from "../../features/IAgenda";
import { codUsuario } from "../../services/autenticacao";
import { IFiltroAgenda } from "../../features/Agendas/IFiltroAgenda";
import { format } from "date-fns";
import { DatePicker } from "@mui/x-date-pickers";
import { Translate } from "phosphor-react";
import { ModalCadstrarAgenda } from "../../components/modais/CadastrarAgenda";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer, useToast } from "react-toastify";
import { notifySucesso } from "../../components/toats/Toats";


function Home(){

    const [abrirTelaCadastroAgenda, setAbrirTelaCadastroAgenda] = useState<boolean>(false);
    const [dataInicial, setDataInicial] = useState("");
    const [dataFinal, setDataFinal] = useState("");
    const [codStatus, setCodStatus] = useState(0);
    const [listaAgenda, setListAgenda] = useState<Array<IAgenda>>([]);
    const [cont, setCont] = useState(0);

    useEffect(() =>{
        async function ObterListaAgenda(){

            var filtro : IFiltroAgenda = {
                dataInicial : new Date(dataInicial),
                dataFinal : new Date(dataFinal),
                codStatusConsulta : codStatus,
                codMedico : await codUsuario()
            };

            if(filtro){
                var resultado = await ObterListaPorFiltro(filtro);
                if(resultado){
                    setListAgenda(resultado);
                }
            }
        }

        ObterListaAgenda();
    }, [dataFinal, dataInicial, codStatus, cont]);



    async function atualizarAgenda(agenda : IAgenda, codStatus : number)
    {
        if(agenda){
            agenda.statusConsulta = codStatus;
            var resultado = await Atualizar(agenda);
            console.log(agenda)
            if(resultado.sucesso)
            {
                notifySucesso(resultado.mensagem ?? "Sucesso");
                setCont(cont + 1);
            }
            else{
                notifySucesso(resultado.mensagem ?? "Erro");
            }
        }
    }


    return(
        <>
        {
            abrirTelaCadastroAgenda ?
            <ModalCadstrarAgenda 
                abrirTelaCadastroAgenda={abrirTelaCadastroAgenda}
                setAbrirTelaCadastroAgenda={setAbrirTelaCadastroAgenda}
            />
            :
            ""
        }



        <div className="w-full  h-screen p-0 m-0" >
            <div className="flex w-full h-[6%]  p-0 m-0 " id="topBar">
                <BarraSuperiorTop />
            </div>


            <div className="w-full h-[94%] bg-slate-200 flex justify-evenly content-center ">
                <div className="w-[20%] h-[90%] mb-[5%] border border-gray-200 shadow-md mt-4 bg-white">
                    <div className="w-full h-[40%] ">
                        <div className="w-full h-[50px] items-center bg-slate-600">
                            <p className="w-full text-center p-3 text-white font-bold ">Filtros</p>
                        </div>
                        <div className=" w-full p-2 justify-center">
                            <div className="z-0 w-full mb-2">
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
                            <div className="z-0 w-full ">
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
                    </div>
                    <div className="w-full h-[50%] ">
                        <div className="w-full h-[60px] items-center bg-slate-600">
                            <p className="w-full text-center p-3 text-white font-bold ">Status da Consulta</p>
                        </div>
                        <div className=" w-full p-2 justify-center">

                        <div className={`w-full h-[50px] items-center hover:bg-slate-400 border-b ${codStatus == 0 ? "bg-slate-400" : ""}`} onClick={() => setCodStatus(0)}>
                            <p className="w-full text-center p-3 text-black font-bold ">Sem Agenda</p>
                        </div>

                        <div className={`w-full h-[50px] items-center hover:bg-slate-400 border-b ${codStatus == 1 ? "bg-slate-400" : ""}`}onClick={() => setCodStatus(1)}>
                            <p className="w-full text-center p-3 text-black font-bold ">Aguardando Aprovação</p>
                        </div>

                        <div className={`w-full h-[50px] items-center hover:bg-slate-400 border-b ${codStatus == 2 ? "bg-slate-400" : ""}`}onClick={() => setCodStatus(2)}>
                            <p className="w-full text-center p-3 text-black font-bold ">Agendado</p>
                        </div>
                        <div className={`w-full h-[50px] items-center hover:bg-slate-400 border-b ${codStatus == 3 ? "bg-slate-400" : ""}`}onClick={() => setCodStatus(3)}>
                            <p className="w-full text-center p-3 text-black font-bold ">Cancelado</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="w-[70%] max-h-[90%] mb-[5%] border border-gray-200 shadow-md mt-5 bg-white">
                    <div className="w-full h-[50px] items-center bg-slate-600 flex justify-between">
                        <p className="text-center p-3 text-white font-bold w-[40%] ">
                            {codStatus == 0 ? "Sem Agenda" :
                                codStatus == 1 ? "Aguardando Aprovação" :
                                    codStatus == 2 ? "Agendado" :
                                        codStatus == 3 ? "Cancelado" :
                                        ""
                            }
                        </p>
                        <span className="w-auto h-[35px]  bg-blue-600 p-2 mr-1 text-white font-bold cursor-pointer" onClick={() => setAbrirTelaCadastroAgenda(!abrirTelaCadastroAgenda)}  >Cadastrar Agenda </span>
                    </div>
                    <div className="w-full h-[550px] relative overflow-y-auto mt-3">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Data Consulta
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Nome Paciente
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        CPF
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Status Consulta
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="h-max-[500px] overflow-y-scroll">

                                {
                                    listaAgenda.map((item) =>{
                                        return(
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                                <td className="px-6 py-4">
                                                    {format(item.dataInicioConsulta, "dd/MM/yyyy HH:mm ") }
                                                </td>
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {item.nomePaciente ?? "Aguardando Agendamento"}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {item.cpfPaciente}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <select id="countries" className={`bg-gray-50 border-2 ${codStatus == 0 ? "border-gray-300" : codStatus == 1 ? "border-orange-400" : codStatus == 2 ? "border-blue-700" : "border-red-500" }  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                                            value={item?.statusConsulta}
                                                            onChange={(e) => atualizarAgenda(item, parseInt(e.target.value))}
                                                    >
                                                        <option value={0}>Sem agenda</option>
                                                        <option value={1}>Aguardando</option>
                                                        <option value={2} >Aprovado</option>
                                                        <option value={3}>Cancelado</option>
                                                    </select>
                                                </td>
                                            </tr> 
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;
