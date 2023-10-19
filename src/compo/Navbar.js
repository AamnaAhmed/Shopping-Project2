import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux"

import React from "react"

function Navbar() {
    const cart = useSelector(state => state.cart)
    return (
        <>
            <div style={{zIndex: 3000}} className="container flex flex-col justify-center items-center px-4 sm:px-9 py-4 sm:!justify-between sm:!flex-row fixed top-0 right-0 left-0 bg-slate-700 ">
                <Link to="/" className="text-orange-500 text-2xl mb-2 cursor-pointer">Foods</Link>
                <ul className="text-md text-slate-200 flex items-center cursor-pointer">
                    <Link to="/" className="pr-3 lg:pr-4 hover:text-orange-500 duration-300">Home</Link>
                    <Link to="/menu" className="pr-3 lg:pr-4 hover:text-orange-500 duration-300">Menu</Link>
                    <Link to="/dashBoard" className="pr-3 lg:pr-4 hover:text-orange-500 duration-300">Dashboard</Link>
                    <Link to="/calendar" className="pr-3 lg:pr-4 hover:text-orange-500 duration-300">Calendar</Link>
                    <Link to="/cart" className="pr-3 lg:pr-4 hover:text-orange-500 duration-300">Cart-{cart.length}</Link>
                </ul>
            </div>
        </>
    )
}


export default Navbar