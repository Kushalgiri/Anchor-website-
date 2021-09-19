import React from 'react';
import './counter-in.css';
import CountUp from "react-countup";


function Ccounter ({icon, text, end, duration, suffix}){
    return (
        <div>
            <div className="c-cnt">
                <div className="c-cnt-inner">
                    <span className="logo">{icon}</span>
                    <CountUp
                        end={end}
                        duration={duration}
                        suffix={suffix} className="count"/>
                    <h4>{text}</h4>
                </div>

            </div>
        </div>
    );
}

export default Ccounter;