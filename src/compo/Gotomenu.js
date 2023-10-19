import Button from "./Button"
import { Link } from "react-router-dom";

function Gotomenu () {
    return (
       <div className="container py-15 text-center">
          <div className="bg-red-200 p-14 sm:mx-10 rounded-lg lg:mx-20">
                <p className="text-2xl font-bold mb-2">We Make Testy Food</p>
                <p className="text-2xl font-bold mb-6">Everyday</p>
                <Link to="/menu" className="bg-orange-500 text-slate-200 p-2 pr-5 pl-5 rounded-2xl hover:bg-orange-700 duration-300">Here</Link>
          </div>
       </div>
    )
}

export default Gotomenu;