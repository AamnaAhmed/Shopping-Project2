import { useSelector, useDispatch } from "react-redux"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from "react-router-dom";
import { useState,useEffect } from "react"
import Button from "./Button";
import { ReactComponent as  Orders} from "../icons/calendar-days-regular.svg"
import { ReactComponent as  Users} from "../icons/user-group-solid.svg"
import { ReactComponent as  Doller} from "../icons/dollar-sign-solid.svg"
import DeshboardDet from "./DashboardDet"
import {clearstate} from "../RTK/slices/CustomSandingredients"

function DashBoard() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(clearstate())
})
  const productsslector = useSelector((state) => state.dashboardSandwichs)  
  const totelPriceFromState = useSelector((state) => state.totelde.totlePrice)
  const toteCustomOrdersFromState = useSelector((state) => state.totelde.totleCustomOrders)
  const totleprice = totelPriceFromState.reduce((acc, product) => {
    return acc += product
}, 0)
  const totelCustomOrders = toteCustomOrdersFromState.reduce((acc, product) => {
    return acc += product
}, 0)
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
    <div className="container grid gap-20 pt-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        <DeshboardDet icon={<Orders className="w-7 h-7 fill-cyan-700 "/>} code={ {ic:"", co: totelPriceFromState.length}} text={"New Order"} color={"#22d3ee"}/>
        <DeshboardDet icon={<Users className="w-7 h-7 fill-yellow-700 "/>} code={{ic:"", co: totelCustomOrders}} text={"Custom Order"} color={"#facc15"}/>
        <DeshboardDet icon={ <Doller className="w-7 h-7 fill-orange-700 "/>} code={{ic:"$", co:totleprice}} text={"Totle Sales"} color={"#fb923c"}/>
      </div>
      {productsslector.map((sand, indx) => (
        <div className="">
          <div> 
          </div>
          <div className="">
            <h1 className="text-2xl text-orange-500 mb-2">Title:<span className="text-xl ml-2 text-slate-200 mb-4">{sand.title}</span></h1>
            <p className="text-sm text-slate-200">Number Of Sales:
                {sand.amount}</p>

          </div>
          <div className="grid text-center min-h-min  mb-8">
          <Carousel responsive={responsive}>
          {sand.orders.map((order, ind) =>(
             <div style={{ minHeight: `107px` }} className="m-8 py-4 rounded-xl ">
                 <p className="text-xl text-orange-500">Dete: {order.date}</p>
                  <p className="text-xl text-orange-500">Time: {order.time}</p>
                  <p className="text-xl text-orange-500 mb-5">Number Of Sales: {sand.quantity[ind]}</p>
                   <Link to={`/orders/${indx}/${ind}`} className="bg-orange-500 text-slate-200 p-2 pr-5 pl-5 rounded-2xl hover:bg-orange-700 duration-300">Show Order</Link>
              </div>
          ))}
          </Carousel>
          </div>
        </div>
      ))}
    </div>
  )
}
export default DashBoard;
