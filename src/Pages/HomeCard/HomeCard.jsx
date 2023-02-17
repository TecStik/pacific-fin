import React from "react";
import "./HomeCard.css";
import { Link } from "react-router-dom";
import codeIcon from "../Images/codeIcon.png";
import Nice from "../Images/nice.png";
import foze from "../Images/foze.png";
import meany from "../Images/meany.png";
import merno from "../Images/merno.png";
import apple from "../Images/apple.png";
import Android from "../Images/android.png";
import BlockChain from "../Images/blockchainIcon.png";
import mobileIcon from "../Images/mobileIcon.png";
import Public from "../Images/Public.png";
import Reccy from "../Images/reccy.png"
import CodeIcon from "../Images/codeIcon.png"

export default function HomeCard() {

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <div >
            <div id="flip" className="flip-box">
              <div className="flip-box-inner">
                <div className="flip-box-front">
                  <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                    <img src={BlockChain} alt="" srcset="" height={80} />
                    <h4 class="title"><Link to="/services">Corporate Finance Advisory </Link></h4>
                    <p class="description"></p>
                  </div>
                </div>
                <div className="flip-box-back">
                  <div class="w3-container w3-center">
                    {/* <h5>Blockchain</h5> */}
                    <table className="w3-table">
                      <thead>
                        <tr>

                          <p className="move"><Link to="/services" class="text-white" id="Blocktext">Offering you faithful, precise guidance and resolutions to tackle
your financial activities head on</Link></p>
                        {/* </tr>
                        <tr>
                          <th>
                            <img src={foze} alt="" srcset="" height={60} />
                          </th>
                          <th>
                            <img src={Public} alt="" srcset="" height={55} />
                          </th> */}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            {/* <a href="#featuresTop">sdasdasd</a> */}
                            {/* <Link to="/blockchain" class="text-white">
                              <ul>

                                <li>Binance</li>
                                <li>Ethereum</li>
                              </ul>
                            </Link>
                          </td>
                          <td>
                            <Link to="/blockchain" class="text-white">
                              <ul>
                                <li>Corda</li>
                                <li>Hyperledger</li>
                              </ul>
                            </Link> */}
                          </td>
                        </tr>
                        <tr>
                          {/* <td><Link to="/blockchain" class="text-white mt-2">Ethereum</Link></td> */}

                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </Fade > */}
        </div>

        <div class="col-sm-4">
          {/* <Fade top> */}
          <div>
            <div id="flip" className="flip-box">
              <div className="flip-box-inner">
                <div className="flip-box-front">
                  <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                    <img src={Nice} alt="" srcset="" height={80} />
                    <h4 class="title"><Link to="/services">Islamic Financial Advisory</Link></h4>
                    <p class="description"></p>
                  </div>
                </div>
                <div class="flip-box-back">
                  <div>
                    <table >
                      <thead>
                        <tr >
                        <p className="move"><Link to="/services" class="text-white" id="Blocktext">We provide financial consultancy for our customers interested in
raising their debt or placing their excess liquidity through The Islamic
Mode of Business</Link></p>
                        </tr>
                      </thead>
                     
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </Fade > */}
        </div>

        <div class="col-sm-4">
          {/* <Fade right> */}
          <div >
            <div id="flip" class="flip-box">
              <div class="flip-box-inner">
                <div className="flip-box-front">
                  <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                    <img src={codeIcon} alt="" srcset="" height={80} />
                    <h4 class="title"><Link to="/WebAndMobile">Business Process Outsourcing</Link></h4>
                    {/* <p class="description">Interact with users of your fintech applications on the go.</p> */}
                  </div>
                </div>
                <div class="flip-box-back">
                <tr className="slow"><p className="move"><Link to="/services" class="text-white" id="Blocktext">
                Business Process Outsourcing for companies seeking to outsource their back-
office operations.</Link></p>
                        </tr>
                  {/* <div class="w3-container w3-center"> */}
                    {/* <h5 class="text-white mt-3">IOS & Android Apps</h5> */}
                    <table class="w3-table">
                      <thead>
                        {/* <tr>
                          <th>
                            <img src={apple} alt="" srcset="" height={80} />
                          </th>
                          <th>
                            <img src={Android} alt="" srcset="" height={80} />
                          </th>
                        </tr> */}
                        
                      </thead>
                      <tbody>
                        <tr>
                          {/* <td><Link to="/mobileApp" class="text-white col-md-6"> Ios</Link></td>
                          <td><Link to="/mobileApp" class="text-white col-md-6" id="Androidtext"> Android</Link></td> */}

                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </Fade > */}
        </div>

        {/* <div className="col-sm-3">
     
            <div id="flip" class="flip-box">

              <div class="flip-box-inner"> */}
                {/* <div className="flip-box-front">
                  <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                    <img src="https://cdn-icons-png.flaticon.com/512/115/115804.png" alt="" srcset="" height={80} />
                    <h4 class="title"><Link to="/WebAndMobile">Cloud</Link></h4>
                    <p class="description">Distribute your IT (Information-Technology) across the world.</p>
                  </div>
                </div> */}
                {/* <div class="flip-box-back">
                  <div class="w3-container w3-center">
                    <h5 class="text-white mt-3">Cloud Provider</h5>
                    <table class="w3-table">
                      <thead>
                        <tr>
                          <th>
                            <img src="https://d0.awsstatic.com/logos/powered-by-aws.png" class="mt-4" alt="" srcset="" height={35} />
                          </th>
                          <th>
                            <img src="https://cncf-branding.netlify.app/img/projects/kubernetes/icon/black/kubernetes-icon-black.png" alt="" srcset="" height={70} />
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><Link to="/cloud" class="text-white ml-4">AWS</Link></td>
                          <td><Link to="/cloud" class="text-white">Kubernetes</Link></td>

                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div> */}
              {/* </div>
            </div>
    

        </div> */}

      </div>
    // </div>

  );
}
