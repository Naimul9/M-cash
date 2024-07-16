import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Main = () => {
    return (
        <div className="container mx-auto ">
            <Navbar/>
           <div className="bg-rose-500 min-h-screen ">
           <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Main;