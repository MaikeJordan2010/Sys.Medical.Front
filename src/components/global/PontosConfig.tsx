import { useContext, useState } from "react";
import uuid from "react-uuid";
import { telaContext } from "../../pages/home/homeContext";

export function PontosConfig(props: {marginX:number, marginY: number}){
    const id: string = uuid();
    const imagemOriginal = useContext(telaContext)
    let localImagem : HTMLElement | null = document.getElementById("localImgModelo");

      window.addEventListener("resize", function(){
          let elemento = document.getElementById(id);

         if(imagemOriginal != undefined && localImagem != undefined && elemento != undefined){
             let diferencaLargura: number = localImagem?.offsetWidth / imagemOriginal.width;
             let diferencaAltura : number = localImagem?.offsetHeight / imagemOriginal.heigth;
             elemento.style.marginLeft = (props.marginX * diferencaLargura).toFixed(2) + "px";
             elemento.style.marginTop = (props.marginY * diferencaAltura).toFixed(2) + "px";
         }
     });

    let marginLetfPX : number = 0;
    let marginTopPX : number = 0;
     if(localImagem){
        let diferencaLargura: number = localImagem?.offsetWidth  / imagemOriginal.width;
        let diferencaAltura : number = (localImagem?.offsetHeight / imagemOriginal.heigth);
        marginLetfPX  = (props.marginX * diferencaLargura);
        marginTopPX  = (props.marginY * diferencaAltura);
     }
     

    return (
        <div style={{marginLeft:`${marginLetfPX}px`, marginTop:`${marginTopPX}px`}} className=" w-[10px] h-[10px] bg-red-500 absolute" key={id} id={id}>
            
        </div>
    )
}