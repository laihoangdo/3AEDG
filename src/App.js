import React, { Component } from 'react';
import bg from './images/bg.jpg';
import ps from './images/ps.jpg';
import ai from './images/ai.png';
import corel from './images/corel.jpg';
import teacher from './images/thaytien1.jpg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
          {/*<div id="preloder">*/}
              {/*<div className="loader"></div>*/}
          {/*</div>*/}
          <Header/>
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

          <Footer/>
      </div>
    );
  }
}

export default App;
