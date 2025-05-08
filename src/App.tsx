import { useCallback, useEffect, useState } from 'react';
import TextInputLogin from './components/input/TextInputLogin';
import ButtonRoundedSend from './components/button/ButtonRoundedSend';
import { GetConfiguracoesIniciais, GetImageBackGround } from './features/auxiliar/AuxiliarServices';
import { TSysIMG } from './features/auxiliar/TSysImg';
import { ConfiguracoesIniciais } from './features/auxiliar/ConfiguracoesIniciais';
import Login from './pages/login/Login';
import { AreaDeLogin } from './components/login/AreaDeLogin';

 function App() {
  
  return (
    <div className='w-full h-full bg-slate-800 bg-[url(./assets/imgFundoKria.jpg)] bg-cover bg-repeat-round'>
       <div className='w-full h-screen bg-bg-corFundo/70 items-center flex'>
        <div className='w-full h-full lg:w-8/12   lg:h-5/6 sm:w-full sm:h-full lg:flex bg-none  mx-auto shadow-2xl shadow-gray-900'>
          <div className='lg:w-6/12 sm:w-full sm:flex  h-full bg-[url(./assets/fundo_kcor.jpg)] bg-cover bg-repeat-round lg:rounded-l-lg'>
            <div className='w-full h-full grid justify-items-stretch lg:rounded-l-lg bg-black/80 content-center'>
              
              <div className='w-9/12 h-3/6 grid grid-flow-col mx-auto content-center lg:content-end justify-center lg:justify-end pb-2 '>
                <div className=' my-auto p-2 '>
                  <img src='./src/assets/kria.jpg' className='w-16 h-auto mx-auto my-auto' />
                </div>
                <div className=' content-center lg:content-end grid '>
                  <span  className=' w-full text-white text-5xl text-left' >Kria</span>
                  <span className=' w-full text-white text-2xl text-left' >Tecnologia</span>
                </div>
              </div>

              <ul className='w-6/12 border-b-2 grid border-red-500 border-b-red-500 justify-self-center lg:justify-self-end mr-2'></ul>

              <div className='w-9/12 h-3/6 mx-auto my-auto grid  content-start justify-center lg:justify-end'>
                <p className='mx-auto w-full h-auto my-auto text-5xl text-gray-400 text-left pb-5 pt-5' >
                  KWEB
                </p>
                <p className='mx-auto w-full h-auto my-auto text-2xl text-white/100 text-left' >
                  Módulo Sinóptico
                </p>
              </div>

            </div>
          </div>
          <div className='lg:w-6/12 sm:w-full h-full bg-white rounded-r-lg flex'>
            <AreaDeLogin />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

//configIniciais?.ImagemLogo