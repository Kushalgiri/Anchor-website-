import React from 'react';
import './main-Body.css';
import {CustomButton} from "../../components/customButton";


function MainBody() {
    return (
        <div className="main" id="main">
            <div className="container">

            <h2>We're Your Stragetic<br/>
                <span>partner for digital </span><br/>
                <span>transformation</span>
            </h2>
            <CustomButton name="Show more"/>
        </div>
        </div>
    );
}

export default MainBody;