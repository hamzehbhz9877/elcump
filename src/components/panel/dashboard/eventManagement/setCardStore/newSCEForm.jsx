import React from 'react';

const NewSCEForm = () => {
    return (
        <form className="mt-5">
            <div className="mb-3 w-50">
                <label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">نوع کارت</label>
                <select className="custom-select" id="inlineFormCustomSelectPref">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="form-row newAES">
                <div className="form-group col-md-4">
                    <label htmlFor="firstName">متراژ غرفه از</label>
                    <div className="input-group">
                        <input type="text"
                               required
                               className="form-control" id="firstName" placeholder="وارد کنید"/>
                    </div>
                </div>
            </div>
            <div className="form-row newAES">
                <div className="form-group col-md-4">
                    <label htmlFor="firstName">متراژ غرفه تا</label>
                    <div className="input-group">
                        <input type="text"
                               required
                               className="form-control" id="firstName" placeholder="وارد کنید"/>
                    </div>
                </div>
            </div>
            <div className="form-row newAES">
                <div className="form-group col-md-4">
                    <label htmlFor="firstName">تعداد کارت بر متراژ</label>
                    <div className="input-group">
                        <input type="text"
                               required
                               className="form-control" id="firstName" placeholder="وارد کنید"/>
                    </div>
                </div>
            </div>
            <div className="w-100 text-center">
                <button className="btn btn-success mt-5" type="submit">ثبت و ایجاد</button>
            </div>
        </form>
    );
};

export default NewSCEForm;