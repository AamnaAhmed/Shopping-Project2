import imageAbout from "../images/about.png";
import Button from "./Button";

function About() {
    return (
        <div className="container flex justify-center items-center flex-col-reverse sm:flex-row gap-x-12 pb-20">
            <div className="img max-w-xs md:max-w-sm lg:max-w-lg ">
                <img src={imageAbout} />
            </div>
            <div className="textAbout text-center mb-9 max-w-xs lg:max-w-sm  md:text-start">
                <p className="text-orange-500 font-bold text-sm">About Us</p>
                <h1 className="text-2xl text-slate-200 font-bold pr-4 pl-4 md:p-0">We speak the good food language</h1>
                <p className="text-slate-200 mt-4"> There is many things There is many things There is many things There is many things There is many things There is many things There is many things </p>
                <Button text="Learn More"/>
            </div>
        </div>
    )
}

export default About;