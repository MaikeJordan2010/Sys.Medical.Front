
import { AreaDeApresentacao } from '../../components/global/AreaDeApresentacao';
import { AreaDeLogin } from '../../components/login/AreaDeLogin';
import "../../components/toats/Toats"

 function Login() {
  
  return (
    <div className='w-full h-full bg-slate-800 bg-[url(./assets/hospital.jpg)] bg-cover bg-repeat-round'>
       <div className='w-full h-full bg-CorFundoLogin/70 items-center flex'>
        <div className='w-full h-full lg:w-8/12   lg:h-5/6 sm:w-full sm:h-full lg:flex bg-none  mx-auto shadow-2xl shadow-gray-900  '>
          <div className='lg:w-6/12 lg:h-full sm:w-full sm:flex  h-full '>
              <AreaDeApresentacao />
          </div>
          
          <div className='lg:w-6/12 lg:h-full sm:w-full h-full bg-white rounded-r-lg flex lg:overflow-y-auto'>
            <AreaDeLogin />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
