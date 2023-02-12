import React, { useState } from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import "./Blockchain.css";
import Jing from '../../Images/jing.png'


const Blockchain = () => {
  const [trigger, setTrigger] = useState(0);

  return (
    <div>
      <Header />
      <section id="blockChain"
      //  style={{ backgroundImage: `url(${BlockchainImage})` }}
      >
        <div class="hero-content" data-aos="fade-up">
          <h2>Marketing Plus Company Limited Company (MPLC)</h2>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
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
      <section id="specials" class="specials">
        <div class="container">
          <div class="specials-title">
            <h2>
              Specializing <span>In :</span>
            </h2>
            <p>
              Marketing Plus is a Sister Company stationed in Hong Kong. It is
              divided into 3 distinct sections as follows:
            </p>
          </div>

          <div class="row">
            <div class="col-lg-3">
              <ul class="nav nav-tabs flex-column">
                <li class="nav-item active show" onClick={() => setTrigger(0)}>
                  <a
                    class="nav-link"
                    // data-bs-toggle=""
                    onClick={() => setTrigger(0)}
                  >
                    Indenting
                  </a>
                </li>

                <li class="nav-item active show" onClick={() => setTrigger(1)}>
                  <a
                    class="nav-link "
                    // data-bs-toggle=""
                    onClick={() => setTrigger(1)}
                  >
                    Trading
                  </a>
                </li>

                <li class="nav-item active show" onClick={() => setTrigger(2)}>
                  <a
                    class="nav-link"
                    // data-bs-toggle=""
                    onClick={() => setTrigger(2)}
                  >
                    Services
                  </a>
                </li>
                <li class="nav-item active show" onClick={() => setTrigger(3)}>
                  <a
                    class="nav-link"
                    // data-bs-toggle=""
                    onClick={() => setTrigger(3)}
                  >
                    {/* Initial Coin Offering */}
                  </a>
                </li>
                <li class="nav-item active show" onClick={() => setTrigger(4)}>
                  <a
                    class="nav-link"
                    // data-bs-toggle=""
                    onClick={() => setTrigger(4)}
                  >
                    {/* Smart contract Audit */}
                  </a>
                </li>
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
                          <h3>Indenting</h3>
                          <p class="fst-italic">
                            This department acts as an agent between the
                            stakeholders of The Products
                          </p>
                          {/* <p>
                            <ul>
                              <li>
                                Decentralized Exchanges (DEX) such as Uniswap
                              </li>
                              <li>
                                Crypto lending and investment protocols such as
                                AAve
                              </li>
                              <li>Liquidity mining and yield farming</li>
                              <li>Derivatives protocols like DyDX and HEGIC</li>
                            </ul>
                            We assist our valued clients in the development of
                            their DeFi ecosystem.
                          </p> */}
                        </div>
                        <div class="col-lg-4 text-center order-1 order-lg-2">
                          <img
                            src={Jing}
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
                          <h3>Trading</h3>
                          <p class="fst-italic">
                            Import, local, sales, re-export
                          </p>
                          {/* <p>
                            <ul>
                              <li>
                                NFTs represent Certificates or Access Rights,
                              </li>
                              <li>
                                NFTs represent entirely digital assets such as Digital Graphics or Audio and Visual Clips,
                              </li>
                              <li>
                                NFTs represent certificates or access rights,
                              </li>
                            </ul>
                            Our team has built NFTs of popular standards like ERC721, ERC1155, and others as they were introduced,
                          </p> */}
                        </div>
                        <div class="col-lg-4 text-center order-1 order-lg-2">
                          <img
                            src={Jing}
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
                          <h3>Services </h3>
                          <p class="fst-italic">
                            Provides necessary feedback to buyers and sellers
                            regarding the particular product of brand
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
                            src={Jing}
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
                            src={Jing}
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
                          <img
                            src={Jing}
                            alt=""
                            class="img-fluid"
                            id="blockchinImage"
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
