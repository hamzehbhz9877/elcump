import React from 'react';
import HeadTicketLayout from "../../../layout/headTicketLayout";
import PackageEvents from "./packageEvents";
import Pagination from "../../../../utils/pagination";

const PackageManagement = () => {
    return (
        <>
            <HeadTicketLayout breadCrumb={"مدیریت تیکت/مدیریت پکیج"}/>
            <PackageEvents/>
            <Pagination/>
        </>
    );
};

export default PackageManagement;