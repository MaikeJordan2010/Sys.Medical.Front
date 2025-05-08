
function TextInputLogin({
                    id = "",
                    tipo = "Text",
                    valor = "",
                    descricao = "Descrição",
                    placeholder = "",
                    onInputChange = (valor : string) => {},
                  }) 
  {

    function handleNameChange({currentTarget} : any){
      if(currentTarget){
        const novoValor = currentTarget.value;
        onInputChange(novoValor as string);
      }
    }

  return (
    <div className="flex flex-col my-4 mt-20 lg:mt-14 mb-10 p-2">
      <input 
        id={id} 
        className=" w-11/12 lg:w-8/12 border-b-2 h-10 border-b-gray-300 p-1 content-center m-auto bg-none hover:border-b-red-500 focus:outline-none focus:border-b-red-500" 
        type={tipo} 
        value={valor} 
        onChange={handleNameChange} 
        placeholder={placeholder} 
        required={true}
        />
    </div>
  )
}

export default TextInputLogin;