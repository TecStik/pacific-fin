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
        <title>Pacific Financial Services</title>
        <meta name="description" content="Financial Consultancy for Business" />
        <link rel="icon" href="./favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
        <link rel="icon" href="./favicon.ico" />
      </Helmet>

      <Routes>
        <Route path="/" element={<NewHome />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />

        <Route>
          <Route path="associates" element={<Blockchain />} />
          <Route path="webAndMobile" element={<WebAndMobile />} />
          <Route path="mobileApp" element={<MobileApp />} />
          <Route path="cloud" element={<Cloud />} />
        </Route>

        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Product />} />
        <Route path="Careers" element={<Careers />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
};
