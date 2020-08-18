import React from 'react';
import HeadTicketLayout from "../../../layout/headTicketLayout";
import Pagination from "../../../../utils/pagination";
import HallManagementEvents from "./HallManagementEvents";

const HallManagement = () => {
    return (
        <>
            <HeadTicketLayout breadCrumb={"مدیریت تیکت/مدیریت سالن ها"}/>
            <HallManagementEvents/>
            <Pagination/>
        </>
    );
};

export default HallManagement;