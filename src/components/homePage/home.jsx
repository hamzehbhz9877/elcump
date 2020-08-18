import React from "react";
import {withRouter} from "react-router-dom"
const Home = (props) => {
    const handleStartTest = () => {
        props.history.replace("/startTest")
    };
    console.log(typeof []);
    return (
        <div className="start-test d-flex flex-column">
            <h4 className="mb-3">به سرزمین آزمون خوش آمدید</h4>
            <p>تضمین قبولی شما در آزمون</p>
            <p className="mb-3">با آموزش های  تخصصی</p>
            <button onClick={handleStartTest} type="button" className="btn btn-success mb-3">شروع آزمون</button>
        </div>
    )
};
export default withRouter(Home)