import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Elcomp from "./elcomp";

function App() {
    return (
        <Router>
            <div className="rtl">
                <Elcomp/>
            </div>
        </Router>
    );
}

export default App;
