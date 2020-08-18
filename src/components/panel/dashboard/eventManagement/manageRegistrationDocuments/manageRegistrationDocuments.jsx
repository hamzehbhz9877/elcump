import React from 'react';
import HeadTicketLayout from "../../../layout/headTicketLayout";
import Pagination from "../../../../utils/pagination";
import ManageRegistrationDocumentsEvents from "./manageRegistrationDocumentsEvents";

const ManageRegistrationDocuments = () => {
    return (
        <>
            <HeadTicketLayout breadCrumb={"مدیریت تیکت/مدیریت مدارک ثبت نام"}/>
            <ManageRegistrationDocumentsEvents/>
            <Pagination/>
        </>
    );
};

export default ManageRegistrationDocuments;