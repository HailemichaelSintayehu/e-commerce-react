import React, { useState } from "react";

import axios from "axios";

import { Link } from "react-router-dom";

// import {useNavigate} from "react-router-dom";

import {showErrMsg,showSuccessMsg} from "../utilities/Notification/Notification";

const Login = () => {


  const [user, setUser] = useState({
    email:"",
    password: "",
    err:"",
    success:""
  });
  const {email,password,err,success} = user;


  // const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user, //spread operator
      [name]: value,err:'' ,success: '' 
    });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
 
     try {
        const res = await axios.post('http://localhost:4000/login',{email,password})

        setUser({...user,err:"",success:res.data.msg})

        localStorage.setItem('firstLogin',true) 

        window.location.href = "/products"

     } catch (error) {
       error.response.data.msg && 
       setUser({...user,err:error.response.data.msg,success:''})  
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
                <h2>Login here</h2>
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}
              </div>
            </div>
            <div className="col-md-8">
              <div className="contact-form">
                <form id="contact" action="" method="post" onSubmit={(e) =>handleSubmit(e)}>
                  <div className="row">
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
                          id="password"
                          placeholder="Your Password "
                        />
                      </fieldset>
                    </div>
                    <div className="flex items-center justify-center mt-6">
                      <a
        
                        target="_blank"
                        className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white">
                        <span className="ml-3">New Customer?<Link to = "/Register">Register!</Link></span>
                      </a>
                      </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button
                       
                          type="submit"
                          id="form-submit"
                          className="filled-button"
                        >
                          Login
                        </button>
                      </fieldset>

                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4">
              <ul className="accordion">
                <li>
                  <a>Accordion Title One</a>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed
                      voluptate nihil eumester consectetur similiqu consectetur.
                      <br></br>Lorem ipsum dolor sit amet, consectetur adipisic
                      elit. Et, consequuntur, modi mollitia corporis ipsa
                      voluptate corrupti elite.
                    </p>
                  </div>
                </li>
                <li>
                  <a>Second Title Here</a>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed
                      voluptate nihil eumester consectetur similiqu consectetur.
                      <br></br>Lorem ipsum dolor sit amet, consectetur adipisic
                      elit. Et, consequuntur, modi mollitia corporis ipsa
                      voluptate corrupti elite.
                    </p>
                  </div>
                </li>
                <li>
                  <a>Accordion Title Three</a>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed
                      voluptate nihil eumester consectetur similiqu consectetur.
                      <br></br>Lorem ipsum dolor sit amet, consectetur adipisic
                      elit. Et, consequuntur, modi mollitia corporis ipsa
                      voluptate corrupti elite.
                    </p>
                  </div>
                </li>
                <li>
                  <a>Fourth Accordion Title</a>
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed
                      voluptate nihil eumester consectetur similiqu consectetur.
                      <br></br>Lorem ipsum dolor sit amet, consectetur adipisic
                      elit. Et, consequuntur, modi mollitia corporis ipsa
                      voluptate corrupti elite.
                    </p>
                  </div>
                </li>
              </ul>
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
                  <img src="assets/images/client-01.png" alt="1" />
                </div>

                <div className="client-item">
                  <img src="assets/images/client-01.png" alt="2" />
                </div>

                <div className="client-item">
                  <img src="assets/images/client-01.png" alt="3" />
                </div>

                <div className="client-item">
                  <img src="assets/images/client-01.png" alt="4" />
                </div>

                <div className="client-item">
                  <img src="assets/images/client-01.png" alt="5" />
                </div>

                <div className="client-item">
                  <img src="assets/images/client-01.png" alt="6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
export default Login;
