import React from 'react';
import TicketLayout from "../layout/ticketLayout";

const Ticket = () => {
    return (
        <TicketLayout>
            <div className="info">
                <i className="ti-check-box"></i>
                <p>کل بلیط های فروخته شده</p>
                <span>45676</span>
            </div>
            <div className="info">
                <i className="ti-check-box"></i>
                <p>کل کاربران الکامپ</p>
                <span>45676</span>
            </div>
            <div className="info">
                <i className="ti-check-box"></i>
                <p>ایونت فعال</p>
                <span>45676</span></div>
            <div className="info">
                <i className="ti-check-box"></i>
                <p>کل ایونت ها</p>
                <span>45676</span>
            </div>
        </TicketLayout>
    );
};

export default Ticket;