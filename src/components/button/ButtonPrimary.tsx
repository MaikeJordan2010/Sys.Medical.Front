function ButtonPrimary({
    id = "",
    title = "Send",
    type = "button",
    click = () => {},
    
})
{
    return(
        <div className="flex flex-col my-4">
            <button 
                className="w-full h-8 bg-green-600" 
                key={id} 
                title={title} 
                typeof={type} 
                onClick={click} 
            >
            {
                title
            }
            </button>
        </div>
    )
}

export default ButtonPrimary;