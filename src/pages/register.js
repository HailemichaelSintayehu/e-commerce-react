import React,{useState} from "react";

import { ToastContainer } from "react-bootstrap";

import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const Register = () =>{
  const navigate = useNavigate();
    const [user, setUser] = useState(
        {
            userName:"",
            email:"",
            mobileNumber:"",
            password:"",
            confirmPassword:""

        })
    const {userName,email,mobileNumber,password,confirmPassword} = user;

        const generateError = (err) =>toast.error(err,{
          position:"bottom-right"
        })


        const handleChange = event =>{
            const {name,value} = event.target
            setUser({
                ...user,[name]:value
            })
        }
        const handleSubmit = async(e) =>{
          e.preventDefault();
          try {
           
            const {data} = await axios.post("http://localhost:4000/register",{
              ...user,
            },{
              // withCredentials:true
            });
            if(data){
              if(data.errors){
                const {firstName,lastName,userName,email,mobileNumber,password} = data.errors;
                if(firstName) generateError(firstName);
                else if(lastName) generateError(lastName);
                else if(userName) generateError(userName);
                else if(email) generateError(email);
                else if(mobileNumber) generateError(mobileNumber);
                else if(password) generateError(password)

              }
              else{
                navigate("/login")

              }
            }
            console.log(data);
          }
          catch(error){
            console.log(error)
          }
          
            
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
             {/* {errors.userName && <span style={{color: "red"}}>Your User Name is required</span>} */}
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
            {/* {errors.email && <span style={{color:"red"}}>your email is required or invalid</span>} */}
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
            {/* {errors.mobileNumber && <span style={{color:"red"}}>Your Mobile Number is required</span>} */}
                
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
              {/* {errors.password && <span style={{color:"red"}}>password is required"</span>} */}

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
              {/* {errors.confirmPassword && <span style={{color: "red"}}> your confirmPassword is required  </span>} */}
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <button type="submit" id="form-submit" className="filled-button" >Signin</button>
                </fieldset>
              </div>
            </div>
          </form>
          <ToastContainer/>
        </div>
      </div>
  </div>
  </div>
</div>
{/* <span class="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
        Already have an account ?
        <a href="#" target="_blank" class="text-sm text-blue-500 underline hover:text-blue-700">
            Sign in
        </a>
</span> */}
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

<ToastContainer/>



    </>
    );
      }
export default Register;