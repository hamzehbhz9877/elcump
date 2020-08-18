import React from 'react';
import HeadTicketLayout from "../../../layout/headTicketLayout";
import NewHmeForm from "./newHMEForm";

const NewHme = () => {
    return (
        <>
            <HeadTicketLayout breadCrumb={"مدیریت تیکت/مدیریت سالن ها/ایجاد سالن جدید"}/>
            <NewHmeForm/>
        </>
    );
};

export default NewHme;