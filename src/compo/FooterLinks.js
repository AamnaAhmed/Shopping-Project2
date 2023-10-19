import "../styles/footerLinksCss.css"

function FooterLinks({ H5Text, Ultext }) {
    return (
        <>
            <div className="box relative mt-6">
                <h5 className="text-slate-200 font-bold">{H5Text}</h5>
            </div>
            <ul className="mt-4">
                {Ultext.map((ele, index) => {
                    return (
                        <li key={index} className="text-slate-400 mb-2 hover:pl-5 w-fit duration-300 cursor-pointer">{ele}</li>
                    )
                })}
            </ul>
        </>
    )
}

export default FooterLinks;