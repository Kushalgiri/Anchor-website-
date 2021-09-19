import React,{useState} from 'react';
import './navbar.css';
import {Link} from "react-scroll";
import image from "../../assets/logo1.png";

function NavBar() {
    const[navBar , setNavBar] = useState(false);

    const changeBackground = () =>{
        if(window.scrollY >= 80){
            setNavBar(true);
        }else{
            setNavBar(false);
        }
    }

    window.addEventListener('scroll',changeBackground);


    return (
            <div className={navBar ? "t-nav active" : "t-nav"}>
                <div className="container">
                    <div className="row" style={{padding: '20px 0 20px 0'}}>
                        <div className="col-md-3">
                            {/*<div className="nav-color" href="#home">Anchor Points</div>*/}
                            {/*<img src={image} alt={"logo"}/>*/}
                        </div>

                        <div className="col-md-9">
                            <div className="lst">
                                <ul style={{marginBottom:'unset'}}>
                                    <li><Link to="main">Home</Link></li>

                                    <li><Link to="about" >About us</Link></li>

                                    <li><Link to="about">Services</Link></li>

                                    <li><Link to="about">Portfolio</Link></li>

                                    <li><Link to="about" >Blogs</Link></li>

                                    <li><Link to="contact">Contact us</Link></li>

                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
    );
}

export default NavBar;