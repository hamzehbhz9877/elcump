import React from 'react';
import HeadTicketLayout from "../../../layout/headTicketLayout";
import Pagination from "../../../../utils/pagination";
import ManageBuildersGuaranteeEvents from "./manageBuildersGuaranteeEvents";

const ManageBuildersGuarantee = () => {
    return (
        <>
            <HeadTicketLayout breadCrumb={"مدیریت تیکت/مدیریت تنظیمات میزان مبلغ تضمین غرفه سازان به نسبت متراژ غرفه"}/>
            <ManageBuildersGuaranteeEvents/>
            <Pagination/>
        </>
    );
};

export default ManageBuildersGuarantee;