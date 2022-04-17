import React,{useState} from "react";


import axios from "axios";

import { useNavigate } from "react-router-dom";

import {showErrMsg,showSuccessMsg} from "../utilities/Notification/Notification";

import {isEmail,isEmpty,isLength,isMatch,isMobileNumber} from "../validation/Validation"


const Register = () =>{
 
    const [user, setUser] = useState(
        {
            userName:"",
            email:"",
            mobileNumber:"",
            password:"",
            confirmPassword:"",
            err:"",
            success:""

        })

        const {userName,email,mobileNumber,password,confirmPassword,err,success} = user;
        const handleChange = event =>{
            const {name,value} = event.target
            setUser({
                ...user,[name]:value
            }) 
        }
        const handleSubmit = async(e) =>{
          e.preventDefault();
          if(isEmpty(userName) && isEmpty(email) && isEmpty(password) && isEmpty(mobileNumber)){
            return setUser({...user,err:"please fill in all fields",success:''})
          }
          if(!isEmail(email)){
            return setUser({...user,err:"invalid emails",success:''})
          }
          // if(!isUserName(userName)){
          //   return setUser({...user,err:"please enter valid userName"})
          // }
          if(!isMobileNumber(mobileNumber)){
            return setUser({...user,err:"please enter a valid phonenumber",success:''})
          }
          if(!isLength(password)){
            return setUser({...user,err:"password must be at least 6 characters",success:''})
          }
          if(!  isMatch(password,confirmPassword)){
            return setUser({...user,err:"the password didnot match"})
          }
          try {

              const res = await axios.post("http://localhost:4000/register",{
                userName,email,mobileNumber,password
              })
              res.data.msg &&
              setUser({...user,err:'',success:res.data.msg})
            
          } catch (error) {
            error.response.data.message &&
            setUser({...user,err:error.response.data.message,success:""})
            
          }
  
            // if(userName && email && mobileNumber && password &&(password===confirmPassword)){
            //   axios.post("http://localhost:4000/register",user)
            //   .then(response => alert(response));
            // }   
            // else{
            //   alert("Invalid input")

            // }}
  
      
        }
  return (  
      <>
  
<div className="page-heading contact-heading header-text">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="text-content">
          <h4>contact us</h4>
          <h2>let’s get in touch</h2>
        </div>
      </div>
    </div>
  </div>
</div>



 
<div className="send-message">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="section-heading">
          <h2>Register here</h2>
          {err && showErrMsg(err)}
          {success && showSuccessMsg(success) }
        </div>
      </div>
      <div className="col-md-8">
        <div className="contact-form">
          <form  id="contact" onSubmit={(e)=>handleSubmit(e)}>
            <div className="row">
             
              <div className="col-lg-12 col-md-12 col-sm-12">
                <fieldset>
                  <input 
                    onChange={handleChange}
                    value = {userName}
                    name="userName" 
                    type="text" 
                    className="form-control" 
                    id="user_name" 
                    placeholder="User Name" 
          />
             {/* {error.userName && <span style={{color: "red"}}>Your User Name is required</span>} */}
                </fieldset>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <fieldset>
                  <input 
                    onChange={handleChange}
                    value={email}
                    name="email" 
                    type="text" 
                    className="form-control" 
                    id="email" 
                    placeholder="E-Mail Address"
                 />
            {/* {error.email && <span style={{color:"red"}}>your email is required or invalid</span>} */}
                </fieldset>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <fieldset>
                  <input 
                    onChange={handleChange}
                    value={mobileNumber}
                    name="mobileNumber" 
                    type="number" 
                    className="form-control" 
                    id="phoneNumber" 
                    placeholder="your Phone Number"
                />
            {/* {error.mobileNumber && <span style={{color:"red"}}>Your Mobile Number is required</span>} */}
                
                </fieldset>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <fieldset>
                  <input 
                    onChange={handleChange}
                    value={password}
                    name="password" 
                    type="password" 
                    className="form-control" 
                    id="password_signin" 
                    placeholder="Your password"
                  />
              {/* {error.password && <span style={{color:"red"}}>password is required"</span>} */}

                </fieldset>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <fieldset>
                  <input 
                    onChange={handleChange}
                    value={confirmPassword}
                    name="confirmPassword" 
                    type="Password" 
                    className="form-control" 
                    id="reenter_password_signin" 
                    placeholder="Reenter your password"
                 />
              {/* {error.confirmPassword && <span style={{color: "red"}}> your confirmPassword is required  </span>} */}
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <button type="submit" id="form-submit" className="filled-button" >Signin</button>
                </fieldset>
                <p>Already an acount? <a href="/login">login</a></p>
              </div>
            </div>
          </form>

        </div>
      </div>
  </div>
  </div>
</div>

<div className="happy-clients">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="section-heading">
          <h2>Our Happy Customers</h2>
        </div>
      </div>
      <div className="col-md-12">
        <div className="owl-clients owl-carousel">
          <div className="client-item">
            <img src="assets/images/client-01.png" alt="1"/>
          </div>
          
          <div className="client-item">
            <img src="assets/images/client-01.png" alt="2"/>
          </div>
          
          <div className="client-item">
            <img src="assets/images/client-01.png" alt="3"/>
          </div>
          
          <div className="client-item">
            <img src="assets/images/client-01.png" alt="4"/>
          </div>
          
          <div className="client-item">
            <img src="assets/images/client-01.png" alt="5"/>
          </div>
          
          <div className="client-item">
            <img src="assets/images/client-01.png" alt="6"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



    </>
    );
      }
export default Register;