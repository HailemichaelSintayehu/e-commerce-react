const userModel = require('../Models/UserModel')
const jwt = require('jsonwebtoken')

const maxAge = 2*24*60*60;

const createToken = (id) =>{
    return jwt.sign({id},"takeme1n",{
        expiresIn:maxAge
    })
}
const handleErrors  = (err)=>{
    let errors = {userName:"",email:"",mobileNumber:"",password:""}
    if(err.message === "Incorrect email"){
        errors.email = "That email is not registered"
    }
    if(err.message ==="Incorrect Password"){
        errors.password = "That password is incorrect";
    }
    if(err.code===11000){
        errors.email ="Email is already registered";
    }
    if(err.message.includes("Users Validation failed")){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path] = properties.message
        })
    }
    return errors;
}
module.exports.register = async(req,res,next) =>{
    try{
        const {userName,email,mobileNumber,password} = req.body;

        const user = await userModel.create({userName,email,mobileNumber,password});

        const token = createToken(user._id);

        res.cookie("jwt",token,{
            withCredentials:true,
            httpOnly:false,
            maxAge:maxAge*1000
        })

        res.status(201).json({use:user._id,created:true})

        
    }
    catch(error){
        console.log(error);
        const errors = handleErrors(error);
        res.json({errors,created:false})
    }

}
module.exports.login = async(req,res,next) =>{
    try{
        const {userName,email,mobileNumber,password} = req.body;

        const user = await userModel.login({userName,email,mobileNumber,password});

        const token = createToken(user._id);

        res.cookie("jwt",token,{
            withCredentials:true,
            httpOnly:false,
            maxAge:maxAge*1000
        })

        res.status(200).json({use:user._id,created:true})

        
    }
    catch(error){
        console.log(error);
        const errors = handleErrors(error);
        res.json({errors,created:false})
    }

}

   