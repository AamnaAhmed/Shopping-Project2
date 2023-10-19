function Cardsir({ srcImage, title }) {
    return (
        <div className="flex justify-center text-center items-center flex-col p-12 mb-5">
            <div style={{ maxWidth :"80px" }} className="mb-1">
                <img src={srcImage} />
            </div>
            <h5 className="text-orange-500 mb-4">{title}</h5>
            <p className="text-slate-200">text for Services text for Services text for Services text for Services text for Services text for Services text for Services </p>
        </div>
    )
}


export default Cardsir;