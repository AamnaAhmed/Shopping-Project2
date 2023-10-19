function DeshboardDet ({icon,code,text,color}) {
    return (
        <div className="flex bg-slate-200 rounded-lg py-8 lg:py-10  px-14 sm:px-10 md:px-5 w-full">
           <div style={{backgroundColor: `${color}`}} className=" p-4 lg:p-6  rounded-lg mr-5 mr-8 flex justify-center items-center">
             {icon} 
           </div>
           <div className="flex justify-center items-start flex-col">
                <span className="text-stone-900 text-xl">{code.ic}{code.co}</span>
                <p className="text-stone-900 2xl">{text}</p>
           </div>
         </div>
    )
}

export default DeshboardDet;