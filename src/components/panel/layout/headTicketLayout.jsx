import React from 'react';
import TicketLayout from "./ticketLayout";

const HeadTicketLayout = ({breadCrumb}) => {
    return (
        <TicketLayout>
            <div className="d-flex justify-content-center align-items-center">
                <i className="fa fa-quote-left"></i>
                <div className="pr-2 text-left">
                    <p className="color">{breadCrumb}</p>
                    <h6 className="color">نمایشگاه بین المللی الکامپ 2020 </h6>
                </div>
            </div>
            <div>
                <i className="fa fa-arrow-circle-left"></i>
            </div>
        </TicketLayout>
    );
};

export default HeadTicketLayout;