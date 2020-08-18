import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Elcump from "./elcump";
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <Router>
            <div className="rtl">
                <Elcump/>
                <ToastContainer />
            </div>
        </Router>
    );
}

export default App;
