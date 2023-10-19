import FooterLinks from "./FooterLinks";
import { ReactComponent as Facebookicon } from "../icons/facebook-f.svg"
import { ReactComponent as Instagram } from "../icons/instagram.svg"
import { ReactComponent as Twitter } from "../icons/twitter.svg"
import { ReactComponent as  Youtube} from "../icons/youtube.svg"


export default function Footer() {
    return (
        <div className="container py-20 lg:flex lg:justify-center lg:items-center">
           <div className="grid grid-cols-1 w-9/12 sm:grid-cols-2 md:grid-cols-4 md:w-10/12 gap-7">
                <div>
                        <FooterLinks H5Text="Menu Links" Ultext={["Home", "About", "Menu", "Service", "Contact"]} />
                    </div>
                    <div>
                        <FooterLinks H5Text="Our Service" Ultext={["Web Design", "Web Development", "Marketing", "Product Management", "Graphic Design"]} />
                    </div>
                    <div>
                        <FooterLinks H5Text="Information" Ultext={["Abous Us", "Delivery information", "Privacy Policy", "Terms & Conditions"]} />
                    </div>
                    <div className="">
                        <div className="box relative mt-6">
                            <h5 className="text-slate-200 font-bold">Contact Us</h5>
                        </div>
                        <div className="flex mt-7">
                            <div className="bg-orange-500 hover:bg-orange-700 duration-300 cursor-pointer p-2 mr-4 rounded-3xl">
                                <Facebookicon className="w-5 h-5 fill-slate-200 " />
                            </div>
                            <div className="bg-orange-500 hover:bg-orange-700 duration-300 cursor-pointer p-2 mr-4 rounded-3xl">
                                <Instagram className="w-5 h-5 fill-slate-200" />
                            </div>
                            <div className="bg-orange-500 hover:bg-orange-700 duration-300 cursor-pointer p-2 mr-4 rounded-3xl">
                                <Twitter className="w-5 h-5 fill-slate-200" />
                            </div>
                            <div className="bg-orange-500 hover:bg-orange-700 duration-300 cursor-pointer p-2 mr-4 rounded-3xl">
                                <Youtube className="w-5 h-5 fill-slate-200" />
                            </div>
                        </div>
                    </div>
           </div>
        </div>
    )
}
 