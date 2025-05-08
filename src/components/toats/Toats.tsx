import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


   export const notifySucesso = (mensagem : string) =>{
        toast.success(mensagem ,{
            position:toast.POSITION.TOP_RIGHT
        });
    }

    const notifyErro = (mensagem : string) =>{
        toast.error(mensagem ,{
            position:toast.POSITION.TOP_RIGHT
        });
    }