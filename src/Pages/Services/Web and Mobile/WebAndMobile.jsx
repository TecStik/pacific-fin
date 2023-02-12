import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import "./webAndMobile.css";
import code from '../../Images/code.jpeg'
import webBanner from '../../Images/webBanner.jpeg'
import laptop from '../../Images/laptop.png'


const WebAndMobile = () => {
  return (
    <div>
      <Header />
      <section id="web" style={{ backgroundImage: `url(${laptop})` }}>
        <div class="hero-content" data-aos="fade-up">
          <h2>Web Development</h2>
        </div>
      </section>
      <br />
      <br />
      <br />
      <section id="webabout">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-6 content" id="dollarText">
              <h2>Web Development</h2>
              <p id="dollarText">

                To produce a website for the World Wide Web (WWW), you need a team of Savvy Web Developers.
                A business host’s software on the WWW to provide its stakeholders with global access. The
                Web Development Team at <b>TecStik</b> works with you and builds elegant web solutions
                representing Important Fintech Software. With our Web Development teams using technologies
                of The MERN Stack (MongoDB, Express.js, React.js, Node.js) MEAN Stack (MongoDB, Express,
                AngularJS, and Node.js.), HTML, and CSS, your Business’s Online Fintech will be a modern
                representation of Your FInance Operations on The Web.
              </p>
            </div>

            <div class="col-lg-6 ">
              <img
                id="webevelopmentImage"
                src={code}
                alt="Code"
                height={280}
              />
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default WebAndMobile;
