function Button ({text,handelBtnClick=()=>{}}) {
    return (
        <button onClick={handelBtnClick} className="bg-orange-500 text-slate-200 p-2 pr-5 pl-5 rounded-2xl mt-7 hover:bg-orange-700 duration-300">{text}</button>
    )
}


export default Button;