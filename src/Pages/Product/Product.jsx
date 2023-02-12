import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Product.css";
import KollectIt from "../Images/K-icon.png";
import Ijma from "../Images/Ijma.png";
import Swift_logo from "../Images/Swift.png";
import products from "../Images/products.jpeg";

const Product = () => {
  const [trigger, setTrigger] = useState(0);

  return (
    <div>
      <Header />
      <section id="Product"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + products})`,
        }}
      >
        <div class="hero-Product" data-aos="fade-up">
          <h2>Products</h2>
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
                          <p class="fst-italic">
                            We help our clients secure Short-term and long-term financing
                            from our partnered financial institutions
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
                          <p class="fst-italic">
                            We help our client raise equity financing vial issuance of shares
                            on Stock Exchanges
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
                          <p class="fst-italic">
                            Apart from using your physical assets for collateral, we guide you
                            on how you can use your cash flows for the same purpose.
                            Benefit from using your liquid assets as opposed to your illiquid
                            infrastructure as a substitute financing means.
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
                          <p class="fst-italic">
                            We assist our clients in preparation of feasibility studies for their
                            green field as well as existing on going modernization
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
                ) : trigger === 4 ? (
                  <>
                    <div class="tab-pane active show">
                      <div class="row">
                        <div class="col-lg-8 details order-2 order-lg-1">
                          <h3>Derivative instruments</h3>
                          <p class="fst-italic">
                            We advise our valued corporate clients on the utilization of
                            Derivative instruments including options, futures and IR swaps
                            best suited to their business needs.
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
                          <p class="fst-italic">
                            We help our corporate clients and partner financial institutions in
                            the liquidity management. With short-term placements
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
                          <p class="fst-italic">
                            We help our clients with  the outsourcing of  various back office
                            tasks, while they can continue focussing on their core business
                            areas
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
                          <p class="fst-italic">
                            We provide financial consultancy for our customers interested in
                            raising their debt or placing their excess liquidity through Islamic
                            Mode by structuring specialized instruments such as:
                          </p>
                          <ul>
                            <li>Musharika</li>
                            <li>Murabaha</li>
                            <li>Ijara</li>
                            <li>Sukuks</li>
                          </ul>
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
      </section >
      <br />
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
