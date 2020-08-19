import React from 'react';
import unnamed from "../../images/unnamed.jpg"

const Logo = () => {
    return (
        <div>
            <a className="nav_logo rt_logo"><img width={"80px"} height={"80px"} src={unnamed}
                                                 alt="logo"/></a>
        </div>
    );
};

export default Logo;