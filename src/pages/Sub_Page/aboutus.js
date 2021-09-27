import React from 'react';
import './aboutus.css';
import image from '../../assets/pic.jpg';
import {CustomButton} from "../../components/customButton";

function Aboutus() {
    return (
        <div style={{marginTop:'-80px',padding:'103px 0px',background:'#e0e0e0cc'}} id="about">
            <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-12 d-img">
                        <img src={image} alt="About us"/>
                </div>
                <div className="col-md-6 col-sm-12 cnt">
                    <h1 className="pt-2" style={{fontSize:'48px', fontWeight:'700'}}>About us</h1>
                    <hr/>
                    <p><strong>Anchorpoints</strong> is an energetic, fresh and vibrant team offering creative talent, industry knowledge
                        and extremely high standards. Our success is not only due to the quality of our work. It's down
                        to our attitude, our approach and the way we treat our clients.

                        We help businesses to become digital faster, focus on the right opportunity and champion a new
                        mindset.</p>
                    <p>We are a creative agency build by young, inspiring people. Each of us have a unique trait adding value to the rest of the team
                    </p>
                    <CustomButton name="Read More"/>
                </div>

            </div>
            </div>
        </div>
    );
}

export default Aboutus;