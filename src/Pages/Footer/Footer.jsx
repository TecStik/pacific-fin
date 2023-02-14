import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {


  return (

    <div>
      <footer class="text-center text-lg-start text-white" style={{ background: "#1c2331" }}>

        <section class="d-flex justify-content-between p-4" style={{ background: "#6351ce" }}>
          <div class="me-5"></div>
          <div>
            
          </div>
        </section>


        <section>
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold text-white">Pacific Financial Services PVT. LTD.</h6>
                <hr class="mb-4 mt-0 d-inline-block mx-auto" style={{ background: "#7c4dff", height: 2, width: 60 }} />
                <p>
                Incorporated in the year 2002 under the Companies Ordinance 1984, we are
dedicated to providing a wide range of Financial Services to High Net Worth

Individuals and Corporate Clients.

                </p>
              </div>


              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 class="text-uppercase fw-bold text-white">Our Services</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ background: "#7c4dff", height: 2, width: 60 }}
                />
                <p>
                <Link to="/Product" className="link">
                    Business Process Outsourcing
                  </Link>
                </p>
                {/* <p>
                  <a href={() => false} class="text-white">
                    SwiftMD
                  </a>
                </p>
                <p>
                  <a href={() => false} class="text-white">
                    Mosaic
                  </a>
                </p> */}
                <p>
                <Link to="/Product" className="link">
                    Corporate Financial Consultancy
                  </Link>
                </p>
                <p>
                <Link to="/Product" className="link">
                    Islamic Financial Consultancy
                  </Link>
                </p>
              </div>


              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <h6 class="text-uppercase fw-bold text-white ">Services </h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ background: "#7c4dff", height: 2, width: 60 }}
                />
                <p>
                  <a href={() => false} class="text-white">
                    Blockchain Development
                  </a>
                </p>
                <p>
                  <a href={() => false} class="text-white">
                    Full Stack Development
                  </a>
                </p>
                <p>
                  <a href={() => false} class="text-white">
                    Mobile Apps Development
                  </a>
                </p>
                <p>
                  <a href={() => false} class="text-white">
                    Cloud Computing
                  </a>
                </p> */}
              </div>


              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 class="text-uppercase fw-bold text-white">Contact</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ background: "#7c4dff", height: 2, width: 60 }}
                />
                <p>
                  <i class="fas fa-home mr-3"></i> Business
                  Centre, II Chundrigar Road, Karachi, Sindh, Pakistan
                </p>
                <p>
                  <i class="fas fa-envelope mr-3"></i>
                  <a href="mailto:info@pacific-fin.com" class="text-white">info@pacific-fin.com</a>
                </p>
                <p>
                  <i class="fas fa-phone mr-3"></i> (92-21) 32442392-93
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Copyright --> */}
        <div
          class="text-center p-3"
          style={{ background: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2001 Copyright :
          <a class="text-white ml-2" href={() => false}>
            pacific-fin.com
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </div>
  );
}
