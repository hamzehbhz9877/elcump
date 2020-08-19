import React from 'react';
import HeadTicketLayout from "../../../layout/headTicketLayout";
import Pagination from "../../../../utils/pagination";
import SetCardStoreEvents from "./setCardStoreEvents";

const SetCardStore = () => {
    return (
        <>
            <HeadTicketLayout breadCrumb={"مدیریت تیکت/تنظیم محدوده متراژ غرفه جهت خدمات نمایشگاهی"}/>
            <SetCardStoreEvents/>
            <Pagination/>
        </>
    );
};

export default SetCardStore;