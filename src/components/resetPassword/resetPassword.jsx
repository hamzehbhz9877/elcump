import React from 'react';
import bgImg from "../../images/bg-img.jpg"

const ResetPassword = () => {
    return (
        <div className="lock-screen" style={{background:`url(${bgImg})`}}>
            <div className="login-form credentials-form">
                <form>
                    <div className="lock-form-head">
                        <h4>بازیابی رمز عبور</h4>
                        <p>لطفا رمز عبور را بازیابی کنید</p>
                    </div>
                    <div className="login-form-body">
                        <div className="form-gp">
                            <label htmlFor="exampleInputPassword1">رمزعبور قدیمی</label>
                            <input type="password" id="exampleInputPassword1"/>
                                <i className="ti-lock"></i>
                        </div>
                        <div className="form-gp">
                            <label htmlFor="exampleInputPassword2">بازیابی رمز عبور</label>
                            <input type="password" id="exampleInputPassword2"/>
                                <i className="ti-lock"></i>
                        </div>
                        <div className="submit-btn-area">
                            <button id="form_submit" type="submit" className="btn btn-primary">تایید <i
                                className="ti-arrow-right"></i></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;