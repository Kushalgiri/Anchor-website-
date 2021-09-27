import React, {useState} from 'react';
import Ccounter from "../../components/Ccounter";
import './counter.css'
import {MdComputer} from 'react-icons/md';
import {BsFillPeopleFill} from 'react-icons/bs';
import {SiCoffeescript} from 'react-icons/si';
import {BiTimeFive} from 'react-icons/bi';


function Counter() {

    const [start , setStart]= useState(false);

    window.addEventListener("scroll", function(event) {
        const top = this.scrollY
        if(top >= 800){
            setStart(true);
        }else{
            setStart(false);
        }
    }, false);



    return (
        <div style={{background: '#171724'}}>
            <div className="container ">
                <div className="cnt-main">
                    <div className="c-content">
                        <Ccounter icon={<MdComputer/>} text="Projects" end={start ?100: 0} duration={7} suffix="+"/>
                    </div>
                    <div className="c-content">
                        <Ccounter icon={<BsFillPeopleFill/>} text="Clients" end={start ? 40:0} duration={7} suffix="+"/>

                    </div>
                    <div className="c-content">
                        <Ccounter icon={<SiCoffeescript/>} text="Cup of Coffee" end={start ?3000:0} duration={7} suffix="+"/>
                    </div>
                    <div className="c-content">
                        <Ccounter icon={<BiTimeFive/>} text="Hour's" end={start ?18000:0 } duration={7} suffix="+"/>
                    </div>
                </div>

            </div>





        </div>
    );
}

export default Counter;