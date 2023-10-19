import Cardser from "../compo/Cardser"
import ImageSer1 from "../images/s1.png"
import ImageSer2 from "../images/s2.png"
import ImageSer3 from "../images/s3.png"



function Serv() {
    return (
       <div className="container py-20 text-center text-center">
            <div className="text">
                <p className="text-orange-500 text-sm font-bold">Services</p>
                <p className="text-slate-200 text-3xl font-bold mb-12">We provide best food Services</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <Cardser srcImage={ImageSer1} title="You Order"/>
                <Cardser srcImage={ImageSer2} title="Shopping"/>
                <Cardser srcImage={ImageSer3} title="Detivered"/>
            </div>
       </div>
    )
}

export default Serv;