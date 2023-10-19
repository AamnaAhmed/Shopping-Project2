import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react"
import { ReactComponent as User } from "../icons/circle-user-regular.svg"
import { Link } from "react-router-dom";
import { ReactComponent as LeftArrow } from "../icons/arrow-left-solid.svg"

function ShowOrders() {
    const params = useParams()
    const productsslector = useSelector((state) => state.dashboardSandwichs)
    const [price, setprice] = useState(0)
    return (
        <>
            <div className="container flex flex-col-reverse flex-col pt-32">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {productsslector[params.sandwId].orders[params.orderId].sandwiches.map(ele => {
                        if (ele.type != "Custom") {
                            return (
                        <div className="flex relative justify-center items-center flex-col drop-shadow-2xl bg-orange-950 rounded-md pb-6" id={ele.id}>
                            <div className="w-full max-w-sm max-h-72 p-7 flex justify-center items-center">
                                <img className="w-full" src={ele.img} />
                            </div>
                            <h1 className="text-orange-500 font-bold text-3xl">{ele.title}</h1>
                            <div className="mb-7 sm:m-0 px-3 text-center max-h-40 overflow-auto">
                                <spna className="text-orange-500 text-lg">ingredients:</spna>
                                {ele.ingredients.map(ele => {
                                    return (
                                        <p className="inline-block ml-2 text-slate-200">{ele}</p>
                                    )
                                })}
                                <p className="text-orange-500 text-lg">Price : {setprice} <span className="text-slate-200">$ {ele.price}</span></p>
                            </div>
                        </div>
                            )
                        }else {
                            return (
                                <div className="flex relative justify-center items-center flex-col drop-shadow-2xl bg-orange-950 rounded-md pb-6" id={ele.id}>
                                <div className="w-full max-w-sm max-h-72 p-7 flex justify-center items-center">
                                    <img className="w-full" src={ele.img} />
                                </div>
                                <h1 className="text-orange-500 font-bold text-3xl">{ele.title}</h1>
                                <div className="mb-7 sm:m-0 px-3 text-center max-h-40 overflow-auto">
                                    <spna className="text-orange-500 text-lg">ingredients:</spna>
                                    {ele.ingredients.map(elep => {
                                        return (
                                            <p className="inline-block ml-2 text-slate-200">{elep.name} <span className="text-orange-500 ">{elep.quantityNumber}</span></p>
                                        )
                                    })}
                                    <p className="text-orange-500 text-lg">Price : {setprice} <span className="text-slate-200">$ {ele.price}</span></p>
                                </div>
                            </div>
                            )
                        }
                    })}
                </div>
                <div className="text-slate-200 gap-13 flex w-fit pb-10">
                    <div className="flex">
                        <User className="w-7 h-7 fill-orange-500 " />
                        <span className="ml-2">Customer</span>
                    </div>
                    <div className="flex ml-9">
                        <spna>Totle Price: </spna>
                        <p className="text-lg text-orange-500 ml-2"> {productsslector[params.sandwId].orders[params.orderId].totalPrice}</p>
                    </div>
                </div>
                <Link to="/dashboard" className="w-9 h-9 p-2 bg-orange-500 fill-slate-700 mb-20"><div className="">
                    <LeftArrow />
                </div></Link>
            </div>
        </>
    )
}


export default ShowOrders;