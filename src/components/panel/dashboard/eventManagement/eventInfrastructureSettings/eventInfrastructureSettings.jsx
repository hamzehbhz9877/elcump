import React from 'react';
import HeadTicketLayout from "../../../layout/headTicketLayout";
import InfrastructureForms from "./InfrastructureForms";

const EventInfrastructureSettings = () => {
    return (
        <>
            <HeadTicketLayout breadCrumb={"مدیریت تیکت/تنظیمات بخش ارزی"}/>
            <InfrastructureForms/>
        </>
    );
};

export default EventInfrastructureSettings;