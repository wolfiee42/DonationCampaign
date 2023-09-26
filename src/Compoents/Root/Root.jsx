import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/Navbar";

const Root = () => {
    return (
        <div>
            <div className="max-w-[85%] mx-auto">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;