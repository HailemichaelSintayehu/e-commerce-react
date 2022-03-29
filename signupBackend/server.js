const express = require('express');
const cors= require('cors')
const mongoose = require('mongoose');
const authRoutes = require('./Routes/Authroute')
const app = express();
const cookieParser = require("cookie-parser");

app.use(
    cors({
    origin: "*",
    method:"*",
    credentials: true
}))
app.use(express.urlencoded());

mongoose.connect('mongodb://localhost:27017/Authentication',{
    useNewUrlparser:true,
    useUnifiedTopology:true

})
.then(()=>{
    console.log("Database connection successfull")

}).catch((err)=>{
    // console.log(err);
})
  


// const userSchema = new mongoose.Schema({
//     firstName: String,
//     lastName:String,
//     userName:String,
//     mobileNumber:Number,
//     email: String,
//     password: String
// })
// const User = new mongoose.model("User", userSchema)
// app.post("/Login",(req,res)=>{
//     const {userName,email,password} =req.body;
//     User.findone({userName:userName},(err,user)=>{
//         if(user){
//            if(password === user.password && email===user.userName){
//                res.send({message:"login sucess",user:user})
//            }else{
//                res.send({message:"wrong credentials"})
//            }
//         }else{
//             res.send("not register")
//         }
//     })
// });
// app.post("/Register",(req,res)=>{
//     console.log(req.body) 
//     const {firstName,secondName,userName,email,password} =req.body;
//     User.findOne({email:email},(err,user)=>{
//         if(user){
//             res.send({message:"user already exist"})
//         }else {
//             const user = new User({firstName,secondName,userName,email,password})
//             user.save(err=>{
//                 if(err){
//                     res.send(err)
//                 }else{
//                     res.send({message:"sucessfull"})
//                 }
//             })
//         }
//     })
// }) 
app.listen(4000,(req,res)=>{
    console.log("server 4000 is running...")
})






app.use(cookieParser());
app.use(express.json())
app.use('/',authRoutes);