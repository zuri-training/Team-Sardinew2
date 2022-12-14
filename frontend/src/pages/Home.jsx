import React from 'react';
import './home.css';
// import '../assets/images';
import { Link } from "react-router-dom";
import frame1 from "../assets/images/Frame1.png";
import frame2 from "../assets/images/Frame2.png";
import frame3 from "../assets/images/Frame3.png";
import service1 from "../assets/images/service1.png";
import service2 from "../assets/images/service2.png";
import service3 from "../assets/images/service3.png";
import testimonial from "../assets/images/testimonial.png";
import netflix from "../assets/images/Netflix.png";
import spotify from "../assets/images/Spotify.png";
import instagram from "../assets/images/Instagram-Circle.png";
import stripe from "../assets/images/Stripe.png";
import visa from "../assets/images/Visa.png";




const Home = () => {
  return (
    <div>
   

      {/* banner section */}
      <section id="banner">
        <div className="container pad">
          <div className="row banner-section">
            <div className="col"></div>
            <div className="col-md-8">
              <h1>Everything you need to manage your business: Feed back form, and other online forms</h1>
            </div>
            <div className="col"></div>
          </div>
          <div className="row banner-section">
            <div className="col"></div>
            <div className="col-md-10">
              <p className="p-banner">Create conversational and traditional forms with logo: Survey, quizes, other forms and more. Get more customers, collect feedback, analyse responses - fast and easy!</p>
            </div>
            <div className="col"></div>
          </div>
          <div className="row banner-section">
            <div className="col"></div>
            <div className="col-md-6">
              <button className="btn btn-banner signup">Get started</button>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </section>

      {/* about section */}
      <section id="about">
        <div className="container pad">
          <div className="row about-section">
            <div className="col-md-5 about">
              <h2>Features that make people love us</h2>
              <p>LOGO is a modern work management platform that brings together</p>
              <button className="btn btn-outline-success btn-learnmore" type="submit">Learn more</button>
            </div>
            <div className="col-md-7">
              <div className="row about-section">
                <div className="col-md-4 about">
                  <div className="productivity">
                    <img src={frame1} className="img-fluid img-pad" alt='...' />
                    <h4>Productivity</h4>
                    <p>LOGO is a modern work management platform that brings together</p>
                  </div>
                </div>
                <div className="col-md-4 about">
                  <img src={frame2} className="img-fluid img-pad" alt='...' />
                  <h4>Limitless Collaboration</h4>
                  <a className="explore" href="/#">explore more</a>
                </div>
                <div className="col-md-4">
                  <img src={frame3} className="img-fluid img-pad" alt='...' />
                  <h4>Track Responses</h4>
                  <a className="explore" href="/#">explore more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* how it works section */}
      <section id="services">
        <div className="container pad">
          <h2 className="title">How it Works</h2>
          <p className="title">Create your feedback form within 3 simple steps</p>
          <div className="row service-section">
            <div className="col-md-6">
              <h3>Choose a template</h3>
              <p>choose the type of template you want for your form. You can select between all the available template or even a blank one.</p>
            </div>
            <div className="col-md-6">
              <img src={service1} className="img-fluid" alt='...' />
            </div>
          </div>

          <div className="row service-section">
            <div className="col-md-6">
              <img src={service2} className="img-fluid second-img" alt='...' />
            </div>
            <div className="col-md-6">
              <h3>Fill in required information</h3>
              <p>Fill in all the necessary information for the type of form you want to generate. This can include link to a website, image of products, social media handles.</p>
            </div>
          </div>

          <div className="row service-section">
            <div className="col-md-6">
              <h3>Copy from link</h3>
              <p>Generate your form, customize it to your preferred look, download or share it with your friends on social media.</p>
            </div>
            <div className="col-md-6">
              <img src={service3} className="img-fluid" alt='...' />
            </div>
          </div>
        </div>
      </section>

      {/* icon section */}
      <section id="icon">
        <div className="container pad">
          <div className="row icon-section">
            <div className="col"></div>
            <div className="col-md-8 text-center">
              <p className="icon-text">Trusted by 3000+ Great Companies Worldwide</p>
            </div>
            <div className="col"></div>
          </div>
          <div className="row icon-section">
            <div className="col-md-12">
              <div className="social-icons">
                <img src={netflix} className="img-fluid" alt='...' />
                <img src={spotify} className="img-fluid" alt='...' />
                <img src={instagram} className="img-fluid" alt='...' />
                <img src={stripe} className="img-fluid" alt='...' />
                <img src={visa} className="img-fluid" alt='...' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* testinonials */}
      <section id="testimonial">
        <div className="container pad">
          <h2 className="title testimonial">Testimonials</h2>
          <div className="row testimonial-img testimonial-section">
            <div className="col"></div>
            <div className="col-md-10">
              <img src={testimonial} className="img-fluid" alt='...' />
            </div>
            <div className="col"></div>
          </div>


          <div className="row contact testimonial-section">
            <div className="col-md-6">
              <h3>Contact Us</h3>
              <p>To customize your own template or for any inconvenience, you can reach out.</p>
            </div>
            <div className="col-md-6">
              <div className="row testimonial-section">
                <div className="col-md-6 testimonial-section">
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="First Name" />
                  </div>
                </div>
                <div className="col-md-6 testimonial-section">
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Last Name" />
                  </div>
                </div>
              </div>
              <div className="row testimonial-section">
                <div className="col-md-6 testimonial-section">
                  <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>
                </div>
                <div className="col-md-6 testimonial-section">
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Subject" />
                  </div>
                </div>
              </div>
              <div className="row testimonial-section">
                <div className="col-md-12 testimonial-section">
                  <div className="mb-3">
                    <textarea className="form-control" name="bio" rows="6" cols="30" placeholder="Your message"></textarea>
                  </div>
                </div>
              </div>
              <div className="row testimonial-section">
                <div className="col-md-12 testimonial-section">
                  <div className="d-grid gap-2">
                    <button type="button" className="btn btn-brown signin-btn btn-lg">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <section id="footer">
        <div className="container pad">

        </div>
      </section>

    </div>
  );
}

export default Home;