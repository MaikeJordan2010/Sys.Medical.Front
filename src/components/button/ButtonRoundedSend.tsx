import { Spinner } from "../spinner/Spinner";

function ButtonRoundedSend({
    id = "",
    title = "Send",
    type = "button",
    spinner = false,
    desabilitar = false,
    click = () => {}
})
{

    const estilo = desabilitar ? "w-11/12 lg:w-8/12 h-12  rounded-2xl m-auto  text-white content-center text-center justify-center grid grid-flow-col bg-blue-400" :
                                 "w-11/12 lg:w-8/12 h-12  rounded-2xl m-auto  text-white content-center text-center justify-center grid grid-flow-col bg-blue-700";

    return(

        <div className="flex flex-col my-4 pt-5 pb-5">
            <button 
                className={estilo}  
                key={id} 
                disabled={desabilitar}
                title={title} 
                typeof={type} 
                onClick={click} 
            >
                {
                    spinner ? 
                    <Spinner 
                        codDaBorda="border-t-blue-700"
                    />
                    :
                    ""
                }
                 
                <span className="h-full text-center justify-center content-center grid">
                    {"  " + title}
                </span>
            </button>
        </div>
    )
}

export default ButtonRoundedSend;