import React from "react";
import Header from "../Header/Header";
import "./About.css";
import AboutSlider from "../Images/aboutSlider.jpg";
import Footer from "../Footer/Footer";
import logo from "../Images/logo2.png";

import map from "../Images/map.PNG";

const About = () => {
  return (
    <div>
      <Header />

      <section
        id="about"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + AboutSlider})`,
        }}
      >
        <div class="hero-item active">
          {" "}
          {/* carousel */}
          <div class="hero-container">
            {" "}
            {/* carousel */}
            <div class="hero-content">
              {" "}
              {/* carousel */}
              <h4 class="">Enhancing Your Strategy</h4>
              {/* <p class="animate__animated animate__fadeInUp p-2">
                What does your company need to be successful? Equipping
                themselves with the Latest Technology, to Perform Exceptionally.
                Let TecStik build your Technological Masterstroke.
              </p> */}
            </div>
          </div>
        </div>

        {/* <div class="hero-content" data-aos="fade-up">
          <h3>BUILDING TECHNOLOGY SOLUTIONS WORTH YOUR EXQUISITE STANDARDS</h3>
          <p class="animate__animated animate__fadeInUp p-2">
            What does your company need to be successful? Equipping themselves with the Latest Technology,
            to Perform Exceptionally.Let TecStik build your Technological Masterstroke.</p>

          <div>
            <a href="#about" class="btn-get-started scrollto">Contact Us</a>
          </div>
        </div> */}
      </section>
      {/*  */}

      <section>
        <div class="container" data-aos="fade-up">
          <div class="row" id="cardTextImage">
            <div class="col-lg-6 content" id="dollarText">
              <br />
              <br />
              <br />
              <h2>
                Financial Strategy through The Ages

              </h2>

              <p>
                <br />
                Our Mission is to serve our Clients with creativity, enthusiasm, energy and
                vision. This principle lies in the heart of our work.
                Our objective is to build long-lasting customer-relationships by providing
                innovative and dynamic financial services in the commercial arena. <br></br> <br></br>
                Incorporated in the year 2002 under the Companies Ordinance 1984, we are
                dedicated to providing a wide range of Financial Services to High Net Worth
                Individuals and Corporate Clients.
                <br />
                <br />


              </p>
            </div>

            <div class="col-lg-6 cardTextImage">

              <img
                id="aboutImage"
                src={logo}
                alt=""
                height={200}
                width={200}
              />

            </div>
          </div>
        </div>
      </section>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
