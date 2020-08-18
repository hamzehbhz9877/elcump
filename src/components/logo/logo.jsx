import React from 'react';
import logoDark from "../../images/logo-dark.svg"
import mobileLogo from "../../images/mobile-logo.svg"

const Logo = () => {
    return (
        <div className="text-center rt_nav_wrapper d-flex align-items-center">
            <a className="nav_logo rt_logo"><img src={logoDark}
                                                 alt="logo"/></a>
            <a className="nav_logo nav_logo_mob"><img src={mobileLogo}
                                                      alt="logo"/></a>
        </div>
    );
};

export default Logo;