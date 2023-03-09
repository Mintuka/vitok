import React from "react";
import NavBar from "../navbar/NavBar";
import SideBar from "./SideBar";

type PropsType = {
    children: React.ReactNode
}
const Baselayout = ({children}:PropsType) => {
  return (
    <div className="max-h-screen min-h-screen overflow-hidden">
        <NavBar/>
        <div className="w-full flex">
            <SideBar/>
            <div className="w-3/4 overflow-y-auto max-h-screen">
                {children}
            </div>
        </div>
    </div>
    )
};

export default Baselayout;
