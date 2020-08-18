import React from 'react';
import {NavLink} from "react-router-dom";

const Sidebar = ({items}) => {
    return (
        <nav className="vz_navbar">
            <div className="navbar-wrapper">
                <div className="navbar-content scroll-div">
                    <div className="vz_navigation">
                        <ul className="sidebar nav flex-column">
                            {items.map((item, index) =>
                                <li key={index}><NavLink to={item.path} exact
                                                         className="nav-link text-center"
                                                         data-nav={item.dataNav}><i
                                    className={`feather ${item.icon}`}></i><span>{item.tap}</span></NavLink></li>
                            )}
                        </ul>
                        <div className="sidebar_content">
                            <div className="vz_sidebar_link dashboard active">
                                <ul className="nav vz_inner_nav">

                                    <li className="nav-item">
                                        <NavLink to={"/panelDashboard/eventManagement"} exact
                                                 className="nav-link"><i
                                            className="feather ft-activity mr-2"></i>مدیریت ایونت</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="vz_sidebar_link ui_features">
                                <ul className="nav vz_inner_nav">
                                    <li className="nav-item menu_title">
                                        <label>عناصر پایه</label>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="alert.html"><i
                                        className="menu_icon ti-alert"></i><span>هشدار</span></a></li>
                                    <li className="nav-item active"><a className="nav-link" href="accordion.html"><i
                                        className="menu_icon ti-layout-accordion-separated"></i><span>آکاردئون</span></a>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="buttons.html"><i
                                        className="menu_icon icon-focus"></i><span>دکمه ها</span></a></li>
                                    <li className="nav-item"><a className="nav-link" href="badges.html"><i
                                        className="menu_icon icon-ribbon"></i><span>نشان ها</span></a></li>
                                    <li className="nav-item"><a className="nav-link" href="cards.html"><i
                                        className="menu_icon ti-id-badge"></i><span>کارت ها</span></a></li>
                                    <li className="nav-item"><a className="nav-link" href="carousel.html"><i
                                        className="menu_icon ti-layout-slider"></i><span>افزونه Carousels</span></a>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="dropdown.html"><i
                                        className="menu_icon icon-layers"></i><span>کرکره ای</span></a></li>
                                    <li className="nav-item"><a className="nav-link" href="tabs.html"><i
                                        className="menu_icon ti-layout-tab"></i><span>زبانه ها</span></a></li>
                                    <li className="nav-item"><a className="nav-link" href="typography.html"><i
                                        className="menu_icon ti-smallcap"></i><span>تایپوگرافی</span></a></li>
                                    <li className="nav-item"><a className="nav-link" href="list-group.html"><i
                                        className="menu_icon ti-list"></i><span>فهرست گروه</span></a></li>
                                    <li className="nav-item"><a className="nav-link" href="modals.html"><i
                                        className="menu_icon ti-layers-alt"></i><span>مودال ها</span></a></li>
                                    <li className="nav-item"><a className="nav-link" href="pagination.html"><i
                                        className="menu_icon ion-android-more-horizontal"></i><span>صفحه بندی</span></a>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="popover.html"><i
                                        className="menu_icon ion-ios-photos"></i><span>پیشنمایش</span></a></li>
                                    <li className="nav-item"><a className="nav-link" href="progressbar.html"><i
                                        className="menu_icon ion-ios-settings-strong"></i><span>نوار پیشرفت</span></a>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="grid.html"><i
                                        className="menu_icon ti-layout-grid4"></i><span>گرید</span></a></li>
                                </ul>
                                <ul className="nav vz_inner_nav">
                                    <li className="nav-item menu_title">
                                        <label>عناصر آیکون ها</label>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="font-awesome.html"><i
                                        className="menu_icon ti-flag-alt"></i> <span>Font Awesome</span></a></li>
                                    <li className="nav-item"><a className="nav-link" href="themify.html"><i
                                        className="menu_icon ti-themify-favicon"></i><span>Themify</span></a></li>
                                    <li className="nav-item"><a className="nav-link" href="ionicons.html"><i
                                        className="menu_icon ion-ionic"></i><span>Ionicons V2</span></a></li>
                                    <li className="nav-item"><a className="nav-link" href="et-line.html"><i
                                        className="menu_icon icon-basket"></i><span>ET Line Icons</span></a></li>
                                </ul>
                            </div>
                            <div className="vz_sidebar_link advance_kit">
                                <ul className="nav vz_inner_nav">
                                    <li className="nav-item menu_title">
                                        <label>کیت پیشرفته</label>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="toastr.html"><i
                                        className="menu_icon ti-layout-cta-left"></i> <span>توستر</span></a></li>
                                    <li className="nav-item"><a className="nav-link" href="sweet-notification.html"><i
                                        className="menu_icon ti-layout-media-overlay-alt-2"></i>
                                        <span>هشدار شیرین</span></a></li>
                                    <li className="nav-item"><a className="nav-link" href="cropper.html"><i
                                        className="menu_icon ion-crop"></i> <span>برش تصویر</span></a></li>
                                    <li className="nav-item"><a className="nav-link" href="loaders.html"><i
                                        className="menu_icon ion-load-a"></i> <span>بارگذارهای سی اس اس</span></a></li>
                                    <li className="nav-item"><a className="nav-link" href="app-tour.html"><i
                                        className="menu_icon ti-flag-alt"></i> <span>راهنمای برنامه</span></a></li>
                                    <li className="nav-item"><a className="nav-link" href="ladda-button.html"><i
                                        className="menu_icon ion-load-b"></i> <span>دکمه لادا</span></a></li>
                                    <li className="nav-item"><a className="nav-link" href="dropzone.html"><i
                                        className="menu_icon ti-layout-placeholder"></i> <span>ناحیه انداختن</span></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="vz_sidebar_link forms">
                                <ul className="nav vz_inner_nav">
                                    <li className="nav-item menu_title">
                                        <label>فرم ها</label>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="form-basic.html"><i
                                        className="menu_icon ion-edit"></i><span>عناصر پایه</span></a></li>
                                    <li className="nav-item"><a className="nav-link" href="form-layouts.html"><i
                                        className="menu_icon ti-layout-grid2-thumb"></i><span>طرح های فرم</span></a>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="form-groups.html"><i
                                        className="menu_icon ion-ios-paper"></i><span>گروه های ورودی</span></a></li>
                                    <li className="nav-item"><a className="nav-link" href="form-validation.html"><i
                                        className="menu_icon ion-android-cancel"></i><span>فرم اعتبار سنجی</span></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="vz_sidebar_link maps">
                                <ul className="nav vz_inner_nav">
                                    <li className="nav-item menu_title">
                                        <label>نقشه ها</label>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="google-maps.html"><i
                                        className="menu_icon icon-map"></i><span>نقشه های گوگل</span></a></li>
                                    <li className="nav-item"><a className="nav-link" href="am-maps.html"><i
                                        className="menu_icon icon-map-pin"></i><span>نقشه های نمودار AM</span></a></li>
                                </ul>
                            </div>
                            <div className="vz_sidebar_link data">
                                <ul className="nav vz_inner_nav">
                                    <li className="nav-item menu_title">
                                        <label>جدول</label>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="basic-table.html"><i
                                        className="menu_icon ion-ios-grid-view"></i><span>جداول پایه</span></a></li>
                                    <li className="nav-item"><a className="nav-link" href="datatable.html"><i
                                        className="menu_icon ti-layout-slider-alt"></i><span>جدول داده</span></a></li>
                                    <li className="nav-item"><a className="nav-link" href="js-grid.html"><i
                                        className="menu_icon ti-view-list-alt"></i><span>جدول گرید جی اس</span></a></li>

                                    <li className="nav-item menu_title">
                                        <label>ویرایشگرها</label>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="text-editor.html"><i
                                        className="menu_icon ti-uppercase"></i><span>ویرایشگر متن</span></a></li>
                                    <li className="nav-item"><a className="nav-link" href="code-editor.html"><i
                                        className="menu_icon ion-code"></i><span>ویرایشگر کد</span></a></li>

                                    <li className="nav-item menu_title">
                                        <label>نمودارها</label>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="chart-js.html"><i
                                        className="menu_icon feather ft-bar-chart"></i><span>نمودار جی اس</span></a>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="morris-charts.html"><i
                                        className="menu_icon feather ft-bar-chart-2"></i><span>نمودار جی اس موریس</span></a>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="c3-chart.html"><i
                                        className="menu_icon feather ft-bar-chart-line"></i><span>نمودار جی اس C3</span></a>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="chartist.html"><i
                                        className="menu_icon feather ft-bar-chart-line-"></i><span>چارتیست جی اس</span></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="vz_sidebar_link pages">
                                <ul className="nav vz_inner_nav">
                                    <li className="nav-item menu_title">
                                        <label>جلسات</label>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="login.html"><i
                                        className="menu_icon feather ft-log-in"></i><span>ورود</span></a></li>
                                    <li className="nav-item"><a className="nav-link" href="register.html"><i
                                        className="menu_icon ion-person-add"></i><span>ثبت نام</span></a></li>
                                    <li className="nav-item"><a className="nav-link" href="lock.html"><i
                                        className="menu_icon ti-lock"></i><span>قفل صفحه</span></a></li>
                                    <li className="nav-item"><a className="nav-link" href="reset-password.html"><i
                                        className="menu_icon feather ft-lock"></i><span>بازیابی رمز عبور</span></a></li>
                                    <li className="nav-item"><a className="nav-link" href="forgot-password.html"><i
                                        className="menu_icon ti-bookmark-alt"></i><span>فراموشی رمز عبور</span></a></li>
                                </ul>
                                <ul className="nav vz_inner_nav">
                                    <li className="nav-item menu_title">
                                        <label>صفحات ارور</label>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="404.html"><i
                                        className="menu_icon ti-unlink"></i><span>404</span></a></li>
                                    <li className="nav-item"><a className="nav-link" href="500.html"><i
                                        className="menu_icon ti-close"></i><span>500</span></a></li>
                                    <li className="nav-item"><a className="nav-link" href="505.html"><i
                                        className="menu_icon ti-na"></i><span>505</span></a></li>

                                    <li className="nav-item menu_title">
                                        <label>سایر صفحات</label>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="blank.html"><i
                                        className="menu_icon feather ft-file"></i><span>صفحه خالی</span></a></li>
                                    <li className="nav-item"><a className="nav-link" href="invoice.html"><i
                                        className="menu_icon feather ft-paperclip"></i><span>فاکتور</span></a></li>
                                    <li className="nav-item"><a className="nav-link" href="pricing.html"><i
                                        className="menu_icon feather ft-dollar-sign"></i><span>قیمت گذاری</span></a>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="profile.html"><i
                                        className="menu_icon feather ft-user-check"></i><span>پروفایل</span></a></li>
                                    <li className="nav-item"><a className="nav-link" href="timeline.html"><i
                                        className="menu_icon feather ft-clock"></i><span>خط زمانی</span></a></li>
                                </ul>
                            </div>
                            <div className="vz_sidebar_link apps">
                                <ul className="nav vz_inner_nav">
                                    <li className="nav-item menu_title">
                                        <label>برنامه ها</label>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="full-calendar.html"><i
                                        className="menu_icon feather ft-calendar"></i><span>تقویم</span></a></li>
                                    <li className="nav-item"><a className="nav-link" href="inbox.html"
                                                                aria-expanded="true"><i
                                        className="menu_icon feather ft-mail"></i><span>ایمیل</span></a></li>
                                    <li className="nav-item"><a className="nav-link" href="gallery.html"><i
                                        className="menu_icon feather ft-image"></i><span>گالری</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;