import React from "react";
import Yared from "../../images/yared.jpg"
import Michael from "../../images/michael.JPG"
import Body from  "../../images/bodyyy.jpg"
import Bisrat from "../../images/bisre.jpg"
const Aboutus = () => {
    return (
        <>
        
<div className="page-heading about-heading header-text">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="text-content">
          <h4>about us</h4>
          <h2>our company</h2>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="best-features about-features">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="section-heading">
          <h2>Our Background</h2>
        </div>
      </div>
      <div className="col-md-6">
        <div className="right-image">
          <img src="assets/images/feature-image.jpg" alt=""/>
        </div>
      </div>
      <div className="col-md-6">
        <div className="left-content">
          <h4>Who we are &amp; What we do?</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br></br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis.</p>
          <ul className="social-icons">
            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
            <li><a href="#"><i className="fa fa-behance"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="team-members">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="section-heading">
          <h2>Our Team Members</h2>
        </div>
      </div>
      <div className="col-md-4">
        <div className="team-member">
          <div className="thumb-container">
            <img src={Yared}  alt=""/>
            <div className="hover-effect">
              <div className="hover-content">
                <ul className="social-icons">
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                  <li><a href="#"><i className="fa fa-behance"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="down-content">
            <h4>Yared Taddesse</h4>
            <span>CO-Founder</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="team-member">
          <div className="thumb-container">
            <img src= {Michael  } alt=""/>
            <div className="hover-effect">
              <div className="hover-content">
                <ul className="social-icons">
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                  <li><a href="#"><i className="fa fa-behance"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="down-content">
            <h4>Michael Sintayehu</h4>
            <span>Product Expert</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="team-member">
          <div className="thumb-container">
            <img src ={Bisrat} alt=""/>
            <div className="hover-effect">
              <div className="hover-content">
                <ul className="social-icons">
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                  <li><a href="#"><i className="fa fa-behance"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="down-content">
            <h4>Bisrat Negash</h4>
            <span>Chief Marketing</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="team-member">
          <div className="thumb-container">
            <img src="assets/images/team_04.jpg" alt=""/>
            <div className="hover-effect">
              <div className="hover-content">
                <ul className="social-icons">
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                  <li><a href="#"><i className="fa fa-behance"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="down-content">
            <h4>Misikir Zewdu</h4>
            <span>Product Specialist</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="team-member">
          <div className="thumb-container">
            <img src={Body} alt=""/>
            <div className="hover-effect">
              <div className="hover-content">
                <ul className="social-icons">
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                  <li><a href="#"><i className="fa fa-behance"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="down-content">
            <h4>Abraham Kinde</h4>
            <span>Product Photographer</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="team-member">
          <div className="thumb-container">
            <img src="assets/images/team_06.jpg" alt=""/>
            <div className="hover-effect">
              <div className="hover-content">
                <ul className="social-icons">
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                  <li><a href="#"><i className="fa fa-behance"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="down-content">
            <h4>Kidus Sintayehu</h4>
            <span>General Manager</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing itaque corporis nulla.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="services">
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <div className="service-item">
          <div className="icon">
            <i className="fa fa-gear"></i>
          </div>
          <div className="down-content">
            <h4>Product Management</h4>
            <p>Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat.</p>
            <a href="#" className="filled-button">Read More</a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="service-item">
          <div className="icon">
            <i className="fa fa-gear"></i>
          </div>
          <div className="down-content">
            <h4>Customer Relations</h4>
            <p>Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat.</p>
            <a href="#" className="filled-button">Details</a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="service-item">
          <div className="icon">
            <i className="fa fa-gear"></i>
          </div>
          <div className="down-content">
            <h4>Global Collection</h4>
            <p>Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque, corporis nulla at quia quaerat.</p>
            <a href="#" className="filled-button">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="find-us">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="section-heading">
          <h2>Our Location on Maps</h2>
        </div>
      </div>
      <div className="col-md-8">


        <div id="map">
         <iframe title="Google map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.6490522473337!2d38.80752501379594!3d9.004403791855378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b853a75e5441d%3A0xcdee69682c57ed1f!2sGerji(Mebrat%20Hail)%20Electric%20Power%20Station%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1646657246652!5m2!1sen!2set" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
        </div>
      </div>
      <div className="col-md-4">
        <div className="left-content">
          <h4>About our office</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisic elit. Sed voluptate nihil eumester consectetur similiqu consectetur.<br></br>Lorem ipsum dolor sit amet, consectetur adipisic elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti.</p>
          <ul className="social-icons">
            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
            <li><a href="#"><i className="fa fa-behance"></i></a></li>
          </ul>
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
          <h2>Happy Partners</h2>
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
export default Aboutus;