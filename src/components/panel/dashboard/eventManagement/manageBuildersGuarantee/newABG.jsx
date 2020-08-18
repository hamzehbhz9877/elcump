import React from 'react';
import HeadTicketLayout from "../../../layout/headTicketLayout";
import NewABGForm from "./newABGForm";

const NewAbg = () => {
    return (
        <>
            <HeadTicketLayout breadCrumb={"مدیریت تیکت/مدیریت تنظیمات میزان مبلغ تضمین غرفه سازان به نسبت متراژ غرفه/تنظیم جدید"}/>
            <NewABGForm/>
        </>
    );
};

export default NewAbg;