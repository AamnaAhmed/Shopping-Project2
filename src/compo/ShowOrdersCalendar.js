import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Carousel from 'react-multi-carousel';
import { useState } from "react";
import 'react-multi-carousel/lib/styles.css';



const ShowOrdersCalendar = () => {
    const params = useParams()
    const [price, setprice] = useState(0)
    const arrOfOrders = useSelector((state) => state.calend);
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <div className="container pt-32">
                {arrOfOrders[params.orderIndex].SandOrders.map((ele, ind) => (
                    <div className="grid ">
                        <h1 className="text-orange-500 text-2xl mb-5">{Number(ind) + 1}</h1>
                        <Carousel responsive={responsive}>
                            {ele.sandwiches.map((ele) => {
                                if (ele.type != "Custom") {
                                    return (
                                <div className="flex relative justify-center items-center flex-col mx-3 md:mx-5 lg:mx-8 h-full drop-shadow-2xl bg-orange-950 rounded-md pb-6 " id={ele.id}>
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
                                        <div className="flex relative justify-center items-center flex-col mx-3 md:mx-5 lg:mx-8 h-full drop-shadow-2xl bg-orange-950 rounded-md pb-6 " id={ele.id}>
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

                        </Carousel>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ShowOrdersCalendar