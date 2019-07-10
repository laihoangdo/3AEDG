// import logo from './logo.svg';
import logo1 from '../../images/vtd.png';
import React,{PureComponent}  from 'react';

export default class  Header extends PureComponent {

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
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
                                  <li><a href="index.html">Trang chu test</a></li>
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
            </div>
        );
    }

}