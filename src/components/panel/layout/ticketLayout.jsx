import React from 'react';

const TicketLayout = (props) => {
    return (
        <div className="card card-icon text-center w-100">
            <div className="card-body d-flex justify-content-between align-items-center">
                {props.children}
            </div>
        </div>
    );
};

export default TicketLayout;