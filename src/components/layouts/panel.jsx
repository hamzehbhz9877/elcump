import React from "react";
import {AdminSidebarItems} from "../panel/sidebar/sidebaritems";
import Sidebar from "../panel/common/sidebar";
import Header from "../header/header";


const AdminLayout = (props) => {
    return (
        <div className="vz_main_sec">
            <Header/>
            <Sidebar items={AdminSidebarItems}/>
            <div className="vz_main_container">
                <div className="vz_main_content">
                    {props.children}
                </div>
            </div>

        </div>
    )
};
export default AdminLayout