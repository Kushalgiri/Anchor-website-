import React from 'react';
import './footer.css';
import {FaFacebook} from 'react-icons/fa';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';

function Footer() {
    return (
        <div>
            <div className="f-bottom">
                <div className="container">
                    <div className="com-md-4 icon">
                        <ul>
                            <li>
                                <FaFacebook/>
                            </li>
                            <li>
                                <AiFillTwitterCircle/>
                            </li>
                            <li><AiFillInstagram/></li>
                            <li><AiFillLinkedin/></li>
                        </ul>

                    </div>
                    <div className="col-md-8 f-par">
                        <p>© 2021 Kushal . All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;