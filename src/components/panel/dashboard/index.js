import React from "react";
import Ticket from "./ticket";
import Events from "./events";
import Pagination from "../../utils/pagination";

const panelDashboard = () => {

    return (
        <>
            <Ticket/>
            <Events/>
            <Pagination/>
        </>

    )
};
export default panelDashboard