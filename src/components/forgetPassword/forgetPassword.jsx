import React from 'react';
import bgImg from "../../images/bg-img.jpg";

const ForgetPassword = () => {
    return (
        <div className="lock-screen" style={{background:`url(${bgImg})`}}>
            <div className="login-form credentials-form">
                <form>
                    <div className="lock-form-head">
                        <h4>رمز عبور را فراموش کرده اید</h4>
                        <p>لطفا ایمیل خود را در زیر وارد کنید</p>
                    </div>
                    <div className="login-form-body">
                        <div className="form-gp">
                            <label htmlFor="exampleInputPassword1">ایمیل را وارد کنید</label>
                            <input type="email" id="exampleInputPassword1"/>
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

export default ForgetPassword;