const Validation =(values)=>{

    let errors={};

    if(values.fullName === ""){
        errors.fullName="Please enter your full name"
    }

    if(values.email === ""){
        errors.email="Email is required"

    }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)){
        errors.email="Please enter a valid email"
    }

    if(values.phone === ""){
        errors.phone="Enter your phone number";
    }

    if(values.cname === "") {
        errors.cname="Please enter your company's name"
    }


    if(values.detail === ""){
        errors.detail="Please enter details for your queries";
    }

    return errors;

}

export default Validation;