import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import {CustomButton} from "../../components/customButton";
// import Validation from "../../components/validation";
import './contactForm.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SubContact from "../../components/SubContact";


function ContactUs() {
    const [data, setData] = useState({
        fullName: "",
        email: "",
        subject:"",
        phone: "",
        cname: "",
        detail: "",
    })


    const [loading , setLoading]=useState(false);
    const [errors, setErrors] = useState({});

    const handelChange = (event) => {
        const {name, value} = event.target;
        setData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const Validation =(values)=>{

        // let error={};

        if(values.fullName === ""){
            setErrors({
                ...errors,
                fullName: "please enter "
            })
        }

        if(values.email === ""){
           setErrors({
                ...errors,
                email: "please enter "
            })

        }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)){
            setErrors({
                ...errors,
                email: "please enter "
            })
        }

        if(values.phone === ""){
            setErrors({
                ...errors,
                phone: "please enter "
            })
        }

        if(values.cname === "") {
            setErrors({
                ...errors,
                cname: "please enter "
            })
        }


        if(values.detail === ""){
            setErrors({
                ...errors,
                detail: "please enter "
            })
        }


    }



    const handelSubmit = async event => {
        console.log(data)
        event.preventDefault();
        await Validation(data);
        console.log("errors ",errors)

        if(errors && Object.keys(errors).length === 0) {
            setLoading(true);
            await emailjs.sendForm('service_6m72jaa', 'template_44j49jl', event.target, 'user_vBZhzTkAilfAhHXMrLrY0')
                .then((result) => {
                    console.log(result.text);
                    toast("Email sent Sucessfully");
                    setLoading(false);

                }, (error) => {
                    console.log(error.text);
                    toast("Error during sending Email");
                    setLoading(false);

                });
        }
        // event.target.reset();
        console.log(errors);
    }



    return (
        <div id="contact" style={{paddingTop:'103px'}}>
            <div className="container">
                <h1>Contact Us</h1>
                <div className="row qForm">
                    <div className="col-md-7" style={{padding: "43px 70px 53px 36px"}}>
                       <SubContact/>
                    </div>
                    <div className="col-md-5 ">
                        <form className="p-4" onSubmit={handelSubmit}>
                            <div>
                                <label>Full Name</label>
                                <input type="text"
                                       value={data.fullName}
                                       placeholder="Enter your name"
                                       name="fullName"
                                       className="form-control"
                                       onChange={handelChange}
                                />
                                {errors && <p className="err_msg" >{errors.fullName}</p> }
                            </div>
                            <div>
                                <label>Email</label>
                                <input type="text"
                                       placeholder="Email"
                                       className="form-control"
                                       name="email"
                                       onChange={handelChange}
                                />
                                {errors && <p className="err_msg">{errors.email}</p>}
                            </div>
                            <div>
                                <label>Subject</label>
                                <input type="text"
                                       value={data.subject}
                                       placeholder="Enter subject"
                                       name="subject"
                                       className="form-control"
                                       onChange={handelChange}
                                />
                                {errors && <p className="err_msg" >{errors.fullName}</p> }
                            </div>
                            <div>
                                <label>Phone Number</label>
                                <input type="tel"
                                       placeholder="Phone Number"
                                       className="form-control"
                                       name="phone"
                                       value={data.value} onChange={handelChange}
                                />
                                {errors && <p className="err_msg">{errors.phone}</p>}
                            </div>
                            <div>
                                <label>Company name</label>
                                <input type="text"
                                       placeholder="Company Name"
                                       className="form-control"
                                       name="cname"
                                       value={data.cname} onChange={handelChange}
                                />
                                {errors && <p className="err_msg">{errors.cname}</p>}
                            </div>
                            <div>
                                <label>Detail for project</label>
                                <textarea placeholder="Message"
                                          rows="3"
                                          className="form-control txt-area"
                                          name="detail"
                                          value={data.detail}
                                          onChange={handelChange}
                                />
                                {errors && <p className="err_msg">{errors.detail}</p> }
                            </div>
                            <button type="submit" className="bTun form" >Send</button>
                            {/*<CustomButton name="Submit" loading={loading} padding="20"/>*/}
                        </form>
                        <ToastContainer/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactUs;