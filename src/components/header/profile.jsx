import React from 'react';
import user from "../../images/user.jpg"
const Profile = () => {
    return (
        <li className="nav-item nav-profile dropdown">
            <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown"
               id="profileDropdown">
                            <span className="profile_sec">
                                <span className="profile_name">
                                    <span className="hi_name">سلام،</span>
                                    مهندس رجبی<i className="feather ft-chevron-down"></i>
                                </span>
                                <img src={user} alt="profile"/>
                            </span>
            </a>
            <div className="dropdown-menu dropdown-menu-right navbar-dropdown pt-2"
                 aria-labelledby="profileDropdown">
                <a className="dropdown-item">
                    <i className="ti-user text-dark mr-3"></i> پروفایل
                </a>
                <a className="dropdown-item">
                    <i className="ti-settings text-dark mr-3"></i> تنظیمات حساب
                </a>
                <a className="dropdown-item">
                    <i className="feather ft-lock text-dark mr-3"></i>
                    به روز رسانی رمز عبور
                </a>
            </div>
        </li>
    );
};

export default Profile;