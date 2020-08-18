import React from 'react';
import HeadTicketLayout from "../../../layout/headTicketLayout";
import Pagination from "../../../../utils/pagination";
import AdjustingExhibitionServicesEvents from "./AdjustingExhibitionServicesEvents";

const AdjustingExhibitionServices = () => {
    return (
        <>
            <HeadTicketLayout breadCrumb={"مدیریت تیکت/تنظیم محدوده متراژ غرفه جهت خدمات نمایشگاهی"}/>
            <AdjustingExhibitionServicesEvents/>
            <Pagination/>
        </>
    );
};

export default AdjustingExhibitionServices;