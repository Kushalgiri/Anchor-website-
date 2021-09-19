import React from "react";
import Header from "./Sub_Page/header";
import MainBody from "./Sub_Page/mainBody";
import AboutUs from "./Sub_Page/aboutus";
import Counter from "./Sub_Page/Counter";
import Footer from "./Sub_Page/footer";
import ContactUs from "./Sub_Page/contactUs";
import NavBar from "../components/Navbar/NavBar";

const DashBoard = () => {
    return(
        <div>
            <NavBar/>
            {/*<Header/>*/}
            <MainBody/>
            <AboutUs/>
            <Counter/>
            {/*<Counter/>*/}
            <ContactUs/>
            <Footer/>
        </div>
    )

}

export default DashBoard;