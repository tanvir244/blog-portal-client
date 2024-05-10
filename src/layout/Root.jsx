import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Root = () => {
    return (
        <div className="font-noto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;