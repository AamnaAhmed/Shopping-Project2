import { useState } from "react"
import {useSelector, useDispatch} from "react-redux"
import {getingredients} from "../RTK/slices/CustomSandingredients";
import {remaoveingredients} from "../RTK/slices/CustomSandingredients";
import {quantityPlus} from "../RTK/slices/CustomSandingredients";
import {quantityMinus} from "../RTK/slices/CustomSandingredients";
import {arr2} from "../images/IngredintsImages"
// import {quantity} from "../RTK/slices/CustomSandingredients";
import { ReactComponent as  Plus} from "../icons/plus-solid.svg"
import { ReactComponent as  Minus} from "../icons/minus-solid.svg"
import { faL } from "@fortawesome/free-solid-svg-icons";

function ImageIngredints ({srcImage,ingredname,type}) {
const dispatch = useDispatch()
const [item,setitem] = useState(true);
const [quantityNum,setQuantity] = useState(1);
const obj = {
  name: "",
  quantityNumber:1
}
const obj2 = {
  name: "",
}

const handleChange = (data) => {
     if (data == {ingredname}.ingredname) 
     {
       if (item == true) 
       {
        arr2.map((ele) => {

          if (ele.nameImg == data) {
         obj2.name = data
        dispatch(getingredients(obj2))
        }

        })

        if (!obj2.name) {
         obj.name = data
        dispatch(getingredients(obj))
        }
       }else{
        obj.name = data
        dispatch(remaoveingredients(obj))
        setQuantity(1)
       }
       setitem(!item)
     }
 }

const quantityEditePlus = (data) => {
  if (data == {ingredname}.ingredname) 
  {
    if (item == false) 
    {
        setQuantity( quantityNum + 1)
       dispatch(quantityPlus({name:data}))
    }
  }
}
const quantityEditeMinus = (data) => {
  if (data == {ingredname}.ingredname) 
  {
    if (item == false) 
    {
      if (quantityNum != 1) {
        setQuantity( quantityNum - 1)
        dispatch(quantityMinus({name:data}))
      }
    }
  }
}
  return (
    <div className="flex justify-center items-center flex-col">
        <div className="sm:max-w-xs" style={{ maxWidth :"80px" }}>
           <label for={ingredname} className="text-slate-200 cursor-pointer">
           <img className="w-full" src={srcImage}/>
           </label>
        </div>
         <div className="text-center">
         <input onChange={() => handleChange({ingredname}.ingredname)} className="mr-2 cursor-pointer" id={ingredname} type="checkbox" value={ingredname}/>
        <label for={ingredname} className="text-slate-200 cursor-pointer">{ingredname}</label>
         </div>
      {
        type ? (
          <div className="flex justify-center items-center mt-3">
          <Plus onClick={() => quantityEditePlus({ingredname}.ingredname)} className="w-6 cursor-pointer  h-6 mr-2 fill-orange-500"/>
             <span className="text-lg text-orange-500">
               {quantityNum}
             </span>
             <Minus onClick={() => quantityEditeMinus({ingredname}.ingredname)} className="w-6 cursor-pointer  h-6 ml-2 fill-orange-500"/>
          </div>
        ):""
      }
      </div>
    )
}

export default ImageIngredints;