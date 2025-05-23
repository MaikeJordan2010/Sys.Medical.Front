export function Spinner({codDaBorda = "black"})  {
    return(
        <div className="flex justify-center items-center">
            <div className={"spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full m-1 "  + codDaBorda }>
            <span className="visually-hidden"></span>
            </div>
        </div>
    )
}