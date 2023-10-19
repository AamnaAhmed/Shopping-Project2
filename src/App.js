// import logo from './logo.svg';
import './App.css';
import About from './compo/About';
import Gotomenu from './compo/Gotomenu';
import Landing from './compo/LandingPage';
import Menu from "./compo/Menu"
import Serv from './compo/Serv';
import Cart from './compo/Cart';
import Container from "./compo/container";
import {Routes,Route} from "react-router-dom";
import Custom from "./compo/Custom";
import DashBoard from "./compo/DashBoard";
import ShowOrders from "./compo/ShowOrders"
import Calendar from "./compo/Calendar"
import ShowOrdersCalendar from "./compo/ShowOrdersCalendar"
import NumberBadge from "./compo/EditeSandw"


function App() {
  return (
    <>

      <Container>
        <Routes>
            <Route path="/" element={
              <>
                  <Landing />
                  <About />
                  <Serv />
                  <Gotomenu />
                  </>
            }/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/makesandwitch" element={<Custom/>}/>
            <Route path="/dashboard" element={<DashBoard/>}/>
            <Route path="/calendar" element={<Calendar/>}/>
            <Route path="/orders/:sandwId/:orderId" element={<ShowOrders/>}/>
            <Route path="/calendar/:orderIndex" element={<ShowOrdersCalendar/>}/>
            <Route path="/EditeSnadwitch" element={<NumberBadge/>}/>

        </Routes>
      </Container>

    </>
  );
}

export default App;
