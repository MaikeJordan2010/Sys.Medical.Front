import React from "react";
import { ConfiguracoesTela } from "../../features/entidadesSistema/ConfiguracoesTela";


export const telaContext = React.createContext<ConfiguracoesTela>({
    width : 0,
    heigth : 0
});