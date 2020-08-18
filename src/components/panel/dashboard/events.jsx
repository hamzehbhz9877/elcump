import React from 'react';
import SearchHeader from "../../header/searchHeader";

const Events = () => {
    return (
        <>
            <button type="button" className="btn btn-primary my-5"><p><i className="fa fa-plus mr-2"></i>اضافه کردن
                ایونت جدید</p></button>
            <div className="d-inline-flex justify-content-between w-100 mb-2">
                <h6 className="color">ایونت های ایجاد شده</h6>
                <div className="d-inline-flex align-items-center">
                    <p className="color">جستجو بر اساس: </p>
                    <div className="mx-4">
                        <select className="custom-select" id="inlineFormCustomSelectPref">
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div>
                        <SearchHeader/>
                    </div>
                </div>
            </div>
            <div className="single-table ">
                <div className="table-responsive">
                    <table className="table table-hover text-center">
                        <thead className="text-uppercase">
                        <tr>
                            <th scope="col">عنوان</th>
                            <th scope="col">تاریخ ایجاد</th>
                            <th scope="col">تاریخ پایان</th>
                            <th scope="col">قیمت بلیط</th>
                            <th scope="col">اقدام</th>
                            <th scope="col">id</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>آرش</td>
                            <td>09 / 07 / 2018</td>
                            <td>120 تومان</td>
                            <td>
                                <i className="ti-pencil mr-1 btn btn-success"></i>
                                <i className="ti-trash btn btn-danger"></i>
                            </td>
                            <td>iuwe877s87123</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="single-table ">
                <div className="table-responsive">
                    <table className="table table-hover text-center">
                        <thead className="text-uppercase">
                        <tr>
                            <th scope="col">عنوان</th>
                            <th scope="col">تاریخ ایجاد</th>
                            <th scope="col">تاریخ پایان</th>
                            <th scope="col">قیمت بلیط</th>
                            <th scope="col">اقدام</th>
                            <th scope="col">id</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>آرش</td>
                            <td>09 / 07 / 2018</td>
                            <td>120 تومان</td>
                            <td>
                                <i className="ti-pencil mr-1 btn btn-success"></i>
                                <i className="ti-trash btn btn-danger"></i>
                            </td>
                            <td>iuwe877s87123</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="single-table ">
                <div className="table-responsive">
                    <table className="table table-hover text-center">
                        <thead className="text-uppercase">
                        <tr>
                            <th scope="col">عنوان</th>
                            <th scope="col">تاریخ ایجاد</th>
                            <th scope="col">تاریخ پایان</th>
                            <th scope="col">قیمت بلیط</th>
                            <th scope="col">اقدام</th>
                            <th scope="col">id</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>آرش</td>
                            <td>09 / 07 / 2018</td>
                            <td>120 تومان</td>
                            <td>
                                <i className="ti-pencil mr-1 btn btn-success"></i>
                                <i className="ti-trash btn btn-danger"></i>
                            </td>
                            <td>iuwe877s87123</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="single-table ">
                <div className="table-responsive">
                    <table className="table table-hover text-center">
                        <thead className="text-uppercase">
                        <tr>
                            <th scope="col">عنوان</th>
                            <th scope="col">تاریخ ایجاد</th>
                            <th scope="col">تاریخ پایان</th>
                            <th scope="col">قیمت بلیط</th>
                            <th scope="col">اقدام</th>
                            <th scope="col">id</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>آرش</td>
                            <td>09 / 07 / 2018</td>
                            <td>120 تومان</td>
                            <td>
                                <i className="ti-pencil mr-1 btn btn-success"></i>
                                <i className="ti-trash btn btn-danger"></i>
                            </td>
                            <td>iuwe877s87123</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Events;