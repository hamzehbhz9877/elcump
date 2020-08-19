import React from 'react';
import HeadTicketLayout from "../../../layout/headTicketLayout";
import NewSCEForm from "./newSCEForm";

const NewSCE = () => {
    return (
        <>
            <HeadTicketLayout breadCrumb={"مدیریت تیکت/تنظیم محدوده متراژ غرفه جهت خدمات نمایشگاهی/تنظیم کارت جدید"}/>
            <NewSCEForm/>
        </>
    );
};

export default NewSCE;