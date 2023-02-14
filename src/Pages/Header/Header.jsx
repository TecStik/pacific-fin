import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";
import logo from "../Images/logo2.png";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navSize, setnavSize] = useState("13rem");
  const [navColor, setnavColor] = useState("transparent");
  const [navItemColor, setnavItemColor] = useState("#fff");

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("5rem");
    window.scrollY > 10 ? setnavColor("#fff") : setnavColor("#fff");
    window.scrollY > 10 ? setnavItemColor("#012049") : setnavItemColor("#fff");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <div>
      <header>
        <div
          className="Navbar"
          id="nav"
          style={{
            backgroundColor: navColor,
            color: navItemColor,
            height: navSize,
            transition: "all 1s",
          }}
        >
          <span className="nav-logo" id="nav-logo">

            <Link to="/">
              <img src={logo}  height={55} width={55} />
            </Link>
          </span>
          <span id="logotext"><Link to="/" id="textColor">Pacific Financial Services (Pvt.) Limited</Link></span>

          <div className={`nav-items ${isOpen && "open"}`}>
            <Link to="/">Home</Link>

            <Link to="/about">About Us</Link>
            <Link to="/Blockchain">Our Associates</Link>
            <div class="dropdown">
              {/* <div id="services" className="nav-items">
                Our Associates
                <img
                  src="https://icon-library.com/images/dropdown-menu-icon/dropdown-menu-icon-12.jpg"
                  height={20}
                />
              </div> */}

              {/* <div class="dropdown-content">
                <Row>
                  <Col span={12}>
                    {" "}
                    <Link to="/blockchain" >
                      Marketing Plus
                    </Link> 
                  </Col> 

                  <Col span={12}>
                    <Link to="/mobileApp"> IKnowMyToys </Link>
                  </Col>
                </Row>

                <Row>
                  <Col span={12}>
                    <Link to="/WebAndMobile">TecStik</Link>
                  </Col>
                  <Col span={12}>
                    {" "}
                    <Link to="/GraphicDesigning">Graphic Designing</Link>
                  </Col> 
                  
                </Row>

                <Row>
                  <Col span={12}>
                    <Link to="/ContentWriting">Content Writing</Link>
                  </Col> 
                   <Col span={12}>
                    {" "}
                    <Link to="/DigitalMarketing"> Digital Marketing</Link>
                  </Col> 
                </Row>
              </div> */}
            </div>

            {/* <div class="dropdown">
              <div id="services">Industries<img src="https://icon-library.com/images/dropdown-menu-icon/dropdown-menu-icon-12.jpg" height={20} /></div>
              <div class="dropdown-Industries">
                <Row>
                  <Col span={12}><Link to="/Blog" >Financial Services</Link></Col>
                  <Col span={12}> <Link to="/Cloud"> Healthcare Industry</Link></Col>
                </Row>
                <Row>
                  <Col span={12}><Link to="/WebAndMobile"> Retail Industry</Link></Col>
                  <Col span={12}> <Link to="/Contact">Textile Industry</Link></Col>
                </Row>
                <Row>
                  <Col span={12}><Link to="/blockchain">Steel Industry</Link></Col>
                  <Col span={12}> <Link to="/About">Food Industry</Link></Col>
                </Row>
              </div>
            </div> */}

            {/* <Link to="/Industries">Industries</Link> */}

            {/* <div class="dropdown">
              <div id="services"> Products<img src="https://icon-library.com/images/dropdown-menu-icon/dropdown-menu-icon-12.jpg" height={20} /></div>
              <div class="dropdown-potfolio"> */}
            {/* <Row>
                  <Col span={12}><Link to="/">Recoveri</Link></Col>
                  <Col span={12}> <Link to="/">Doctor </Link></Col>
                </Row>
                <Row>
                  <Col span={12}><Link to="/">Service</Link></Col>
                  <Col span={12}> <Link to="/">Queue Management</Link></Col>
                </Row>
                <Row>
                  <Col span={12}><Link to="/">Monitoring</Link></Col>
                  <Col span={12}> <Link to="/">IJMA</Link></Col>
                </Row> */}
            {/* </div>
            </div> */}

            <Link to="/product">Our Services</Link>
            {/* <Link to="/portfolio">Contact</Link>

            <Link to="/careers">Careers</Link>
            <Link to="/blog">Blog</Link> */}
            <Link to="/contact">Contact Us</Link>
          </div>
          <div
            className={`nav-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="bar"></div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
