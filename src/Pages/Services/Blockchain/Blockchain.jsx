import React, { useState } from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import "./Blockchain.css";
import Sing from '../../Images/sing.png'
import Tec from '../../Images/tec.png'
import Ikmt from '../../Images/ikmt.png'
import BlockchainImage from '../../Images/car.png'
import { Link } from "react-router-dom";

import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";


const Blockchain = () => {
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
      <section id="blockChain"
        style={{ backgroundImage: `url(${BlockchainImage})` }}
      >
        <div class="hero-content" data-aos="fade-up">
        </div>
      </section>
      {/* <br />
      <br />
      <br />
      <br />
      <br /> */}
<br />
      {/* <section id="blockChainImage">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-6 content" id="dollarText">
              <h2>BLOCKCHAIN</h2>
              <p id="dollarText">
                The world has changed. Web 3.0 is set to affect Your Business.
                AnoStrat builds dAPPS (Decentralized Apps) that prepare your
                company for The Evolution of The Internet as we know it.
                Seamlessly applying DeFi Protocols (Decentralized Finance
                Protocols) to enhance traceability and secure the details of
                Your Business Transactions, AnoStrat Fortifies its Client's
                operations.
              </p>
            </div>

            <div class="col-lg-6">
              <br />
              <img
                src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2022/05/02030257/dApp-on-NEAR-Protocol.png"
                alt=""
                class="img-fluid"
                height={250}
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* <br />
      <br />
      <br /> */}

      {/* <!-- ======= Counts Section ======= --> */}
      <section id="specials" class="specials" className="up">
        <div class="container">
          <div class="specials-title">
            <h2>
              Our Associates
            </h2>
            {/* <pF */}
          </div>
<br />
<br />
          <div class="row">
            <div class="col-lg-3">
              <ul class="nav nav-tabs flex-column">
                <li class="nav-item active show" onClick={() => setTrigger(0)}>
                  <a
                    class="nav-link"
                    // data-bs-toggle=""
                    onClick={() => setTrigger(0)}
                  >
                    Marketing Plus
                  </a>
                </li>

                <li class="nav-item active show" onClick={() => setTrigger(1)}>
                  <a
                    class="nav-link"
                    // data-bs-toggle=""
                    onClick={() => setTrigger(1)}
                  >
                    IKnowMyToys
                  </a>
                </li>

                <li class="nav-item active show" onClick={() => setTrigger(2)}>
                  <a
                    class="nav-link"
                    // data-bs-toggle=""
                    onClick={() => setTrigger(2)}
                  >
                    TecStik
                  </a>
                </li>
                {/* <li class="nav-item active show" onClick={() => setTrigger(3)}>
                  <a
                    class="nav-link"
                    // data-bs-toggle=""
                    onClick={() => setTrigger(3)}
                  >
                    Initial Coin Offering
                  </a>
                </li>
                <li class="nav-item active show" onClick={() => setTrigger(4)}>
                  <a
                    class="nav-link"
                    // data-bs-toggle=""
                    onClick={() => setTrigger(4)}
                  >
                    Smart contract Audit
                  </a>
                </li> */}
                {/* <li class="nav-item active show" onClick={() => setTrigger(4)}>
                  <a
                    class="nav-link"
                    // data-bs-toggle=""
                    onClick={() => setTrigger(4)}
                  >
                    Healthcare Industry
                  </a>
                </li> */}
              </ul>
            </div>

            <div class="col-lg-9 mt-4 mt-lg-0">

              <div class="tab-content ">
                {trigger === 0 ? (
                  <>
                    <div class="tab-pane active show">
                      <div class="row">
                        <div class="col-lg-8 details order-2 order-lg-1">

                          <h3><strong>Marketing Plus</strong></h3>
                          <p class="fst-italic">
                            Marketing Plus is a Sister concern of Pacific Financial Services, stationed in Hong Kong. It is divided into 3 distinct sections as follows:
                            <br></br>
                            <strong>1. Indenting</strong> – This department acts as an agent between the stakeholders of The
                            Products
                            <br></br>
                            <strong>2. Trading</strong> – Import, local, sales, re-export
                            <br></br>
                            <strong>3. Services</strong> – Provides necessary feedback to buyers and sellers regarding a
                            particular brand: IKnowMyToys.com.
                          </p>

                        </div>
                        <div class="col-lg-4 text-center order-1 order-lg-2">
                          <img
                            src={Sing}
                            alt=""
                            class="img-fluid"
                            id="blockchinImage"
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
                          <h3>IKnowMyToys</h3>
                          <p class="fst-italic">
                            <a href="Link">IKnowMyToys.com</a> was the first brand to bring toys from internationally renowned brands to Pakistan. Being among the first Ecommerce Stores in Pakistan when it began its Journey in 2012, IKnowMyToys brought all sorts of Internationally Produced collectibles, STEM (Science Technology Engineering Mathematics), Remote Controlled (RC), Dolls & Family Playsets, etc. to Pakistan for the first time ever.
                          </p>
                        </div>
                        <div class="col-lg-4 text-center order-1 order-lg-2">
                          <img
                            src={Ikmt}
                            alt=""
                            class="img-fluid"
                            id="blockchinImage"
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
                          <h3>TecStik</h3>
                          <p class="fst-italic">
                            TecStik.com is The Fintech Arm of Pacific Financial Services with experience in
                            working with several local and international clients. It offers services
                            related to:
                            Mobile App development,
                            Web App Development,
                            Cloud computing,
                            Digital Marketing.
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
                            src={Tec}
                            alt=""
                            class="img-fluid"
                            id="blockchinImage"
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
                          <h3>Initial Coin Offering</h3>
                          <p class="fst-italic">
                            An initial coin offering (ICO) is the cryptocurrency industry’s
                            equivalent of an initial public offering (IPO). A company seeking
                            to raise money for creating a new coin, app, or service can launch
                            an ICO as a method of raising funds.

                          </p>
                          <p>
                            investors can buy into an initial coin offering to
                            receive a new cryptocurrency token issued by a specific company.
                            This token has utility related to the product or service that the
                            company is offering (i.e a Utility Token), or it represents a stake
                            in the company or else a project it is built for (i.e a Security Token).
                            Our team works closely with these clients in
                            the final EndInitial Coin Offering Process which
                            includes:
                            <ul>
                              <li>Project evaluation,</li>
                              <li>Designing Suitable Tokenomics,</li>
                              <li>Preparation of the White Paper,</li>
                              <li>Development of the Smart Contract,</li>
                              <li>ICO Launch of Website,</li>
                              <li>
                                Listing of Coins at Relevant Suitable Exchanges.
                              </li>
                            </ul>
                          </p>
                        </div>
                        <div class="col-lg-4 text-center order-1 order-lg-2">
                          <img
                            src={Sing}
                            alt=""
                            class="img-fluid"
                            id="blockchinImage"
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
                          <h3>Smart Contract Audit</h3>
                          <p class="fst-italic">
                            The Smart Contract Audit service includes checks against known vulnerabilities that are
                            relevant to the unique business logic of each smart contract. In addition, it verifies
                            that the smart contract is free from Logical Issues, Access Control Issues, and an Assessment
                            of Compliance with the Code Style Guide.
                          </p>
                          {/* <p>
                            In addition, it provides verification that the smart
                            contract is free from logical and access control
                            issues, and an assessment of compliance with the
                            Code Style guide.
                          </p> */}
                        </div>
                        <div class="col-lg-4 text-center order-1 order-lg-2">
                          {/* <img
                            src={}
                            alt=""
                            class="img-fluid"
                            id="blockchinImage"
                            height={10}
                          /> */}
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
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <!-- End Counts Section --> */}

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Blockchain;
