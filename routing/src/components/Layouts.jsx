import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";


function Layouts(){
    return <div>
        <Header/>
        <div style={{height:"700px",border:"1px solid"}}>
            <Outlet/>
        </div>
        <Footer/>
    </div>
}


export default Layouts;
