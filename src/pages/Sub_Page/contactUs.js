import React, {useState} from 'react';
import './contactForm.css';
import {ToastContainer,toast} from 'react-toastify';
import emailjs from 'emailjs-com';
import SubContact from "../../components/SubContact";
import Captcha from "../../components/Captcha";


function ContactUs() {
    const [errors, setErrors] = useState({});
    const [isDisabled, setIsDisabled] = useState(true);
    const [isCaptchaVerified, setIsCaptchVerified] = useState(false);

    const [data, setData] = useState({
        fullName: "",
        email: "",
        subject: "",
        phone: "",
        cname: "",
        detail: "",
    })


    const handleChange = (event) => {
        const {name, value} = event.target;
        setData((prevState) => ({
            ...prevState,
            [name]: value
        }));
        if (data.fullName !== "" && data.cname !== "" && data.email !== "" && data.detail !== "" && data.subject && data.phone !== "") {
            setIsDisabled(false);
        }
        if (name === "email") {
            (!validateEmail(data.email))?
                setErrors(prevState => ({
                    ...prevState,
                    emailError: "Please enter a valid email."
                })):
                setErrors(prevState => ({
                    ...prevState,
                    emailError: ""
                }))
            console.log(data.email)
            setIsDisabled(true);

        }

        if (name === "phone") {
            data.phone.length !== 9?
                setErrors(prevState => ({
                    ...prevState,
                    phoneError: "Phone number must be 10 digit."
                })):
                setErrors(prevState => ({
                    ...prevState,
                    phoneError: ""
                }));
            setIsDisabled(true);

        }
    }

    function validateEmail(email) {
        const emailRegex = /\S+@\S+\.\S+/
        return emailRegex.test(String(email).toLowerCase());
    }


    const handleSubmit = async event => {
        event.preventDefault();
        console.log("ADA", errors)
        if (!isDisabled) {
            setIsDisabled(true);
            await emailjs.sendForm('service_6m72jaa', 'template_44j49jl', event.target, 'user_vBZhzTkAilfAhHXMrLrY0')
                .then((result) => {
                    console.log(result.text);
                    toast.success("Email sent Successfully");
                    setIsDisabled(true);
                    event.target.reset();
                    setData({
                        fullName: "",
                        email: "",
                        subject: "",
                        phone: "",
                        cname: "",
                        detail: "",
                    })

                }, (error) => {
                    console.log(error.text);
                    toast.error("Error during sending Email");
                    setIsDisabled(false);

                });
        }
    }


    return (
        <div id="contact" className="cont-wall">
            <div className="container " style={{padding:'103px 0px'}}>
                <h1 style={{fontSize:'48px', fontWeight:'700'}}>Contact Us</h1>
                <hr/>
                <div className="row">
                    <div className="col-md-7 col-sm-12" style={{padding: "43px 70px 53px 36px"}}>
                        <SubContact/>
                    </div>
                    <div className="col-md-5 col-sm-12">
                        <form className="p-4 " onSubmit={e => handleSubmit(e)} autoComplete="off">
                            <div>
                                <label className="cform">Full Name</label>
                                <input type="text"
                                       value={data.fullName}
                                       placeholder="Enter your name"
                                       name="fullName"
                                       className="form-control"
                                       onChange={handleChange}
                                       // autoComplete="off"
                                />
                                {errors && <p className="err_msg">{errors.fullName}</p>}
                            </div>
                            <div>
                                <label className="cform">Email</label>
                                <input type="text"
                                       placeholder="Email"
                                       className="form-control"
                                       name="email"
                                       onChange={handleChange}
                                       // autocomplete="off"
                                />
                                {errors && <p className="err_msg">{errors.emailError}</p>}
                            </div>
                            <div>
                                <label className="cform">Subject</label>
                                <input type="text"
                                       value={data.subject}
                                       placeholder="Enter subject"
                                       name="subject"
                                       className="form-control"
                                       onChange={handleChange}
                                       // autocomplete="off"
                                />
                                {errors && <p className="err_msg">{errors.fullName}</p>}
                            </div>
                            <div>
                                <label className="cform">Phone Number</label>
                                <input type="number"
                                       placeholder="Phone Number"
                                       className="form-control"
                                       name="phone"
                                       value={data.phone} onChange={handleChange}
                                       // autocomplete="off"
                                />
                                {errors && <p className="err_msg">{errors.phoneError}</p>}
                            </div>
                            <div>
                                <label className="cform">Company name</label>
                                <input type="text"
                                       placeholder="Company Name"
                                       className="form-control"
                                       name="cname"
                                       value={data.cname}
                                       onChange={handleChange}
                                       // autocomplete="off"
                                />
                                {errors && <p className="err_msg">{errors.cname}</p>}
                            </div>
                            <div>
                                <label className="cform">Detail for project</label>
                                <textarea placeholder="Message"
                                          rows="3"
                                          className="form-control txt-area"
                                          name="detail"
                                          value={data.detail}
                                          onChange={handleChange}
                                          // autocomplete="off"
                                />
                                {errors && <p className="err_msg">{errors.detail}</p>}
                            </div>
                           <Captcha setCaptch={{setIsCaptchVerified}}/>

                            <button type="submit" disabled={isDisabled}  className="custom-button">Send</button>
                            {/*<CustomButton type="submit" disabled={isDisabled} padding="20"/>*/}
                        </form>
                        <ToastContainer/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ContactUs;