import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Elcomp from "./elcump";
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <Router>
            <div className="rtl">
                <Elcomp/>
                <ToastContainer />
            </div>
        </Router>
    );
}

export default App;
