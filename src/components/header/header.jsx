import React from 'react';
import Logo from "../logo/logo";
import MobileMenu from "./mobileMenu";
import Profile from "./profile";
import Logout from "../logout/logout";

const Header = () => {
    return (
        <header className="vz_main_header flex-grow-1 top_nav">
            <div className="container-fluid d-flex flex-row h-100 align-items-center">
                <Logo/>
                <div className="nav_wrapper_main d-flex align-items-center justify-content-between flex-grow-1">
                        <a className="vz_mobile_menu_icon mr-3 d-md-flex d_none_sm" id="vz_mobileCollapseIcon"
                        ><span></span></a>
                        <p className="color">مدیریت نمایشگاه بین المللی الکامپ</p>
                    <ul className="navbar-nav navbar-nav-right mr-0 ml-auto">
                        <Profile/>
                        <Logout/>
                    </ul>
                    <MobileMenu/>
                </div>
            </div>
        </header>
    );
};

export default Header;