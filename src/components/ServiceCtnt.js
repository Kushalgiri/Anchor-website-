import React from 'react';
import img2 from '../assets/services/drupal-development.png';

function ServiceCtnt(props) {
    return (
        <div>
            <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-12 order-1">
                    <img src={img2} alt="Drupal Devlopment"/>
                </div>
                <div className="col-md-6 col-sm-12 order-2">
                    <h2>Drupal Development</h2>
                    <p>Drupal is a recognized open-source web content management system.
                        It is a robust and secure framework that enables the development of complex and customized web applications. As a Drupal Development Company,
                        Anchor points conducts a comprehensive evaluation of the customer's business and their requirements.</p>
                </div>
            </div>

                <div className="row">
                    <div className="col-md-6 col-sm-12 order-2">
                        <h2>Drupal Development</h2>
                        <p>Drupal is a recognized open-source web content management system.
                            It is a robust and secure framework that enables the development of complex and customized web applications. As a Drupal Development Company,
                            Anchor points conducts a comprehensive evaluation of the customer's business and their requirements.</p>
                    </div>
                    <div className="col-md-4 col-sm-12 order-1">
                        <img src={img2} alt="Drupal Devlopment"/>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ServiceCtnt;