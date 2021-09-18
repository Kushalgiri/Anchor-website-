import React from 'react';
import {CustomButton} from "../../components/customButton";

function Quote() {
    return (
        <div className="q-main">
        <div className="container" style={{padding: '129px 0px 169px 0px'}}>
            <div className="q-ctx">
                <h3>Want us to Serve you</h3>
            </div>
            <div>
                <CustomButton name="Let us know" qcolor={"white"}/>
            </div>
        </div>
        </div>
    );
}

export default Quote;