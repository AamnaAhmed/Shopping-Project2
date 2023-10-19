import { useState,useEffect } from "react"
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux"
import { removeFromCart } from "../RTK/slices/GetProduct"
import { clearCart } from "../RTK/slices/GetProduct"
import { addOrder } from "../RTK/slices/dashboardSand";
import Swal from 'sweetalert2'
import {getTotlePrice} from "../RTK/slices/DashboardDetails"
import { AddDate } from "../RTK/slices/Calendar"
import {clearstate} from "../RTK/slices/CustomSandingredients"
import { getCustomNembers } from "../RTK/slices/DashboardDetails"


function Cart() {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(clearstate())
    })
    
    const products = useSelector(state => state.cart)
    const idNumber = Date.now() + 1
    const [numberOfCos,setNumberOfCos] = useState(0)
    const totleprice = products.reduce((acc, product) => {
        return acc += product.price * product.quantity
    }, 0)
    const deleteproduct = () => {
        dispatch(clearCart())
    }
    const deleteproductcheack = (product) => {
        Swal.fire({
            title: `Are You Sure You Want To Clear The Cart?`,
            showCancelButton: true
        }).then((data) => {
            if (data.isConfirmed) {
                deleteproduct()
            }
        })
    }
    const [date, setDate] = useState(new Date().toISOString().substr(0, 10))

    const sendOrder = (order) => {
        dispatch(addOrder(order))
        products.map((ele) => {
            if (ele.type == "Custom") {
                setNumberOfCos(numberOfCos + 1)
            }
        })
        dispatch(getCustomNembers(1))
        deleteproduct()
        dispatch(getTotlePrice(totleprice))
        dispatch(AddDate({SandDete: order.date,SandOrders:[order]}))
    }
    return (
        <div className="container py-20 p-10 lg:p-20 mt-20">
            <div className="border-2 border-orange-500 p-5 overflow-auto">
                <div className="w-full text-center">
                    <table className="text-slate-200 w-full">
                        <thead>
                            <tr>
                                <td className="px-1 sm:px-5">Product</td>
                                <td className="px-1 sm:px-5">Name</td>
                                <td className="px-1 sm:px-5">Price</td>
                                <td className="px-1 sm:px-5">Amount</td>
                                <td className="px-1 sm:px-5">Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((ele) => (
                                <tr className="mt-5">
                                    <td className="flex justify-center items-center">
                                        <div style={{ maxWidth: "70px" }}>
                                            <img className="w-full" src={ele.img} />
                                        </div>
                                    </td>
                                    <td className="text-sm sm:text-lg">{ele.title}</td>
                                    <td className="text-sm sm:text-lg">$ {ele.price * ele.quantity}
                                    </td>
                                    <td className="text-sm sm:text-lg">{ele.quantity}</td>
                                    <td className="text-sm sm:text-lg"><button onClick={() => dispatch(removeFromCart(ele))} className="bg-red-500 text-slate-200 p-2 pr-5 pl-5 rounded-2xl  hover:bg-orange-700 duration-300">Remove</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="text-orange-500 mt-5">The Total Price is $ {totleprice}</p>
                <div className="mt-5">
                    <input className="bg-orange-500 p-1 rounded-lg text-slate-200" type="date" onChange={(val) => { setDate(val.target.value) }} defaultValue={date} />
                </div>
                <Button text="Pay Now" handelBtnClick={() => {
                    sendOrder({
                        id: idNumber,
                        date: date,
                        time: new Date().toLocaleTimeString(),
                        sandwiches: products,
                        totalPrice: totleprice,
                    })
                }} />
                <button onClick={() => deleteproductcheack()} className="ml-5 bg-red-500 text-slate-200 p-2 pr-5 pl-5 rounded-2xl mt-7 hover:bg-orange-700 duration-300">Clear</button>
            </div>
        </div>
    )
}

export default Cart;