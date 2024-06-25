import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="text-center text-lg-start">
        <div className="container-fluid text-center text-md-start pt-5">
          <div className="row mt-3">
            <div className="col-md-7 col-lg-3 col-xl-3 mb-4 pe-lg-5">
              <img
                src={require("./images/logo.png")}
                className="logo"
                alt="footer-logo"
              ></img>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.Here you can use rows and columns to organize your footer
                content
              </p>
            </div>
            <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4 ps-lg-5">
              <h6 className="text-uppercase fw-bold mb-4">Products </h6>
              <p>
                <a href="/" className="text-reset" data-value="home-Link">
                  Consumer
                </a>
              </p>
              <p>
                <a href="/" className="text-reset" data-value="home-Link">
                  Professional
                </a>
              </p>
              <p>
                <a href="/" className="text-reset" data-value="home-Link">
                  Enterprise
                </a>
              </p>
              <p>
                <a href="/" className="text-reset" data-value="home-Link">
                  Components
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Where to Buy</h6>
              <p>
                <a href="/" className="text-reset" data-value="home-Link">
                  Flagship Stores
                </a>
              </p>
              <p>
                <a href="/" className="text-reset" data-value="home-Link">
                  Retail Stores
                </a>
              </p>
              <p>
                <a href="/" className="text-reset" data-value="home-Link">
                  Enterprise Retailers
                </a>
              </p>
              <p>
                <a href="/" className="text-reset" data-value="home-Link">
                  Become a Dealer
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Get to Know Us</h6>
              <p>
                <a href="/" className="text-reset" data-value="home-Link">
                  About Us
                </a>
              </p>
              <p>
                <a href="/" className="text-reset" data-value="home-Link">
                  Careers
                </a>
              </p>
              <p>
                <a href="/" className="text-reset" data-value="home-Link">
                  Press Releases
                </a>
              </p>
              <p>
                <a href="/" className="text-reset" data-value="home-Link">
                  Amazon Science
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-2 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> New York, NY, USA
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>revanth2899@gmail.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i>+91 8056812955
              </p>
              <p>
                <i className="fas fa-print me-3"></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="d-flex justify-content-center justify-content-lg-between border-bottom pb-4 align-items-center">
            <div>
              <p>Sign up for get all the latest offers & updates</p>
              <input
                type="text"
                placeholder="Your email address"
                className="emailinput"
              ></input>
              <span>
                <button type="button" className="btn" id="signinbtn">
                  Sign In
                </button>
              </span>
            </div>
            <div>
              <img
                src={require("./images/creditcard.png")}
                className="img-fluid"
                id="creditcard" alt="creditcard"
              ></img>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="d-flex justify-content-center justify-content-lg-between pt-3 pb-1">
            <div className="me-5 d-none d-lg-block">
              <p>copyrights © 2024 || All Rights Reserved</p>
            </div>
            <div className="social-icon">
              <a href="/" className="me-4 text-reset" data-value="home-Link">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/" className="me-4 text-reset" data-value="home-Link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/" className="me-4 text-reset" data-value="home-Link">
                <i className="fab fa-google"></i>
              </a>
              <a href="/" className="me-4 text-reset" data-value="home-Link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/" className="me-4 text-reset" data-value="home-Link">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
