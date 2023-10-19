import Imagehome from "../images/home.png"
import Button from "./Button";
import { useState, useEffect } from "react"
import {clearstate} from "../RTK/slices/CustomSandingredients"
import {useSelector,useDispatch} from "react-redux";
import { Link } from "react-router-dom";



function Landing() {
    const dispatch = useDispatch()

    useEffect(() => {
    dispatch(clearstate())
})
    return (
        <div className="container h-screen  flex flex-col justify-center items-center sm:flex-row gap-x-12">
            <div className="text text-orange-500 mb-8 text-center sm:text-start">
                <h1 className="text-4xl sm:text-6xl mb-4">Full Website</h1>
                <p className="text-slate-200 text-lg font-bold sm:text-2xl">Foods the </p>
                <p className="text-slate-200 font-bold sm:text-2xl mb-5">most precious things</p>
                <Link to="/menu" className="bg-orange-500 text-slate-200 p-2 pr-5 pl-5 rounded-2xl hover:bg-orange-700 duration-300">Todey Menu</Link>
            </div>
            <div className="img max-w-xs md:max-w-sm lg:max-w-lg">
                <img src={Imagehome} />
            </div>
        </div>
    )
}

export default Landing;