import React from 'react';
import './services.css';
import img1 from '../../assets/services/webhositing.png';
import img2 from '../../assets/services/drupal-development.png';
import img3 from '../../assets/services/performance.png';
import img4 from '../../assets/services/output-onlinepngtools (2) (1)_2.png';
import img5 from '../../assets/services/emailHosting.png';
import img6 from '../../assets/services/EnterpriseSaas.png';
import img7 from '../../assets/services/webhositing.png';

const Services = () => {
    return (
        <div className="serv-main" id="service">
            <div className="title">
                <h2 style={{paddingBottom:'6px',fontSize:'48px', fontWeight:'700'}}>Services</h2>
            </div>
            <div className="container service-container">
                <div className=" row service-outer">
                    <div className="col-md-3 service">
                        <img src={img1} alt="web Consulting"/>
                        <h4>Web Consulting</h4>
                    </div>
                    <div className="col-md-3 service">
                        <img src={img2} alt="web Consulting"/>
                        <h4>Drupal Development</h4>
                    </div>
                    <div className="col-md-3 service">
                        <img src={img3} alt="web Consulting"/>
                        <h4>Website Performance Issues</h4>
                    </div>
                    <div className="col-md-3 service">
                        <img src={img4} alt="web Consulting"/>
                        <h4>Website Security Audit</h4>
                    </div>
                </div>

                <div className=" row service-outer">
                    <div className="col-md-3 service">
                        <img src={img4} alt="web Consulting"/>
                        <h4>Network Security</h4>
                    </div>
                    <div className="col-md-3 service">
                        <img src={img5} alt="web Consulting"/>
                        <h4>Email Hosting</h4>
                    </div>
                    <div className="col-md-3 service">
                        <img src={img6} alt="web Consulting"/>
                        <h4>Enterprise Saas Application</h4>
                    </div>
                    <div className="col-md-3 service">
                        <img src={img7} alt="web Consulting"/>
                        <h4>Web Hosting</h4>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Services;