import { useState} from "react"
import ImageIngredints from "./ImageIngredints"
import {arr} from "../images/IngredintsImages"
import {arr2} from "../images/IngredintsImages"
import { mainMenu } from "../menu/Mainmenu";
import Sand1 from "../images/sand1.png";
import {useSelector,useDispatch} from "react-redux";
import {addToCart} from "../RTK/slices/GetProduct"
import Button from "./Button";
import Swal from 'sweetalert2'


function Custom() {
 const getCustomNumbers = useSelector((state) => state.totelde.totleCustomOrders)
 const [nameinput,setname] = useState(`Customer`)
 const [bun,setbun] = useState("Normal")
 const ingredients = useSelector((state) => state.sanding)
 const dispatch = useDispatch()
 const getId = mainMenu[mainMenu.length - 1].id

 const customsand = {
   id: Number(getId + 1),
   img: Sand1,
   title: nameinput,
   ingredients: [`Bun: ${bun}`,...ingredients],
   price: 15,
   type:"Custom"
 }

 const addCustomtomenu = () => {
      if (customsand.ingredients.length >= 2) {
        Swal.fire({
          title: `Are You Sure You Want To Buy Sandwitch With ${customsand.ingredients.map((ele) => ele.name)}?`,
          showCancelButton: true
      }).then((data) => {
          if (data.isConfirmed) {
            if (customsand.title == "Customer") {
              customsand.title = `Customer ${Number(getCustomNumbers.length) + 1}`
            }
            dispatch(addToCart(customsand))
            mainMenu.push(customsand)
            
          }
      })
      }
 }

    return (
    <div className="container pt-32">
        <h1 className="text-xl text-center text-orange-500 mb-8">Build Your Custom Sandwitch</h1>
        <div className="mb-5">
          <label className="text-orange-500 text-lg mr-1">Sandwitch name : </label>
            <input onChange={(e) => setname(e.target.value)} className="w-40 bg-transparent text-orange-500 p-1 border-2 rounded-lg border-orange-500" type="text"/>
        </div>
      <div>
       <label className="text-orange-500 text-lg mr-1">Bun : </label>
       <select onChange={(e) => setbun(e.target.value)} className="bg-transparent text-orange-500 p-1 border-2 rounded-lg border-orange-500" name="Normal" id="cars">
        <option value="type-1">type 1</option>
        <option value="type-2">type 2</option>
        <option value="type-3">type 3</option>
       </select>
      </div>
      <h2 className="text-sm text-center text-orange-500 mt-8">Ingredients</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-9 mt-5">
         {arr.map((ele) => (
           <ImageIngredints type="ingr" srcImage={ele.srcImage} ingredname={ele.nameImg}/> 
         ))}
      </div>
      <p className="text-xl text-center text-orange-500 mt-5 mb-8">Sauces:</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-9 mt-5">
         {arr2.map((ele) => (
           <ImageIngredints type="" srcImage={ele.srcImage} ingredname={ele.nameImg}/> 
         ))}
      </div>
      <div className="text-center mt-10">
      <Button handelBtnClick={() => addCustomtomenu()} text="Add To Cart"/>
      </div>
    </div>
    )
}

export default Custom;