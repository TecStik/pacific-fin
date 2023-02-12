import {
  About,
  Blog,
  Careers,
  Portfolio,
  Blockchain,
  Cloud,
  Contact,
  WebAndMobile,
  MobileApp,
  Product,
  NewHome,
} from "./Pages/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "antd/dist/antd.min.css";
import "./App.css";
import { Helmet } from "react-helmet";

export const App = () => {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Pacific</title>
        <meta name="description" content="Propelling Business Growth" />
        <link rel="icon" href="./favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
        <link rel="icon" href="./favicon.ico" />
      </Helmet>

      <Routes>
        <Route path="/" element={<NewHome />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />

        <Route>
          <Route path="blockchain" element={<Blockchain />} />
          <Route path="webAndMobile" element={<WebAndMobile />} />
          <Route path="mobileApp" element={<MobileApp />} />
          <Route path="cloud" element={<Cloud />} />
        </Route>

        <Route path="contact" element={<Contact />} />
        <Route path="product" element={<Product />} />
        <Route path="Careers" element={<Careers />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
};
