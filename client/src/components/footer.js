import React from "react";
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
      <footer class="footer-section">
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
                    Copyright &copy; 2024, All Right Reserved{" "}
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
