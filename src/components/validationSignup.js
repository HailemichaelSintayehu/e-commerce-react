const validationSignup = (values) =>{
    let errors = {};
 
    if (!values.userName.trim()){
        errors.userName = "userName requeired";
    }
    if(!values.email){
        errors.email = "Email required";
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/.test(values.email)){
        errors.email = "Email address is invalid";
    }
    if(!values.password){
        errors.password = "password is required"
    }
    else if(values.password.length <6) {
        errors.password = "password needs to be 6 characters and more"

    }
    if(!values.confirmPassword){
        errors.confirmPassword = "password is required";
    }
    else if (values.password !==values.confirmPassword){
        errors.confirmPassword = "password don't match";
    }
    return errors;
}

export default validationSignup;