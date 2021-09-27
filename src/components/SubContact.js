import React from 'react';
import './sub-contact.css';
import {FaFacebook} from "react-icons/fa";
import {AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle} from "react-icons/ai";

function SubContact(props) {
    return (
        <div>
            <div className="container">
                <div className="f-outer">
                        <div>
                            <h3>Head Office</h3>

                            <p>Ravibhawan, Kathmandu, Nepal<br/>
                                Contact Number: +977 984 971 3305<br/>
                                Email: contact@anchorpoints.com.np</p>

                            <br/>
                            <h3>US Location</h3>
                            <p>4312 Judge Street, Elmhurst Queens NY, 11373<br/>
                                Contact Number: +1 347 251 2699<br/>
                                Email: contact@anchorpoints.com.np</p>
                        </div>
                    <div className="icon">
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/anchorpoints"><FaFacebook/></a>
                            </li>
                            <li>
                                <a href="https://twitter.com/anchorpointsktm"><AiFillTwitterCircle/></a>

                            </li>
                            <li>
                                <a href="https://twitter.com/anchorpointsktm"><AiFillInstagram/></a></li>
                            <li>
                                <a href="https://twitter.com/anchorpointsktm"><AiFillLinkedin/></a>
                                </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubContact;