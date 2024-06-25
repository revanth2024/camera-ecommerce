import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { PiMoneyWavyFill } from "react-icons/pi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { AiFillSafetyCertificate } from "react-icons/ai";
import "./App.css";

export const Home = () => {
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div
              className="row align-items-center bannercarousel-one"
              id="bannercarousel"
            >
              <div
                className="col-lg-5 col-md-10 col-sm-11 text-start mx-auto"
                data-aos="fade-right"
                style={{ padding: "0px 10px" }}
              >
                <h1>Capture Your Beautiful Moments</h1>
                <p className="bannercontent">
                  EVO Gimbals has partnered with Clyde to offer top-rated
                  product protection coverage. This collaboration ensures
                  excellent extended warranty options and a superior customer
                  experience.
                </p>
                <a href="/products">
                  <button type="button" className="btn">
                    Order Now
                  </button>
                </a>
              </div>
              <div
                className="col-lg-5 col-md-6 text-start"
                data-aos="fade-left"
              ></div>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="row align-items-center bannercarousel-two"
              id="bannercarousel"
            >
              <div className="col-lg-5 col-md-10 col-sm-11 text-start mx-auto">
                <h1>Video buying guide for cameras lenses and accessories</h1>
                <p className="bannercontent">
                  Discover the best camera for your needs: top-quality, high
                  resolution, advanced features, user-friendly, and exceptional
                  performance.
                </p>
                <a href="/products">
                  <button type="button" className="btn">
                    Order Now
                  </button>
                </a>
              </div>
              <div className="col-lg-5 col-md-6 text-start"></div>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="row align-items-center bannercarousel-three"
              id="bannercarousel"
            >
              <div className="col-lg-4 col-md-6 text-start mx-auto">
                <h1>Crafting Innovations for Your Future</h1>
                <p className="bannercontent">
                  Sony Digital Vlog Camera ZV 1 (Compact, Video Eye AF, Flip
                  Screen, in-Built Microphone, Bluetooth Shooting Grip, 4K
                  Vlogging Camera and Content Creation) - Black
                </p>
                <a href="/products">
                  <button type="button" className="btn">
                    Order Now
                  </button>
                </a>
              </div>
              <div className="col-lg-5 col-md-10 col-sm-11 text-start"></div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div id="shippingbg">
        <div className="container-fluid">
          <div className="row justify-content-around py-4">
            <div className="col-xl-2 col-lg-3">
              <div className="d-flex flex-column align-items-center shippingimg">
                <FaShippingFast />
                <h4>Free delivery form $750</h4>
                <p>
                  Lorem ipsum dolor sit amet. Ad odio vero aut odit enim hic
                  consequuntur laborum dolorum!
                </p>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3">
              <div className="d-flex flex-column align-items-center shippingimg">
                <PiMoneyWavyFill />
                <h4>Money back quaranteed</h4>
                <p>
                  Lorem ipsum dolor sit amet. Ad odio vero aut odit enim hic
                  consequuntur laborum dolorum!
                </p>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3">
              <div className="d-flex flex-column align-items-center shippingimg">
                <RiSecurePaymentFill />
                <h4>Secure payment</h4>
                <p>
                  Lorem ipsum dolor sit amet. Ad odio vero aut odit enim hic
                  consequuntur laborum dolorum!
                </p>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3">
              <div className="d-flex flex-column align-items-center shippingimg">
                <AiFillSafetyCertificate />
                <h4>100% quaranteed</h4>
                <p>
                  Lorem ipsum dolor sit amet. Ad odio vero aut odit enim hic
                  consequuntur laborum dolorum!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="advertisers" className="advertisers-service-sec pt-lg-5 pb-5">
        <div className="container">
          <div>
            <h1 className="cardheading">Newly Launched Cameras</h1>
          </div>
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 justify-content-center">
            <div className="col">
              <div className="service-card">
                <img
                  src={require("./images/canonimgone.png")}
                  className="card-img-top"
                  alt="Apple Computer"
                  id="firstcard"
                />
                <h3>Canon EOS 1500D Camera</h3>
                <p>
                  Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55
                  with Additional Battery
                </p>
                <div className="card-body">
                  <div>
                    <div className="d-flex justify-content-between">
                      <span>Pro Display XDR</span>
                      <span>$5,999</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Pro stand</span>
                      <span>$999</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Vesa Mount Adapter</span>
                      <span>$199</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between total font-weight-bold mt-4">
                    <span>Total</span>
                    <span>$7,197.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="service-card">
                <img
                  src={require("./images/nikonimage.png")}
                  className="card-img-top"
                  alt="Apple Computer"
                  id="secondcard"
                />
                <h3>Nikon Z6 II Mirrorless Camera</h3>
                <p>
                  Nikon Z6 II Mirrorless Camera Z 24-70mm Lens with Additional
                  Battery, Optical Zoom, Black
                </p>
                <div className="card-body">
                  <div>
                    <div className="d-flex justify-content-between">
                      <span>Pro Display XDR</span>
                      <span>$6,999</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Pro stand</span>
                      <span>$999</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Vesa Mount Adapter</span>
                      <span>$199</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between total font-weight-bold mt-4">
                    <span>Total</span>
                    <span>$8,197.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="service-card">
                <img
                  src={require("./images/rollercamera.png")}
                  className="card-img-top"
                  alt="Apple Computer"
                />
                <h3>MI Wl Home Security Camera</h3>
                <p>
                  MI Xiaomi Wireless Home Security Camera 2i 2022 Edition | Full
                  HD Picture | 360 View
                </p>
                <div className="card-body">
                  <a href="products" className="view-more-btn">
                    <button>View Details</button>
                  </a>
                  <div>
                    <div className="d-flex justify-content-between">
                      <span>Pro Display XDR</span>
                      <span>$5,999</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Pro stand</span>
                      <span>$999</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Vesa Mount Adapter</span>
                      <span>$199</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between total font-weight-bold mt-4">
                    <span>Total</span>
                    <span>$7,197.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="service-card">
                <img
                  src={require("./images/outdoorcamera.png")}
                  className="card-img-top"
                  alt="Apple Computer"
                />
                <h3>TP-Link Tapo C500 Outdoor Pan Camera</h3>
                <p>
                  TP-Link Tapo C500 Outdoor Pan | 2MP 1080p Full HD Live View |
                  360° Visual Coverage
                </p>
                <div className="card-body">
                  <div>
                    <div className="d-flex justify-content-between">
                      <span>Pro Display XDR</span>
                      <span>$5,999</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Pro stand</span>
                      <span>$999</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Vesa Mount Adapter</span>
                      <span>$199</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between total font-weight-bold mt-4">
                    <span>Total</span>
                    <span>$7,197.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="service-card">
                <img
                  src={require("./images/canonimgone.png")}
                  className="card-img-top"
                  alt="Apple Computer"
                />
                <h3> CP PLUS 2MP Full HD Smart Camera</h3>
                <p>
                  Action Camera 1080P 12MP Sports Camera Full HD 2.0 Inch and
                  Action Cam 30m
                </p>
                <div className="card-body">
                  <div>
                    <div className="d-flex justify-content-between">
                      <span>Pro Display XDR</span>
                      <span>$6,999</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Pro stand</span>
                      <span>$999</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Vesa Mount Adapter</span>
                      <span>$199</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between total font-weight-bold mt-4">
                    <span>Total</span>
                    <span>$8,197.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="service-card">
                <img
                  src={require("./images/sixthimage.png")}
                  className="card-img-top"
                  alt="Apple Computer"
                />
                <h3>MI Wireless Home Security Camera</h3>
                <p>
                  MI Xiaomi Wireless Home Security Camera 2i 2022 Edition | Full
                  HD Picture | 360 View
                </p>
                <div className="card-body">
                  <div>
                    <div className="d-flex justify-content-between">
                      <span>Pro Display XDR</span>
                      <span>$5,999</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Pro stand</span>
                      <span>$999</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Vesa Mount Adapter</span>
                      <span>$199</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between total font-weight-bold mt-4">
                    <span>Total</span>
                    <span>$7,197.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="offerpart">
          <div data-aos="zoom-out-up">
            <h6 className="offer-subheading">Triple-lens camera Drone</h6>
            <h1>Up To 25% Discount</h1>
            <h1>Check it Out</h1>
          </div>
        </div>
      </div>
    </>
  );
};
