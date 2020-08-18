import React from 'react';

const Pagination = () => {
    return (
<div className="mt-3 d-flex justify-content-center">
    <nav aria-label="...">
        <ul className="pagination pg-color-border">
            <li className="page-item">
                <a className="page-link" href="#" tabIndex="-1">
                    <span className="ti-angle-left"></span>
                </a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item active">
                <a className="page-link" href="#">2 <span className="sr-only">(فعلی)</span></a>
            </li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
                <a className="page-link" href="#">
                    <span className="ti-angle-right"></span>
                </a>
            </li>
        </ul>
    </nav>
</div>

    );
};

export default Pagination;