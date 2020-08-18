import React from 'react';
import {NavLink} from "react-router-dom";
import SearchHeader from "../../../../header/searchHeader";

const ManageBuildersGuaranteeEvents = () => {
    return (
        <>
            <NavLink to={"/panelDashboard/eventManagement/manageBuildersGuarantee/newAbg"}>
                <button type="button" className="btn btn-primary my-5"><p><i className="fa fa-plus mr-2"></i>اضافه کردن کارت جدید</p></button>
            </NavLink>
            <div className="d-inline-flex justify-content-between w-100 mb-2">
                <h6 className="color">کارت های ایجاد شده</h6>
                <SearchHeader/>
            </div>
            <div className="single-table">
                <div className="table-responsive">
                    <table className="table table-hover text-center">
                        <thead className="text-uppercase">
                        <tr>
                            <th scope="col">متراژ از</th>
                            <th scope="col">متراژ تا</th>
                            <th scope="col">اقدام</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">2</th>
                            <th scope="row">8</th>
                            <td>
                                <i className="ti-pencil mr-1 btn btn-success"></i>
                                <i className="ti-trash btn btn-danger"></i>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="single-table">
                <div className="table-responsive">
                    <table className="table table-hover text-center">
                        <thead className="text-uppercase">
                        <tr>
                            <th scope="col">متراژ از</th>
                            <th scope="col">متراژ تا</th>
                            <th scope="col">اقدام</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">2</th>
                            <th scope="row">8</th>
                            <td>
                                <i className="ti-pencil mr-1 btn btn-success"></i>
                                <i className="ti-trash btn btn-danger"></i>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="single-table">
                <div className="table-responsive">
                    <table className="table table-hover text-center">
                        <thead className="text-uppercase">
                        <tr>
                            <th scope="col">متراژ از</th>
                            <th scope="col">متراژ تا</th>
                            <th scope="col">اقدام</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">2</th>
                            <th scope="row">8</th>
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

export default ManageBuildersGuaranteeEvents;