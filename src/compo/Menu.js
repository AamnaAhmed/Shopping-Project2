import { mainMenu } from "../menu/Mainmenu";
import Button from "./Button";
import {useSelector, useDispatch} from "react-redux"
import { useEffect } from "react"
import {addToCart} from "../RTK/slices/GetProduct"
import { ReactComponent as Bolt } from "../icons/bolt-lightning-solid.svg"
import { ReactComponent as  User} from "../icons/circle-user-regular.svg"
import {Link} from "react-router-dom";
// import Completed from "./Completed"
import {clearstate} from "../RTK/slices/CustomSandingredients"


function Menu() {
    const productsa = useSelector(state => state.products)
    const dispatch = useDispatch()

    const handelMenuBtnClick = (ele) => {
    //  <Completed text="red"/>
     dispatch(addToCart(ele))
    }

    useEffect(() => {
    dispatch(clearstate())
})
    return (
        <>
        <div className="container text-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-20">
            {mainMenu.map(ele1 => {
                 if (ele1.type !== "Custom") {
                   return (
                    <div onClick={() => console.log("vvvv")} className="flex relative justify-center items-center flex-col drop-shadow-2xl bg-orange-950 rounded-md pb-6" id={ele1.id}>
                <div className="w-full max-w-sm max-h-72 p-7 flex justify-center items-center">
                     <img className="w-full" src={ele1.img}/>
                    </div>
                <h1 className="text-orange-500 font-bold text-3xl">{ele1.title}</h1>
                <div className="sm:m-0 px-3 text-center max-h-40 overflow-auto">
                <spna className="text-orange-500 text-lg">ingredients:</spna>
                {ele1.ingredients.map(ele => {
                      return (
                         <p className="inline-block ml-2 text-slate-200">{ele}</p>
                         )
                })}
                <p className="text-orange-500 text-lg">Price : <span className="text-slate-200">$ {ele1.price}</span></p>
                    </div>
                     <div className="flex flex-wrap gap-3">
                         <Button handelBtnClick={() => handelMenuBtnClick(ele1)} text="Add To Cart"/>
                        <Button text="Edite"/>
                     </div>
                    </div> 
                   )
                }else {
                    return (
                        <div className="flex relative justify-center items-center flex-col drop-shadow-2xl bg-orange-950 rounded-md pb-6" id={ele1.id}>
                        <spna>
                        <User className="absolute top-7 left-7 w-7 h-7 fill-orange-500 "/> 
                        </spna>
                    <div className="w-full max-w-sm max-h-72 p-7 flex justify-center items-center">
                         <img className="w-full" src={ele1.img}/>
                        </div>
                    <h1 className="text-orange-500 font-bold text-3xl">{ele1.title}</h1>
                    <div className="mb-7 sm:m-0 px-3 text-center max-h-40 overflow-auto">
                    <spna className="text-orange-500 text-lg">ingredients:</spna>
                    {ele1.ingredients.map(ele => {
                           return (
                             <p className="inline-block ml-2 text-slate-200">{ele.name} <span className="text-orange-500 ">{ele.quantityNumber}</span></p>
                             )
                    })}
                    <p className="text-orange-500 text-lg">Price : <span className="text-slate-200">$ {ele1.price}</span></p>
                        </div>
                     <div className="flex flex-wrap gap-3">
                         <Button handelBtnClick={() => handelMenuBtnClick(ele1)} text="Add To Cart"/>
                        <Button  text="Edite"/>
                     </div>
                        </div> 
                    )
                }
            })}
            </div>
        <div>
               <div className="mb-5">
               <p className="text-2xl sm:text-4xl text-slate-200">You Want To Build Your Own Sandwitch?</p>
               <p className="text-2xl sm:text-4xl text-slate-200 inline-block mt-3">Build It Now</p>
               <Bolt className="ml-2 fill-orange-500 w-7 h-7 inline-block"/>
               </div>
               <Link to="/makesandwitch" className="bg-orange-500 text-slate-200 p-2 pr-5 pl-5 rounded-2xl mt-7 hover:bg-orange-700 duration-300">Here</Link>
           </div>   
        </div>
        </>
        
    )
}


export default Menu;