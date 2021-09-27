import React,{useState} from 'react';
import './navbar.css';
import {Link} from "react-scroll";
import image from "../assets/logo1.png";
import {GiHamburgerMenu} from "react-icons/gi";

function NavBar() {
    const[navBar , setNavBar] = useState(false);
    const[showLink , setShowLink] =useState(false);

    const changeBackground = () =>{
        if(window.scrollY >= 80){
            setNavBar(true);
        }else{
            setNavBar(false);
        }
    }

    window.addEventListener('scroll',changeBackground);


    return (

            <div className={navBar ? "t-nav active" : "t-nav"} style={{paddingTop:'5px'}} >
        <div>
                <div className="container">
                    <div className="row">

                        <div className="col-md-4 col-sm-9 col-lg-3 col-10 navbar-brand">
                            <Link to="main"><img src={image} alt={"logo"} /></Link>
                        </div>
                        <div className="col-md-8 col-sm-3 col-lg-9 col-2" style={{padding: '20px 19px'}}>

                            <div className="rightSide">
                                <button onClick={() => setShowLink(!showLink)}><GiHamburgerMenu/></button>
                                <div className="rightBtn">
                                    <div className="lst" id={showLink ? "hidden" :""}>
                                <ul>
                                    {/*className="active"*/}
                                    <li><Link to="main">Home</Link></li>

                                    <li><Link to="about" >About us</Link></li>

                                    <li><Link to="service">Services</Link></li>

                                    {/*<li><Link to="about">Portfolio</Link></li>*/}

                                    {/*<li><Link to="about" >Blogs</Link></li>*/}

                                    <li><Link to="contact">Contact us</Link></li>

                                </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                </div>

            </div>
    );
}

export default NavBar;