import React from 'react';
import HeadTicketLayout from "../../../layout/headTicketLayout";
import NewAesForm from "./newAESForm";

const NewAes = () => {
    return (
        <>
            <HeadTicketLayout breadCrumb={"مدیریت تیکت/تنظیم محدوده متراژ غرفه جهت خدمات نمایشگاهی/تنظیم کارت جدید"}/>
            <NewAesForm/>
        </>
    );
};

export default NewAes;