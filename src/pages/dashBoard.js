import React from "react";
import Header from "./Sub_Page/header";
import MainBody from "./Sub_Page/mainBody";
import AboutUs from "./Sub_Page/aboutus";
import Quote from "./Sub_Page/quote";
import Footer from "./Sub_Page/footer";
import ContactUs from "./Sub_Page/contactUs";

const DashBoard = () => {
    return(
        <div>
            <Header/>
            <MainBody/>
            <AboutUs/>
            <Quote/>
            <ContactUs/>
            <Footer/>
        </div>
    )

}

export default DashBoard;