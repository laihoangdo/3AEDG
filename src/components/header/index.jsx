// import logo from './logo.svg';
import logo1 from '../../images/vtd.png';
import React,{PureComponent}  from 'react';
import { Switch } from 'react-router';
// import { Route, Link } from "react-router-dom";
// import Home from '../home/index';
// import AboutUs from '../aboutus/index';
// import {Nav , NavDropdown , Navbar , Container , Row , Col} from 'react-bootstrap';
import PropTypes from 'prop-types';
import Icofont from 'react-icofont';
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container, Nav } from "react-bootstrap";
import '../../css/main.css';
import './header.css';
import logo01 from '../../images/logo01.png';
import anhbia01 from '../../images/anhbia01.jpg';

export default class  Header extends PureComponent {

    constructor(props){
        super(props);
        // this.props.logo2 = require('../../images/logo01.png');
    }

    componentDidMount() {
      let elem = document.getElementById("navbar");
      document.addEventListener("scroll", () => {
          if (window.scrollY > 170) {
              elem.classList.add("menu-shrink");
              elem.classList.add("fixed-top");
          } else {
              elem.classList.remove("menu-shrink");
              elem.classList.remove("fixed-top");
          }
      });
      window.scrollTo(0, 0);
      
  
  }

  closeNavbar() {
      if (window.matchMedia("screen and (max-width: 991px)").matches) {
          document.getElementById("collaspe-btn").click();
      }
  }

