import React from "react";
import bgReg from "../../images/bg-reg.jpg"
import registerLogo from "../../images/logo-login.svg"

const Register = () => {


    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <form className="login100-form validate-form">
                        <div className="login-form-body text-center p-4">
                            <img src={registerLogo} className="mb-5" alt="Logo"/>
                                <div className="form-gp">
                                    <label htmlFor="exampleInputName1">نام کامل</label>
                                    <input type="text" id="exampleInputName1"/>
                                        <i className="ti-user"></i>
                                </div>
                                <div className="form-gp">
                                    <label htmlFor="exampleInputEmail1">آدرس ایمیل</label>
                                    <input type="email" id="exampleInputEmail1"/>
                                        <i className="ti-email"></i>
                                </div>
                                <div className="form-gp">
                                    <label htmlFor="exampleInputPassword1">رمزعبور</label>
                                    <input type="password" id="exampleInputPassword1"/>
                                        <i className="ti-lock"></i>
                                </div>
                                <div className="form-gp">
                                    <label htmlFor="exampleInputPassword2">تایید رمز عبور</label>
                                    <input type="password" id="exampleInputPassword2"/>
                                        <i className="ti-lock"></i>
                                </div>
                                <div className="row mb-4 rmber-area">
                                    <div className="col-6">
                                        <div className="custom-control custom-checkbox primary-checkbox mr-sm-2">
                                            <input type="checkbox" className="custom-control-input"
                                                   id="customControlAutosizing"/>
                                                <label className="custom-control-label"
                                                       htmlFor="customControlAutosizing">مرا به خاطر بسپار</label>
                                        </div>
                                    </div>
                                    <div className="col-6 text-right">
                                        <a href="#" className="text-primary">رمز عبور را فراموش کردید؟</a>
                                    </div>
                                </div>
                                <div className="submit-btn-area">
                                    <button id="form_submit" type="submit" className="btn btn-primary">تایید <i
                                        className="ti-arrow-right"></i></button>
                                </div>
                                <div className="form-footer text-center mt-5">
                                    <p className="text-muted">حساب کاربری ندارید؟ <a href="login.html"
                                                                                     className="text-primary">ثبت
                                        نام</a></p>
                                </div>
                        </div>

                    </form>
                    <div className="login100-more" style={{backgroundImage: `url(${bgReg})`}}>
                    </div>
                </div>
            </div>
        </div>
)

};
export default Register;