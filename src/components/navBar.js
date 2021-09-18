import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-scroll";

function NavBar() {
    return (
        <div>
            <Navbar>
                <div className="container">
                    <Container className="row" style={{padding: '20px 0 20px 0'}}>
                        <div className="col-md-3">
                            <Navbar.Brand className="nav-color" href="#home">Anchor Points</Navbar.Brand>
                        </div>

                        <div className="col-md-9">
                            <Nav className="lst">
                                <ul className="d-flex flex-row justify-content-end" style={{marginBottom:'unset'}}>
                                    <li><Link to="main">Home</Link></li>

                                    <li><Link to="about" >About us</Link></li>

                                    <li><Link to="about">Services</Link></li>

                                    <li><Link to="about">Portfolio</Link></li>

                                    <li><Link to="about" >Blogs</Link></li>

                                    <li><Link to="contact">Contact us</Link></li>

                                </ul>
                            </Nav>
                        </div>

                    </Container>
                </div>

            </Navbar>
            {/*<Nav>*/}
            {/*    <div className="row container bar">*/}
            {/*        <div className="col-6">*/}
            {/*            Logo*/}
            {/*        </div>*/}
            {/*        <div className="col-6 item">*/}
            {/*            <ul>*/}
            {/*                <li>Home</li>*/}
            {/*                <li>Services</li>*/}
            {/*                <li>Services</li>*/}
            {/*                <li>Services</li>*/}
            {/*                <li>Services</li>*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</Nav>*/}
        </div>
    );
}

export default NavBar;