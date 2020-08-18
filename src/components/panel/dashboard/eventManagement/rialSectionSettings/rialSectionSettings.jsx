import React from 'react';
import HeadTicketLayout from "../../../layout/headTicketLayout";
import RialSectionForms from "./rialSectionForms";

const RialSectionSettings = () => {
    return (
        <>
            <HeadTicketLayout breadCrumb={"مدیریت تیکت/تنظیمات بخش ریالی نمایشگاه"}/>
            <RialSectionForms/>
        </>
    );
};

export default RialSectionSettings;