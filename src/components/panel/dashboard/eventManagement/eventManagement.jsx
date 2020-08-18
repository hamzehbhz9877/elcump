import React from 'react';
import {NavLink} from "react-router-dom";
import HeadTicketLayout from "../../layout/headTicketLayout";

const EventManagement = () => {

    return (
        <>
            <HeadTicketLayout breadCrumb={"مدیریت تیکت"}/>
            <div className="row mt-5">
                <div className="col-lg-6 stretched_card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card_title">تنظیمات زیر ساخت ایونت</h4>
                            <ul className="eventManagement">
                                <li><NavLink to={"/panelDashboard/eventManagement/packageManagement"}>مدیریت پکیج
                                    ها</NavLink></li>
                                <li><NavLink to={"/panelDashboard/eventManagement/eventInfrastructureSettings"}>تنظیمات
                                    ارزی</NavLink></li>
                                <li><NavLink to={"/panelDashboard/eventManagement/rialSectionSettings"}>تنظیمات کلی و
                                    ریالی</NavLink></li>
                                <li><NavLink to={"/panelDashboard/eventManagement/manageRegistrationDocuments"}>تنظیمات
                                    مدارک تکمیلی بعد از ثبت نام </NavLink></li>
                                <li>تنظیم تعداد کارت نسبت به متراژ غرفه</li>
                                <li><NavLink to={"/panelDashboard/eventManagement/adjustingExhibitionServices"}>تنظیم
                                    محدوده متراژ غرفه جهت خدمات نمایشگاهی</NavLink></li>
                                <li><NavLink to={"/panelDashboard/eventManagement/manageBuildersGuarantee"}> مدیریت
                                    تنظیمات میزان مبلغ تضمین غرفه سازان به نسبت متراژ غرفه</NavLink></li>
                                <li><NavLink
                                    to={"/panelDashboard/eventManagement/hallManagementEvents"}> مدیریت سالن
                                    ها</NavLink>
                                </li>
                                <li>مدیریت کاربران انگلیسی</li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className="col-lg-6 stretched_card mt-mob-4">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card_title">مدیریت ایونت</h4>
                            <ul className="eventManagement">
                                <li>گزارش وضعیت کاربران(جستجو)</li>
                                <li>بررسی فرم اولیه ثبت نام کاربران</li>
                                <li>بررسی مدارک پیش ثبت نام کاربران <span>(0 درخواست جدید)</span></li>
                                <li> مدیریت درخواست های سفارش غرفه و خدمات کاربران <span>(2 درخواست جدید)</span></li>
                                <li>بررسی درخواست های ویرایش سفارش غرفه و خدمات کاربران <span>(2 درخواست جدید)</span>
                                </li>
                                <li>مدیریت پرداخت های کاربران <span>(2 درخواست جدید)</span></li>
                                <li>مدیریت مالی کاربران (135 عضو)</li>
                                <li>مدیریت شماره غرفه و سالن کاربران</li>
                                <li>بررسی تعهد نامه های ارزی ریالی کاربران <span>(24 درخواست جدید)</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 mt-4 stretched_card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card_title">بررسی مدارک تکمیلی بعد از ثبت نام کاربران</h4>
                            <ul className="eventManagement">
                                <li> بررسی فرم حراست و فرم خدمات <span>(2 درخواست جدید)</span></li>
                                <li> بررسی اظلاعات دایرکتوری، سی دی و سایت کاربران <span>(2 درخواست جدید)</span></li>
                                <li> بررسی کارت های سینه کاربران <span>(2 درخواست جدید)</span></li>
                                <li>بررسی کارت های پارکینگ کاربران</li>
                                <li>بررسی کتیبه کاربران <span>(2 درخواست جدید)</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mt-4 stretched_card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card_title">مدیریت غرفه سازان</h4>
                            <ul className="eventManagement">
                                <li>بررسی مدارک پیش صبت نام غرفه سازان <span>(2 درخواست جدید)</span></li>
                                <li>بررسی مئارک غرفه سازی هر غرفه سازان</li>
                                <li>مدیریت پرداخت های مبالغ تضمین غرفه سازان <span>(2 درخواست جدید)</span></li>
                                <li>مدیریت مالی کاربران</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 mt-4 stretched_card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card_title">مدیریت خبرنگاران</h4>
                            <ul className="eventManagement">
                                <li>درخواست های جدید <span>(2 درخواست جدید)</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mt-4 stretched_card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card_title">مدیریت تبلیغات اپلیکیشن</h4>
                            <ul className="eventManagement">
                                <li>مدیریت و ویرایش اسپانسر ها</li>
                                <li>در خواست های ارسال پوش <span>(2 درخواست جدید)</span></li>
                                <li>درخواست تبلیغات</li>
                                <li>درخواست زیرنویس <span>(2 درخواست جدید)</span></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventManagement;