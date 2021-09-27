import React from 'react';
import './main-Body.css';
import {CustomButton} from "../../components/customButton";

function MainBody() {
    return (
        <div>
        <div className="main" id="main">
            <div className="container ">
                <div className="wrapper">
                    <h2>We're Your Stragetic<br/>
                        <span>partner for digital </span><br/>
                        <span>transformation</span>
                    </h2>
                    <div className="main-btn">
                        <CustomButton  name="Show more" classname="cus-btn "/>
                    </div>

                </div>


        </div>
        </div>
        </div>
    );
}

export default MainBody;