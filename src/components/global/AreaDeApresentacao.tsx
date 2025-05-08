export function AreaDeApresentacao(){
    return (
        <div className='w-full h-auto bg-[url(./assets/img1.jpg)] bg-cover bg-repeat-round lg:rounded-l-lg '>
            <div className='w-full h-full grid justify-items-stretch lg:rounded-l-lg bg-black/80 content-center lg:overflow-y-auto'>
                <div className='w-9/12 h-3/6 grid grid-flow-col mx-auto content-end lg:content-end justify-center lg:justify-end pb-2 '>
                    <div className=' my-auto p-2 '>
                        <img src='./src/assets/logo_Rede_dor.png' className='w-2xl h-auto mx-auto my-auto' />
                    </div>
                    {/* <div className=' content-center lg:content-end grid '>
                        <span  className=' w-full text-white text-5xl text-left' >Rede Dor</span>
                        <span className=' w-full text-white text-2xl text-left' >Tecnologia</span>
                    </div> */}
                </div>

                <ul className='w-9/12 border-b-2 grid border-red-500 border-b-red-500 justify-self-center lg:justify-self-end mr-2'></ul>

                <div className='w-9/12 h-3/6 mx-auto my-auto grid  content-start justify-center lg:justify-end'>
                    <p className='mx-auto w-full h-auto my-auto text-5xl text-gray-400 text-left pb-5 pt-5' >
                        Sys Medical
                    </p>
                    <p className='mx-auto w-full h-auto my-auto text-2xl text-white/100 text-left' >
                        Módulo médico
                    </p>
                </div>
            </div>
        </div>
    )
}