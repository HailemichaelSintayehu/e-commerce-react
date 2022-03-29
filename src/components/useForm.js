import React ,{useState} from "react";
import validationSignup from "./validationSignup";

const useForm = (validationSignup) => {
    const [values,setValues] = useState({
        firstName:'',
        lastName:'',
        userName:'',
        email:'',
        mobileNumber:'',
        password:'',
        confirmPassword:''  
    })
    const [errors,setErrors] = useState({})

    const handleChange = (event) => {
        const {name,value} = event.target;
        setValues({
            ...values,
            [name]:value
        })

    };
    const handleSubmit = (event) =>{
        event.preventDefault();
        setErrors(validationSignup(values))
    }
    return {handleChange,values,handleSubmit};
};

export default useForm;