    render(){
        return(
            // <>
            // <div className="topbar">
            //     <div className="content-topbar container h-100">
            //         <div className="left-topbar">

            //             <a href="#" className="left-topbar-item">
            //                 Contact
            //             </a>

            //             <a href="#" className="left-topbar-item">
            //                 Sing up
            //             </a>

            //             <a href="#" className="left-topbar-item">
            //                 Log in
            //             </a>
            //         </div>

            //         <div className="right-topbar">
            //             <a href="#">
            //                 <span className="fab fa-facebook-f"></span>
            //             </a>

            //             <a href="#">
            //                 <span className="fab fa-twitter"></span>
            //             </a>

            //             <a href="#">
            //                 <span className="fab fa-pinterest-p"></span>
            //             </a>

            //             <a href="#">
            //                 <span className="fab fa-vimeo-v"></span>
            //             </a>

            //             <a href="#">
            //                 <span className="fab fa-youtube"></span>
            //             </a>
            //         </div>
            //     </div>
            // </div>
            // <div className="nav-logo">
            // <Container>
            //     <Row>
            //         <Col sm={4}>
            //         <div className="wrap-logo container">        
            //             <div className="logo" >
            //                 <a href=""><img src={logo01} alt=""/></a>
            //             </div> 
            //             <span className="name-company">3 Anh Em</span>                    
            //         </div>
            //         </Col>
            //         <Col sm={8}>
            //         <div className="">
            //             <div className="banner-header01">
            //                     <a href="#"><img src={anhbia01} alt=""/></a>
            //                 </div>
            //         </div>
            //         </Col>
                    
            //     </Row>
            // </Container>
            // </div>
            // <nav class="navbar navbar-expand-lg navbar-dark primary-color">
            

            //   <a class="navbar-brand" href="#">Design 3Anhem</a>
            
            //   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
            //     aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
            //     <span class="navbar-toggler-icon"></span>
            //   </button>
            
            //   <div class="collapse navbar-collapse" id="basicExampleNav">
            
            //     <ul class="navbar-nav mr-auto">
            //       <li class="nav-item active">
            //         <a class="nav-link" href="#/home"> Trang chủ
            //           <span class="sr-only">(current)</span>
            //         </a>
            //       </li>
            //       <li class="nav-item">
            //         <a class="nav-link" href="#/info">Giới Thiệu</a>
            //       </li>
            //       <li class="nav-item dropdown">
            //         <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
            //           aria-haspopup="true" aria-expanded="false">Khóa Học</a>
            //         <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
            //           <a class="dropdown-item" href="#">PSD</a>
            //           <a class="dropdown-item" href="#">AI</a>
            //           <a class="dropdown-item" href="#">Corel</a>
            //           <a class="dropdown-item" href="#">3D</a>
            //         </div>
            //       </li>
            //       <li class="nav-item">
            //         <a class="nav-link" href="#/product">Sản Phẩm</a>
            //       </li>
            //       <li class="nav-item">
            //         <a class="nav-link" href="#/aboutus">Về Chúng Tôi</a>
            //       </li>
            
            //       <li class="nav-item dropdown">
            //         <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
            //           aria-haspopup="true" aria-expanded="false">Liên hệ</a>
            //         <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
            //           <a class="dropdown-item" href="#">Facebook</a>
            //           <a class="dropdown-item" href="#">Zalo</a>
            //           <a class="dropdown-item" href="#">Địa Chỉ</a>
            //         </div>
            //       </li>
            
            //     </ul>
            
            //     <form class="form-inline">
            //       <div class="md-form my-0">
            //         <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
            //       </div>
            //     </form>
            //   </div>
            
            // </nav>
            // </>
            <React.Fragment>
            {/* Start Top Header */}
            <div className="top-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-lg-7">
                            <div className="address-bar">
                                <ul className="list-inline">
                                    <li><a href={this.props.mailLink}><Icofont icon="icofont-email"/> {this.props.mail}</a></li>
                                    <li><a href={this.props.numberLink}><Icofont icon="icofont-ui-call" /> {this.props.Number}</a></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="col-lg-5 col-md-5">
                            <div className="social-icons">
                                <ul className="list-inline">
                                    <li><a href={this.props.facebookLink} rel="noopener noreferrer" target="_blank"><Icofont icon="icofont-facebook" /></a></li>
                                    <li><a href={this.props.twitterLink} rel="noopener noreferrer" target="_blank"><Icofont icon="icofont-twitter" /></a></li>
                                    <li><a href={this.props.instagramLink} rel="noopener noreferrer" target="_blank"><Icofont icon="icofont-instagram" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Top Header */}

            <Navbar
                id="navbar"
                bg="light"
                expand="lg"
                className="navbar navbar-expand-md navbar-light"
                collapseOnSelect={true}
            >
                <Container>
                    <Navbar.Brand className="navbar-brand logo">
                        <React.Fragment>
                            <LinkContainer exact to="/">
                                <img 
                                    src={this.props.MainLogo}
                                    alt="Logo" 
                                />
                            </LinkContainer>
                        </React.Fragment>
                    </Navbar.Brand>

                    <Navbar.Brand className="navbar-brand logo-2"> 
                            <React.Fragment>
                               <LinkContainer exact to="/">
                                    <img 
                                        className="img-fluid" 
                                        src={this.props.Logo2}
                                        alt="Logo"
                                    />
                                </LinkContainer>
                            </React.Fragment>
                    </Navbar.Brand>

                    <Navbar.Toggle 
                        className="navbar-toggler" 
                        type="button" data-toggle="collapse" 
                        data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation" 
                        id="collaspe-btn"
                    />
                    <Navbar.Collapse 
                        id="navbarSupportedContent"
                    >
                        <Nav className="navbar-nav mr-auto">
                        {this.props.pageName === "home" ? (
                            <React.Fragment>
                                <Nav.Item>
                                    <Link
                                        activeclass="active"
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        offset={-200}
                                        duration={800}
                                        className="smooths nav-link"
                                        onClick={this.closeNavbar}
                                    >
                                        Trang Chủ
                                    </Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Link
                                        activeclass="active"
                                        to="services"
                                        spy={true}
                                        smooth={true}
                                        offset={-200}
                                        duration={800}
                                        className="nav-link"
                                        onClick={this.closeNavbar}
                                    >
                                        Khóa Học
                                    </Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Link
                                        activeclass="active"
                                        to="works"
                                        spy={true}
                                        smooth={true}
                                        offset={-200}
                                        duration={800}
                                        className="nav-link"
                                        onClick={this.closeNavbar}
                                    >
                                        Sản Phẩm
                                    </Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Link
                                        activeclass="active"
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={-200}
                                        duration={800}
                                        className="nav-link"
                                        onClick={this.closeNavbar}
                                    >
                                        Về Chúng Tôi
                                    </Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Link
                                        activeclass="active"
                                        to="team"
                                        spy={true}
                                        smooth={true}
                                        offset={-200}
                                        duration={800}
                                        className="nav-link"
                                        onClick={this.closeNavbar}
                                    >
                                        Giảng Viên
                                    </Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Link
                                        activeclass="active"
                                        to="blog"
                                        spy={true}
                                        smooth={true}
                                        offset={-200}
                                        duration={800}
                                        className="nav-link"
                                        onClick={this.closeNavbar}
                                    >
                                        Blog
                                    </Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Link
                                        activeclass="active"
                                        to="pricing"
                                        spy={true}
                                        smooth={true}
                                        offset={-200}
                                        duration={800}
                                        className="nav-link"
                                        onClick={this.closeNavbar}
                                    >
                                        Pricing
                                    </Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Link
                                        activeclass="active"
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                        offset={-200}
                                        duration={800}
                                        className="nav-link"
                                        onClick={this.closeNavbar}
                                    >
                                        Liên Hệ
                                    </Link>
                                </Nav.Item>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <Nav.Item>
                                    <NavLink
                                        to="/"
                                        className="nav-link"
                                        activeClassName=""
                                    >
                                        Trang Chủ
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item>
                                    <NavLink
                                        to="/"
                                        className="nav-link"
                                        activeClassName=""
                                    >
                                        Khóa Học
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item>
                                    <NavLink
                                        to="/"
                                        className="nav-link"
                                        activeClassName=""
                                    >
                                        Sản Phẩm
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item>
                                    <NavLink
                                        to="/"
                                        className="nav-link"
                                        activeClassName=""
                                    >
                                        Về Chúng Tôi
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item>
                                    <NavLink
                                        to="/"
                                        className="nav-link"
                                        activeClassName=""
                                    >
                                        Giảng Viên
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item>
                                    <NavLink
                                        to="/"
                                        className="nav-link"
                                        activeClassName=""
                                    >
                                        Blog
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item>
                                    <NavLink
                                        to="/"
                                        className="nav-link"
                                        activeClassName=""
                                    >
                                        Lịch
                                    </NavLink>
                                </Nav.Item>

                                <Nav.Item>
                                    <NavLink
                                        to="/"
                                        className="nav-link"
                                        activeClassName=""
                                    >
                                        Liên Hệ
                                    </NavLink>
                                </Nav.Item>
                            </React.Fragment>
                        )}
                        </Nav>
                    </Navbar.Collapse>
                    
                    <div className="header-search">
                        {/* <SearchModal /> */}
                    </div>
                </Container>
            </Navbar>
        </React.Fragment>
        );
    }

}
Header.propTypes = {
  mailLink: PropTypes.string,
  mail: PropTypes.string,
  numberLink: PropTypes.string,
  Number: PropTypes.string,
  facebookLink: PropTypes.string,
  twitterLink: PropTypes.string,
  instagramLink: PropTypes.string,
  linkedinLink: PropTypes.string,
  MainLogo: PropTypes.string,
  Logo2: PropTypes.string,
};
Header.defaultProps = {
  MainLogo: require('../../images/logo01.png'),
  Logo2: require('../../images/logo01.png'),
  mailLink: "mailto:laihoangdo0506@gmail.com",
  mail: "laihoangdo@gmail.com",
  numberLink: "callto:+84972268792",
  Number: "+84972268792",
  facebookLink: "//facebook.com/Thiết-Kế-Đồ-Hoạ-2604857046301739/",
  twitterLink: "//facebook.com/Thiết-Kế-Đồ-Hoạ-2604857046301739/",
  instagramLink: "//facebook.com/Thiết-Kế-Đồ-Hoạ-2604857046301739/",
};