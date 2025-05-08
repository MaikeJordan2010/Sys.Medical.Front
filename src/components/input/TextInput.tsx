
function TextInput({
                    id = "",
                    tipo = "Text",
                    valor = "",
                    descricao = "Descrição",
                    change = () => {}
                  }) 
  {
  return (
    <div className="flex flex-col my-4">
      <label className="text-xl mb-4 text-white" htmlFor={id}>
        {descricao}
      </label>
        <input id={id} className="border p-1" type={tipo} value={valor} onChange={change} />
    </div>
  )
}

export default TextInput;