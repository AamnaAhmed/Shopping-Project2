import Navbar from "./Navbar"
import Footer from "./Footer"
import Completed from "./Completed"

export default function Container({ children }) {
    return (
        <>
            <Navbar />
            {/* <Completed /> */}
            {children}
            <Footer/>
        </>
    )
}