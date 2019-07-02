import React, { Component } from 'react';
import logo from './logo.svg';
import logo1 from './images/vtd.png';
import bg from './images/bg.jpg';
import ps from './images/ps.jpg';
import ai from './images/ai.png';
import corel from './images/corel.jpg';
import teacher from './images/thaytien1.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          {/*<div id="preloder">*/}
              {/*<div className="loader"></div>*/}
          {/*</div>*/}
          <header className="header-section">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-3 col-md-3">
                          <div className="site-logo">
                              <img src={logo1} alt="logo"/>
                          </div>
                          <div className="nav-switch">
                              <i className="fa fa-bars"></i>
                          </div>
                      </div>
                      <div className="col-lg-9 col-md-9">
                          <a href="" className="site-btn header-btn">Login</a>
                          <nav className="main-menu">
                              <ul>
                                  <li><a href="index.html">Home</a></li>
                                  <li><a href="#">About us</a></li>
                                  <li><a href="courses.html">Courses</a></li>
                                  <li><a href="blog.html">News</a></li>
                                  <li><a href="contact.html">Contact</a></li>
                              </ul>
                          </nav>
                      </div>
                  </div>
              </div>
          </header>
        {/*<header className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<p>*/}
            {/*Edit <code>src/App.js</code> and save to reload.*/}
          {/*</p>*/}
          {/*<a*/}
            {/*className="App-link"*/}
            {/*href="https://reactjs.org"*/}
            {/*target="_blank"*/}
            {/*rel="noopener noreferrer"*/}
          {/*>*/}
            {/*Learn React*/}
          {/*</a>*/}
        {/*</header>*/}
          <section className="hero-section set-bg" style={ { backgroundImage: `url(${bg})` } } >
              <div className="container">
                  <div className="hero-text text-white">
                      <h2>Get The Best Courses Direct With Teacher</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris
                          scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus
                              finibus.</p>
                  </div>
                  <div className="row">
                      <div className="col-lg-10 offset-lg-1">
                          <form className="intro-newslatter">
                              <input type="text" placeholder="Name"/>
                                  <input type="text" className="last-s" placeholder="E-mail"/>
                                      <button className="site-btn">Sign Up Now</button>
                          </form>
                      </div>
                  </div>
              </div>
          </section>
          <section className="categories-section spad">
              <div className="container">
                  <div className="section-title">
                      <h2>Our Course Categories</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris
                          scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus
                          finibus.</p>
                  </div>
                  <div className="row">

                      {/*<div className="col-lg-4 col-md-6">*/}
                          {/*<div className="categorie-item">*/}
                              {/*<div className="ci-thumb set-bg" style={ { backgroundImage: `url(${bg})` } }></div>*/}
                              {/*<div className="ci-text">*/}
                                  {/*<h5>Web Design</h5>*/}
                                  {/*<p>Lorem ipsum dolor sit amet, consectetur</p>*/}
                                  {/*<span>70 Courses</span>*/}
                              {/*</div>*/}
                          {/*</div>*/}
                      {/*</div>*/}

                      <div className="col-lg-4 col-md-6">
                          <div className="categorie-item">
                              <div className="ci-thumb set-bg" style={ { backgroundImage: `url(${ai})` } }></div>
                              <div className="ci-text">
                                  <h5>Illustration & Drawing</h5>
                                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                                  <span>55 Courses</span>
                              </div>
                          </div>
                      </div>

                      <div className="col-lg-4 col-md-6">
                          <div className="categorie-item">
                              <div className="ci-thumb set-bg" style={ { backgroundImage: `url(${ps})` } }></div>
                              <div className="ci-text">
                                  <h5>Photoshop</h5>
                                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                                  <span>220 Courses</span>
                              </div>
                          </div>
                      </div>
                    
                      <div className="col-lg-4 col-md-6">
                          <div className="categorie-item">
                              <div className="ci-thumb set-bg" style={ { backgroundImage: `url(${corel})` } }></div>
                              <div className="ci-text">
                                  <h5>Corel Suite</h5>
                                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                                  <span>25 Courses</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section className="course-section spad">
              <div className="container">
                  <div className="section-title mb-0">
                      <h2>Featured Courses</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris
                          scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus
                          finibus.</p>
                  </div>
              </div>
              <div className="course-warp">
                  <ul className="course-filter controls">
                      <li className="control active" data-filter="all">All</li>
                      <li className="control" data-filter=".finance">Finance</li>
                      <li className="control" data-filter=".design">Design</li>
                      <li className="control" data-filter=".web">Web Development</li>
                      <li className="control" data-filter=".photo">Photography</li>
                  </ul>
                  <div className="row course-items-area">
                    
                      <div className="mix col-lg-3 col-md-4 col-sm-6 finance">
                          <div className="course-item">
                              <div className="course-thumb set-bg" style={ { backgroundImage: `url(${bg})` } }>
                                  <div className="price">Price: $15</div>
                              </div>
                              <div className="course-info">
                                  <div className="course-text">
                                      <h5>Art & Crafts</h5>
                                      <p>Lorem ipsum dolor sit amet, consectetur</p>
                                      <div className="students">120 Students</div>
                                  </div>
                                  <div className="course-author">
                                      <div className="ca-pic set-bg" style={ { backgroundImage: `url(${teacher})` } }></div>
                                      <p>Lại Tuấn Tiền, <span>Designer</span></p>
                                  </div>
                              </div>
                          </div>
                      </div>
                    
                      <div className="mix col-lg-3 col-md-4 col-sm-6 design">
                          <div className="course-item">
                              <div className="course-thumb set-bg" style={ { backgroundImage: `url(${bg})` } }>
                                  <div className="price">Price: $15</div>
                              </div>
                              <div className="course-info">
                                  <div className="course-text">
                                      <h5>IT Development</h5>
                                      <p>Lorem ipsum dolor sit amet, consectetur</p>
                                      <div className="students">120 Students</div>
                                  </div>
                                  <div className="course-author">
                                      <div className="ca-pic set-bg" style={ { backgroundImage: `url(${teacher})` } }></div>
                                      <p>Lại Tuấn Tiền, <span>Designer</span></p>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="mix col-lg-3 col-md-4 col-sm-6 web">
                          <div className="course-item">
                              <div className="course-thumb set-bg" style={ { backgroundImage: `url(${bg})` } }>
                                  <div className="price">Price: $15</div>
                              </div>
                              <div className="course-info">
                                  <div className="course-text">
                                      <h5>Graphic Design</h5>
                                      <p>Lorem ipsum dolor sit amet, consectetur</p>
                                      <div className="students">120 Students</div>
                                  </div>
                                  <div className="course-author">
                                      <div className="ca-pic set-bg" style={ { backgroundImage: `url(${teacher})` } }></div>
                                      <p>Lại Tuấn Tiền, <span>Designer</span></p>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="mix col-lg-3 col-md-4 col-sm-6 photo">
                          <div className="course-item">
                              <div className="course-thumb set-bg" style={ { backgroundImage: `url(${bg})` } }>
                                  <div className="price">Price: $15</div>
                              </div>
                              <div className="course-info">
                                  <div className="course-text">
                                      <h5>IT Development</h5>
                                      <p>Lorem ipsum dolor sit amet, consectetur</p>
                                      <div className="students">120 Students</div>
                                  </div>
                                  <div className="course-author">
                                      <div className="ca-pic set-bg" style={ { backgroundImage: `url(${teacher})` } }></div>
                                      <p>Lại Tuấn Tiền, <span>Designer</span></p>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="mix col-lg-3 col-md-4 col-sm-6 finance">
                          <div className="course-item">
                              <div className="course-thumb set-bg" style={ { backgroundImage: `url(${bg})` } }>
                                  <div className="price">Price: $15</div>
                              </div>
                              <div className="course-info">
                                  <div className="course-text">
                                      <h5>IT Development</h5>
                                      <p>Lorem ipsum dolor sit amet, consectetur</p>
                                      <div className="students">120 Students</div>
                                  </div>
                                  <div className="course-author">
                                      <div className="ca-pic set-bg" style={ { backgroundImage: `url(${teacher})` } }></div>
                                      <p>Lại Tuấn Tiền, <span>Designer</span></p>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="mix col-lg-3 col-md-4 col-sm-6 design">
                          <div className="course-item">
                              <div className="course-thumb set-bg" style={ { backgroundImage: `url(${bg})` } }>
                                  <div className="price">Price: $15</div>
                              </div>
                              <div className="course-info">
                                  <div className="course-text">
                                      <h5>Socia Media</h5>
                                      <p>Lorem ipsum dolor sit amet, consectetur</p>
                                      <div className="students">120 Students</div>
                                  </div>
                                  <div className="course-author">
                                      <div className="ca-pic set-bg" style={ { backgroundImage: `url(${teacher})` } }></div>
                                      <p>Lại Tuấn Tiền, <span>Designer</span></p>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="mix col-lg-3 col-md-4 col-sm-6 web">
                          <div className="course-item">
                              <div className="course-thumb set-bg" style={ { backgroundImage: `url(${bg})` } }>
                                  <div className="price">Price: $15</div>
                              </div>
                              <div className="course-info">
                                  <div className="course-text">
                                      <h5>IT Development</h5>
                                      <p>Lorem ipsum dolor sit amet, consectetur</p>
                                      <div className="students">120 Students</div>
                                  </div>
                                  <div className="course-author">
                                      <div className="ca-pic set-bg" style={ { backgroundImage: `url(${teacher})` } }></div>
                                      <p>Lại Tuấn Tiền, <span>Designer</span></p>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="mix col-lg-3 col-md-4 col-sm-6 photo">
                          <div className="course-item">
                              <div className="course-thumb set-bg" style={ { backgroundImage: `url(${bg})` } }>
                                  <div className="price">Price: $15</div>
                              </div>
                              <div className="course-info">
                                  <div className="course-text">
                                      <h5>HTML 5</h5>
                                      <p>Lorem ipsum dolor sit amet, consectetur</p>
                                      <div className="students">120 Students</div>
                                  </div>
                                  <div className="course-author">
                                      <div className="ca-pic set-bg" style={ { backgroundImage: `url(${teacher})` } }></div>
                                      <p>Lại Tuấn Tiền, <span>Designer</span></p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <footer className="footer-section spad pb-0">
              <div className="footer-top">
                  <div className="footer-warp">
                      <div className="row">
                          <div className="widget-item">
                              <h4>Contact Info</h4>
                              <ul className="contact-list">
                                  <li>1481 Creekside Lane Avila Beach, CA 931</li>
                                  <li>+53 345 7953 32453</li>
                                  <li>yourmail@gmail.com</li>
                              </ul>
                          </div>
                          <div className="widget-item">
                              <h4>Engeneering</h4>
                              <ul>
                                  <li><a href="">Applied Studies</a></li>
                                  <li><a href="">Computer Engeneering</a></li>
                                  <li><a href="">Software Engeneering</a></li>
                                  <li><a href="">Informational Engeneering</a></li>
                                  <li><a href="">System Engeneering</a></li>
                              </ul>
                          </div>
                          <div className="widget-item">
                              <h4>Graphic Design</h4>
                              <ul>
                                  <li><a href="">Applied Studies</a></li>
                                  <li><a href="">Computer Engeneering</a></li>
                                  <li><a href="">Software Engeneering</a></li>
                                  <li><a href="">Informational Engeneering</a></li>
                                  <li><a href="">System Engeneering</a></li>
                              </ul>
                          </div>
                          <div className="widget-item">
                              <h4>Development</h4>
                              <ul>
                                  <li><a href="">Applied Studies</a></li>
                                  <li><a href="">Computer Engeneering</a></li>
                                  <li><a href="">Software Engeneering</a></li>
                                  <li><a href="">Informational Engeneering</a></li>
                                  <li><a href="">System Engeneering</a></li>
                              </ul>
                          </div>
                          <div className="widget-item">
                              <h4>Newsletter</h4>
                              <form className="footer-newslatter">
                                  <input type="email" placeholder="E-mail"></input>
                                      <button className="site-btn">Subscribe</button>
                                      <p>*We don’t spam</p>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="footer-bottom">
                  <div className="footer-warp">
                      <ul className="footer-menu">
                          <li><a href="#">Terms & Conditions</a></li>
                          <li><a href="#">Register</a></li>
                          <li><a href="#">Privacy</a></li>
                      </ul>
                      <div
                          className="copyright">
                          Copyright &copy;
                          {/*<script>document.write(new Date().getFullYear());</script>*/}
                          All rights reserved | This template is made with <i className="fa fa-heart-o"
                                                                              aria-hidden="true"></i> by <a
                              href="https://Google.com" target="_blank">Hoàng Đô</a>
                          </div>
                  </div>
              </div>
          </footer>
      </div>
    );
  }
}

export default App;
