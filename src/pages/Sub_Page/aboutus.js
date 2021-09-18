import React from 'react';
import './aboutus.css';
import image from '../../assets/pic.jpg';

function Aboutus() {
    return (
        <div style={{padding:'103px'}} id="about">
            <div className="container">
            <div className="row">
                <div className="col-md-6 d-img">
                        <img src={image} alt="About us"/>
                </div>
                <div className="col-6 cnt">
                    <h1 className="pt-2">About us</h1>
                    <p>Anchorpoints is an energetic, fresh and vibrant team offering creative talent, industry knowledge
                        and extremely high standards. Our success is not only due to the quality of our work. It's down
                        to our attitude, our approach and the way we treat our clients.

                        We help businesses to become digital faster, focus on the right opportunity and champion a new
                        mindset.</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Aboutus;