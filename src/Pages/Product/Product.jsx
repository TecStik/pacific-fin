import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Product.css";
import KollectIt from "../Images/K-icon.png";
import Ijma from "../Images/Ijma.png";
import Swift_logo from "../Images/Swift.png";
import products from "../Images/products.jpeg";
import { useSearchParams } from "react-router-dom";


const Product = () => {
  const [trigger, setTrigger] = useState(0);


  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "0";

  const changeTab = (tab) => {
    searchParams.set("tab", tab);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [searchParams]);

  return (
    <div>
      <Header />
      <section id="Product"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + products})`,
        }}
      >
        <div class="hero-Product" data-aos="fade-up">
          <h2>Our Services</h2>
        </div>
      </section>
      <br />
      <br />
      <br />

      {/* <!-- ======= Counts Section ======= --> */}
      <section id="specials" class="specials">
        <div class="container">
          {/* <div class="specials-title">
            <h2>
              Check our Product <span>Specialist</span>
            </h2>
            <p>
              Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
              adipisci expedita at voluptas atque vitae autem.
            </p>
          </div> */}
          <div class="row">
            <div class="col-lg-3">
              <ul class="nav nav-tabs flex-column">
                <li class="nav-item active show" onClick={() => setTrigger(0)}>
                  <a class="nav-link"
                    // data-bs-toggle=""
                    onClick={() => setTrigger(0)}>Short Term and Long-Term Finance
                  </a>
                </li>
                <li class="nav-item active show" onClick={() => setTrigger(1)}>
                  <a class="nav-link "
                    // data-bs-toggle=""
                    onClick={() => setTrigger(1)}>Pre IPO and Initial Public Offerings
                  </a>
                </li>
                <li class="nav-item active show" onClick={() => setTrigger(2)}>
                  <a class="nav-link"
                    // data-bs-toggle=""
                    onClick={() => setTrigger(2)} >Structured Finance
                  </a>
                </li>
                <li class="nav-item active show" onClick={() => setTrigger(3)}>
                  <a
                    class="nav-link"
                    // data-bs-toggle=""
                    onClick={() => setTrigger(3)}
                  >
                    Feasibility Studies
                  </a>
                </li>
                <li class="nav-item active show" onClick={() => setTrigger(4)}>
                  <a
                    class="nav-link"
                    // data-bs-toggle=""
                    onClick={() => setTrigger(4)}
                  >
                    Derivative instruments
                  </a>
                </li>
                <li class="nav-item active show" onClick={() => setTrigger(5)}>
                  <a
                    class="nav-link"
                    // data-bs-toggle=""
                    onClick={() => setTrigger(5)}
                  >
                    Treasury and Money Market
                  </a>
                </li>
                <li class="nav-item active show" onClick={() => setTrigger(6)}>
                  <a
                    class="nav-link"
                    // data-bs-toggle=""
                    onClick={() => setTrigger(6)}
                  >
                    Business Process Outsourcing
                  </a>
                </li>
                <li class="nav-item active show" onClick={() => setTrigger(7)}>
                  <a
                    class="nav-link"
                    // data-bs-toggle=""
                    onClick={() => setTrigger(7)}
                  >
                    Islamic Financial Advisory
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-9 mt-4 mt-lg-0">
              <div class="tab-content ">
                {trigger === 0 ? (
                  <>
                    <div class="tab-pane active show">
                      <div class="row">
                        <div class="col-lg-8 details order-2 order-lg-1">
                          <h3>Short Term and Long-Term Finance</h3>
                          <p style={{ fontSize: '20px' }}>
                            At Pacific Financial Services, we specialize in securing tailored short-
                            term and long-term financing solutions for our clients, through our
                            extensive network of partnered financial institutions. <br></br><br></br>
                            As experts in financial analysis and strategy, we are committed
                            to helping our clients achieve their business goals and grow their
                            ventures.
                          </p>
                        </div>
                        <div class="col-lg-4 text-center order-1 order-lg-2">
                          <img
                            src={Ijma}
                            alt="Ijma"
                            class="img-fluid"
                            height={10}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ) : trigger === 1 ? (
                  <>
                    <div class="tab-pane active show">
                      <div class="row">
                        <div class="col-lg-8 details order-2 order-lg-1">
                          <h3>Pre IPO and Initial Public Offerings</h3>
                          <p p style={{ fontSize: '20px' }}>
                            As a trusted partner, Pacific Financial Services  provides
                            comprehensive advisory services to our clients seeking to raise equity
                            financing through pre IPO and Initial Public Offerings. <br></br><br></br>
                            We offer strategic guidance and support throughout the process,
                            ensuring that our clients have the best chance of success in the
                            competitive world of capital markets.
                          </p>
                          {/* <p>
                            <h5>Decentralized Finance (DeFi)</h5>
                            Our team have extensive experience in working on  various popular Defi protocols including
                            <ul>
                              <li>Decentralized Exchanges DEX such as Uniswap,</li>
                              <li>cryoto lending and investment  protocols such asAAve</li>
                              <li>Liquidity mining and yield farming </li>
                              <li>Derivatives protocols like DyDX and HEGIC</li>
                            </ul>
                            We help our valued clients in the development of their DeFi ecosystem.
                          </p> */}
                        </div>
                        <div class="col-lg-4 text-center order-1 order-lg-2">
                          <img
                            src={KollectIt}
                            alt=""
                            class="img-fluid"
                            height={10}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ) : trigger === 2 ? (
                  <>
                    <div class="tab-pane active show">
                      <div class="row">
                        <div class="col-lg-8 details order-2 order-lg-1">
                          <h3>Structured Finance</h3>
                          <p style={{ fontSize: '20px' }}>
                            Our company provides innovative & structured
                            finance solutions to our clients by utilizing their cash flows as collateral,
                            instead of their physical assets.
                            <br></br><br></br>Our team of experts works closely with
                            our clients to design tailored financing structures that best suit their
                            unique business needs, providing them with access to the liquidity
                            they need while preserving their valuable assets.
                          </p>
                          {/* <p>
                            <h5>Decentralized Finance (DeFi)</h5>
                            Our team have extensive experience in working on  various popular Defi protocols including
                            <ul>
                              <li>Decentralized Exchanges DEX such as Uniswap,</li>
                              <li>cryoto lending and investment  protocols such asAAve</li>
                              <li>Liquidity mining and yield farming </li>
                              <li>Derivatives protocols like DyDX and HEGIC</li>
                            </ul>
                            We help our valued clients in the development of their DeFi ecosystem.
                          </p> */}
                        </div>
                        <div class="col-lg-4 text-center order-1 order-lg-2">
                          <img
                            src={KollectIt}
                            alt=""
                            class="img-fluid"
                            height={10}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ) : trigger === 3 ? (
                  <>
                    <div class="tab-pane active show">
                      <div class="row">
                        <div class="col-lg-8 details order-2 order-lg-1">
                          <h3>Feasibility Studies</h3>
                          <p p style={{ fontSize: '20px' }}>
                            We specialize in providing comprehensive feasibility study services to
                            our clients, covering both greenfield and existing projects. <br></br><br></br>Our team of
                            experienced analysts conducts in-depth research and analysis to
                            determine the viability of projects while providing our clients with sound
                            recommendations to help them make informed business decisions.
                          </p>
                          {/* <p>
                            <h5>Decentralized Finance (DeFi)</h5>
                            Our team have extensive experience in working on  various popular Defi protocols including
                            <ul>
                              <li>Decentralized Exchanges DEX such as Uniswap,</li>
                              <li>cryoto lending and investment  protocols such asAAve</li>
                              <li>Liquidity mining and yield farming </li>
                              <li>Derivatives protocols like DyDX and HEGIC</li>
                            </ul>
                            We help our valued clients in the development of their DeFi ecosystem.
                          </p> */}
                        </div>
                        <div class="col-lg-4 text-center order-1 order-lg-2">
                          <img
                            src={Ijma}
                            alt=""
                            class="img-fluid"
                            height={10}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ) : trigger === 4 ? (
                  <>
                    <div class="tab-pane active show">
                      <div class="row">
                        <div class="col-lg-8 details order-2 order-lg-1">
                          <h3>Derivative instruments</h3>
                          <p style={{ fontSize: '20px' }}>
                            As a trusted financial advisor, we guide our corporate clients when they are
                            utilizing their derivative instruments including options, futures, and
                            interest rate swaps.<br></br><br></br> We assist them to manage risks and achieve their
                            financial goals. Working closely with our clientele to design customized
                            solutions that align with their business strategies and objectives.
                          </p>
                          {/* <p>
                            <h5>Decentralized Finance (DeFi)</h5>
                            Our team have extensive experience in working on  various popular Defi protocols including
                            <ul>
                              <li>Decentralized Exchanges DEX such as Uniswap,</li>
                              <li>cryoto lending and investment  protocols such asAAve</li>
                              <li>Liquidity mining and yield farming </li>
                              <li>Derivatives protocols like DyDX and HEGIC</li>
                            </ul>
                            We help our valued clients in the development of their DeFi ecosystem.
                          </p> */}
                        </div>
                        <div class="col-lg-4 text-center order-1 order-lg-2">
                          <img
                            src={KollectIt}
                            alt=""
                            class="img-fluid"
                            height={10}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ) : trigger === 5 ? (
                  <>
                    <div class="tab-pane active show">
                      <div class="row">
                        <div class="col-lg-8 details order-2 order-lg-1">
                          <h3>Treasury and Money Market</h3>
                          <p style={{ fontSize: '20px' }}>
                            At Pacific, we offer a wide range of treasury and money market
                            services to our corporate clients and partnered financial institutions.<br></br><br></br> Our
                            services include short-term placements, liquidity management, and
                            risk mitigation strategies to help our clients optimize their cash
                            management and achieve their financial objectives.
                          </p>
                          {/* <p>
                            <h5>Decentralized Finance (DeFi)</h5>
                            Our team have extensive experience in working on  various popular Defi protocols including
                            <ul>
                              <li>Decentralized Exchanges DEX such as Uniswap,</li>
                              <li>cryoto lending and investment  protocols such asAAve</li>
                              <li>Liquidity mining and yield farming </li>
                              <li>Derivatives protocols like DyDX and HEGIC</li>
                            </ul>
                            We help our valued clients in the development of their DeFi ecosystem.
                          </p> */}
                        </div>
                        <div class="col-lg-4 text-center order-1 order-lg-2">
                          <img
                            src={KollectIt}
                            alt=""
                            class="img-fluid"
                            height={10}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ) : trigger === 6 ? (
                  <>
                    <div class="tab-pane active show">
                      <div class="row">
                        <div class="col-lg-8 details order-2 order-lg-1">
                          <h3>Business Process Outsourcing</h3>
                          <p style={{ fontSize: '20px' }}>
                            We understand that our clients' time and resources are valuable, which
                            is why we offer comprehensive Business Process Outsourcing Services.
                            Our team of skilled professionals can help with various back-office
                            tasks, freeing up our clients to focus on their core business areas.
                          </p>
                          {/* <p>
                            <h5>Decentralized Finance (DeFi)</h5>
                            Our team have extensive experience in working on  various popular Defi protocols including
                            <ul>
                              <li>Decentralized Exchanges DEX such as Uniswap,</li>
                              <li>cryoto lending and investment  protocols such asAAve</li>
                              <li>Liquidity mining and yield farming </li>
                              <li>Derivatives protocols like DyDX and HEGIC</li>
                            </ul>
                            We help our valued clients in the development of their DeFi ecosystem.
                          </p> */}
                        </div>
                        <div class="col-lg-4 text-center order-1 order-lg-2">
                          <img
                            src={KollectIt}
                            alt=""
                            class="img-fluid"
                            height={10}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ) : trigger === 7 ? (
                  <>
                    <div class="tab-pane active show">
                      <div class="row">
                        <div class="col-lg-8 details order-2 order-lg-1">
                          <h3>Islamic Financial Advisory</h3>
                          <p style={{ fontSize: '20px' }}>
                            As a leading financial consultancy firm, we specialize in providing Islamic
                            Financial Advisory services to our clients. We assist our customers with Raising
                            Debt and Placing Excess Liquidity through Islamic modes, by structuring
                            specialized instruments, such as Mudarabah, Musharakah, and Ijarah, to help
                            them achieve their financial goals while Adhering to their Values and Beliefs</p>
                          {/* <p>
                            <h5>Decentralized Finance (DeFi)</h5>
                            Our team have extensive experience in working on  various popular Defi protocols including
                            We help our valued clients in the development of their DeFi ecosystem.
                          </p> */}
                        </div>
                        <div class="col-lg-4 text-center order-1 order-lg-2">
                          <img
                            src={KollectIt}
                            alt=""
                            class="img-fluid"
                            height={10}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </section >      <br />
      <br />
      <br />
      <br />
      <div>
        <Footer />
      </div>
    </div >
  );
};

export default Product;
