import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import './Blog.css'
import BlogBanner from '../Images/Blog.jpg'



const Blog = () => {
  return (
    <div>
      <Header />
      {/* <!-- ======= hero Section ======= --> */}
      <section id="blog"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + BlogBanner})`,
        }}
      >

        <div class="hero-content" data-aos="fade-up">
          <h2>Blog</h2>

        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <section id="why-us" class="why-us section-bg">
        <div class="container">

          <div class="row">

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div class="card">
                <img src="https://www.freecodecamp.org/news/content/images/size/w2000/2022/02/arnold-francisca-f77Bh3inUpE-unsplash.jpg" class="card-img-top" alt="..." />
                <div class="card-icon">
                  <i class="bx bx-book-reader"></i>
                </div>
                <div class="card-body">
                  <h5 class="card-title"><a href={() => false}>Our Mission</a></h5>
                  <p class="card-text"></p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div class="card">
                <img src="https://www.codingdojo.com/blog/wp-content/uploads/codelaptop.jpg" class="card-img-top" alt="..." />
                <div class="card-icon">
                  <i class="bx bx-calendar-edit"></i>
                </div>
                <div class="card-body">
                  <br></br>
                  <h5 class="card-title"><a href={() => false}>Our Plan</a></h5>
                  <p class="card-text"></p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div class="card">
                <img src="https://appdevcon.nl/wp-content/uploads/2020/03/ADVANTAGES-AND-DISADVANTAGES-OF-BEING-A-DEVELOPER-.jpeg" class="card-img-top" alt="..." />
                <div class="card-icon">
                  <i class="bx bx-landscape"></i>
                </div>
                <div class="card-body">
                  <h5 class="card-title"><a href={() => false}>Our Vision</a></h5>
                  <p class="card-text"></p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section> */}

      <div>
        <Footer />
      </div>

    </div>
  );
};

export default Blog;
