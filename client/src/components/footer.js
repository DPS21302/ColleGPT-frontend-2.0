import React from "react";
import "./footer.css"
import { Link } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const handlesubscribe = (e) => {
    e.preventDefault();
    toast.dark("Subscribed Successfully", {
      className: "custom-toast",
    });
  };

  return (
    <>
      <div class="mithiline"></div>
      <footer class="footer-section">
        <div class="footer-cta pt-5 pl-10 w-[80%] mx-auto mr-5">
          <div class="row">
            <div class="col-xl-4 col-md-4 mb-30">
              <Link to="https://www.google.com/maps?ll=23.239329,72.638731&z=14&t=m&hl=en-US&gl=US&mapclient=embed&cid=16447216888229830794">
                <div class="single-cta items-center justify-center">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="cta-text">
                    <h4>Find us</h4>
                    <span>By your side</span>
                  </div>
                </div>
              </Link>
            </div>
            <div class="col-xl-4 col-md-4 mb-30">
              <Link to="https://chat.whatsapp.com/KKbEWaxNaxt1OI9EVtJxm9">
                <div class="single-cta">
                  <i class="fab fa-whatsapp"></i>
                  <div class="cta-text">
                    <h4>Join our Group</h4>
                    <span>Click Here</span>
                  </div>
                </div>
              </Link>
            </div>

            <div class="col-xl-4 col-md-4 mb-30">
              <Link to="mailto:collegpt@gmail.com">
                <div class="single-cta">
                  <i class="far fa-envelope-open"></i>
                  <div class="cta-text">
                    <h4>Mail us</h4>
                    <span>collegpt@gmail.com</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div class="footcon">
          <div class="fot1 fot w-[50%] justify-center items-center content-center h-[50%]">
            <p>Explore Our Educational Platform</p>
            <p class="a">
              Thank you for visiting our educational platform! Explore our
              diverse range of educational resources designed to inspire and
              empower learners of all ages. Stay connected for the latest
              updates and insights on education. Join our community of lifelong
              learners commi tted to personal and professional growth. Together,
              let's embark on a journey of discov ery and knowledge. Start your
              educational journey today with us!"
            </p>
          </div>
        </div>

        <div class="container">
          <div class="footer-content pt-5 pb-1">
            <div class="row">
              <div class="col-xl-4 col-lg-4 mb-50"></div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-30"></div>
              <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div class="footer-widget">
                  <div class="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div class="footer-text mb-25">
                    <p>
                      Don’t miss to subscribe to our new feeds, kindly provide
                      your email.
                    </p>
                  </div>
                  <div class="subscribe-form">
                    <form onSubmit={handlesubscribe}>
                      <input type="email" placeholder="Email Address" />
                      <button type="submit">
                        <i class="fab fa-telegram-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="copyright-area">
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                <div class="copyright-text">
                  <p>
                    Copyright &copy; 2023, All Right Reserved{" "}
                    <a href="#">ColleGPT</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;