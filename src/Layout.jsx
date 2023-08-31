import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";


export default function Layout() {
    return (
        <div>
            <SideBar/>
            <Navbar />
            <Outlet />
        </div>
    )
}