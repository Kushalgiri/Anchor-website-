import React from 'react';
import Ccounter from "../../components/Ccounter";
import './counter.css'
import {MdComputer} from 'react-icons/md';
import {BsFillPeopleFill} from 'react-icons/bs';
import {SiCoffeescript} from 'react-icons/si';
import {BiTimeFive} from 'react-icons/bi';


function Counter() {

    return (
        <div style={{background: '#171724'}}>
            {/*<h2>*/}
            {/*    <CountUp end={100} duration={5} suffix="+"/>*/}
            {/*</h2>*/}
            <div className="container ">
                <div className="cnt-main">
                    <div className="c-content">
                        <Ccounter icon={<MdComputer/>} text="Projects" end={100} duration={5} suffix="+"/>
                    </div>
                    <div className="c-content">
                        <Ccounter icon={<BsFillPeopleFill/>} text="Clients" end={40} duration={5} suffix="+"/>

                    </div>
                    <div className="c-content">
                        <Ccounter icon={<SiCoffeescript/>} text="Cup of Coffee" end={3000} duration={5} suffix="+"/>
                    </div>
                    <div className="c-content">
                        <Ccounter icon={<BiTimeFive/>} text="Hour's" end={18000} duration={5} suffix="+"/>
                    </div>
                </div>

            </div>





        </div>
    );
}

export default Counter;