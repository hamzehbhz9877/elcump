import React from 'react';
import SearchHeader from "../../../../header/searchHeader";

const PackageEvents = () => {
    return (
        <>
            <button type="button" className="btn btn-primary my-5"><p><i className="fa fa-plus mr-2"></i>اضافه کردن پکیج جدید</p></button>
            <div className="d-inline-flex justify-content-between w-100 mb-2">
                <h6 className="color">پکیج های ایجاد شده</h6>
                    <SearchHeader/>
            </div>
            <div className="single-table">
                <div className="table-responsive">
                    <table className="table table-hover text-center">
                        <thead className="text-uppercase">
                        <tr>
                            <th scope="col">عنوان پکیج</th>
                            <th scope="col">اقدام</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">عنوان</th>
                            <td>
                                <i className="ti-pencil mr-1 btn btn-success"></i>
                                <i className="ti-trash btn btn-danger"></i>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default PackageEvents;