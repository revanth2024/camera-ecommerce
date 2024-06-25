import React from "react";
import Tabsection from "./Tabsection";
import "./App.css";

export const About = () => {
  return (
    <>
      <div className="about-section">
        <div className="py-5">
          <p className="text-danger m-0">New</p>
          <h1>DJI Ronin 4D</h1>
          <p className="sub-title">
            Video Camera with Best-in-Class Image Quality
          </p>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row py-5 my-lg-5 align-items-center">
          <div className="col-lg-5" data-aos="zoom-out-right">
            <img
              src={require("./images/about-image.jpg")}
              className="img-fluid"
              id="aboutimage"
              alt="banner"
            ></img>
          </div>
          <div className="col-lg-7 about-content">
            <h1 className="text-start my-2 mt-4">About Capture</h1>
            <p className="text-start">
              Embrace the joy of being a part of ‘The Community of Happy
              Customers’. We offer an extensive range of cameras and accessories
              that cater to every photographer’s needs, from amateurs to
              professionals. By choosing us, you’re not just purchasing
              top-quality products; you’re joining a community with shared
              passions and interests. Our customers enjoy exceptional customer
              service, competitive prices, and swift delivery services –
              building trust and satisfaction at each step. Embrace the joy of
              being a part of ‘The Community of Happy Customers’. We offer an
              extensive range of cameras and accessories that cater to every
              photographer’s needs, from amateurs to professionals. By choosing
              us, you’re not just purchasing top-quality products; you’re
              joining a community with shared passions and interests. Our
              customers enjoy exceptional customer service, competitive prices,
              and swift delivery services – building trust and satisfaction at
              each step.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <Tabsection />
      </div>
      <div className="container-fluid testimonials">
        <div className="pt-lg-5">
          <h1>Real talk from our real customers</h1>
        </div>
        <div className="row align-items-center justify-content-evenly py-lg-5">
          <div className="col-lg-5 text-lg-end" data-aos="fade-up">
            <p className="testimonials">
              I just can’t recommend Foto Centre enough. I feel like I’m on a
              first-name basis with some of the crew, they’re just so
              unbelievably helpful, no matter what the question. I love their
              shipping and packaging. One of the fastest shipping i have ever
              seen.I just can’t recommend Foto Centre enough. I feel like I’m on
              a first-name basis with some of the crew, they’re just so
              unbelievably helpful, no matter what the question. I love their
              shipping and packaging. One of the fastest shipping i have ever
              seen.
            </p>
            <h4>Rajiv Gupta</h4>
          </div>
          <div className="col-lg-5" data-aos="fade-up">
            <img
              src={require("./images/testimonialsone.avif")}
              className="img-fluid"
              id="testimage"
              alt="testi"
            ></img>
          </div>
        </div>
        <div className="row align-items-center justify-content-evenly py-5">
          <div className="col-lg-5" data-aos="fade-up">
            <img
              src={require("./images/testimonialtwo.jpg")}
              className="img-fluid" alt="testi"
              id="testimagetwo"
            ></img>
          </div>
          <div className="col-lg-5 text-start" data-aos="fade-up">
            <p className="testimonials">
              Every order from Foto Centre has been an amazing experience. their
              site provides lots of detail so I know exactly what I’m getting
              and their customer support is just outstanding. I needed to swap
              an item for a different product and they arranged everything for
              me within 24 hours.Every order from Foto Centre has been an
              amazing experience. their site provides lots of detail so I know
              exactly what I’m getting and their customer support is just
              outstanding. I needed to swap an item for a different product and
              they arranged everything for me within 24 hours.
            </p>
            <h4>Shrusthi Manek</h4>
          </div>
        </div>
      </div>
    </>
  );
};
