import { any } from "prop-types";
import { useContext, useEffect, useRef } from "react"
import uuid from "react-uuid";
import { Linhas } from "../../features/sinoptico/entidades/Linhas";
import { telaContext } from "../../pages/home/homeContext";


export function Linha(config: Linhas){
    let id = uuid();
    let localImagem : HTMLElement | null = document.getElementById("localImgModelo");
    const imagemOriginal = useContext(telaContext)
    const canvasRef =  useRef(null);

//     window.addEventListener("resize", function(){
//         let elemento = document.getElementById(id);
//        if(imagemOriginal != undefined && localImagem != undefined && elemento != undefined){
//            let diferencaLargura: number = localImagem?.offsetWidth / imagemOriginal.width;
//            let diferencaAltura : number = localImagem?.offsetHeight / imagemOriginal.heigth;
//            elemento.style.marginLeft = (props.marginX * diferencaLargura).toFixed(2) + "px";
//            elemento.style.marginTop = (props.marginY * diferencaAltura).toFixed(2) + "px";
//        }
//    });

const draw =  (ctx : any) =>{
    ctx.lineWidth = 4;
    ctx.lineWidth = 2
    ctx.strokeStyle = '#F6F999';
    ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.lineTo(140, 10);
    ctx.moveTo(10, 140);
    ctx.lineTo(140, 140);
    ctx.stroke();
}

    useEffect(() =>{


         let marginLetfPXini : number = 0;
         let marginTopPXini : number = 0;
         let marginLetfPXfim : number = 0;
         let marginTopPXifim : number = 0;

         if(localImagem){
             let diferencaLarguraIni: number = localImagem?.offsetWidth  / imagemOriginal.width;
             let diferencaAlturaIni : number = (localImagem?.offsetHeight / imagemOriginal.heigth);
             let diferencaLarguraFim: number = localImagem?.offsetWidth  / imagemOriginal.width;
             let diferencaAlturaFim : number = (localImagem?.offsetHeight / imagemOriginal.heigth);
             marginLetfPXini  = (config.pontoXInicial! * diferencaLarguraIni);
             marginTopPXini  = (config.pontoYInicial! * diferencaAlturaIni);
             marginLetfPXfim  = (config.pontoXFinal! * diferencaLarguraFim);
             marginTopPXifim  = (config.pontoYFinal! * diferencaAlturaFim);
        }

        //var canvas : any = document.getElementById(id);
        const canvas : any = canvasRef.current
        var ctx = canvas.getContext('2d');
        draw(ctx);
    }, [draw]);

    return (
        <canvas id={id} key={id} ref={canvasRef}  style={{position:"absolute"}} />
    );
}