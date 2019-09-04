
import React,{PureComponent}  from 'react';
import PropTypes from 'prop-types';
import Icofont from 'react-icofont';
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container, Nav } from "react-bootstrap";
import './header.css';

export default class  Header extends PureComponent {

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
            <React.Fragment>
            {/* Start Top Header */}
            <div className="top-header">
                <div className="container">
                    <div className="row row-tab">
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
                        {/*<div>*/}
                        <div className="col-md-5 header-padding">
                            <h3 className="h2-header">TRUNG TÂM ĐÀO TẠO ĐỒ HỌA THẾ HỆ MỚI</h3>
                            <h4>Đào Tạo Đồ Họa 2D - 3D</h4>
                        </div>
                        <div className="col-md-3 header-padding-social">
                            {/*<div className="address-bar">*/}
                                <ul className="list-inline">
                                    <li><a href={this.props.mailLink}><Icofont icon="icofont-email icofont-1x"/> {this.props.mail}</a></li>
                                    <li><a href={this.props.numberLink}><Icofont icon="icofont-ui-call icofont-1x" /> {this.props.Number}</a></li>
                                </ul>
                            {/*</div>*/}
                        </div>
                        
                        <div className="col-md-2 header-padding-social">
                            <div className="social-icons">
                                <ul className="list-inline">
                                    <li><a href={this.props.facebookLink} rel="noopener noreferrer" target="_blank"><Icofont icon="icofont-facebook icofont-1x" /></a></li>
                                    <li><a href={this.props.instagramLink} rel="noopener noreferrer" target="_blank"><Icofont icon="icofont-facebook-messenger icofont-1x" /></a></li>
                                    <li><a href={this.props.zaloLink} rel="noopener noreferrer" target="_blank"><Icofont icon="icofont-technorati icofont-1x" /></a></li>
                                </ul>
                            </div>
                        </div>
                        {/*</div>*/}
                        {/*<Navbar.Brand className="navbar-brand logo">*/}
                        {/*    <React.Fragment>*/}
                        {/*        <LinkContainer exact to="/">*/}
                        {/*            <img*/}
                        {/*                src={this.props.MainLogo}*/}
                        {/*                alt="Logo"*/}
                        {/*            />*/}
                        {/*        </LinkContainer>*/}
                        {/*    </React.Fragment>*/}
                        {/*</Navbar.Brand>*/}
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
                    <Navbar.Brand className="navbar-brand logo logo-mobile">
                        <React.Fragment>
                            <LinkContainer exact to="/">
                                <img
                                    src={this.props.LogoMobile}
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
                                        src={this.props.LogoMobile}
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
                                        Sản Phẩm Học Viên
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
                                        Tin Tức
                                    </Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link
                                        activeclass="active"
                                        to="aboutus"
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

                                {/*<Nav.Item>*/}
                                {/*    <Link*/}
                                {/*        activeclass="active"*/}
                                {/*        to="pricing"*/}
                                {/*        spy={true}*/}
                                {/*        smooth={true}*/}
                                {/*        offset={-200}*/}
                                {/*        duration={800}*/}
                                {/*        className="nav-link"*/}
                                {/*        onClick={this.closeNavbar}*/}
                                {/*    >*/}
                                {/*        Lịch Khai Giảng*/}
                                {/*    </Link>*/}
                                {/*</Nav.Item>*/}

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
                                        Sản Phẩm Học Viên
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
                                        Tin Tức
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

                                {/*<Nav.Item>*/}
                                {/*    <NavLink*/}
                                {/*        to="/"*/}
                                {/*        className="nav-link"*/}
                                {/*        activeClassName=""*/}
                                {/*    >*/}
                                {/*        Lịch Khai Giảng*/}
                                {/*    </NavLink>*/}
                                {/*</Nav.Item>*/}

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
  zaloLink: PropTypes.string,
  instagramLink: PropTypes.string,
  linkedinLink: PropTypes.string,
  MainLogo: PropTypes.string,
  Logo2: PropTypes.string,
    LogoMobile: PropTypes.string,
};
Header.defaultProps = {
    LogoMobile: require('../../images/logo-mobile1.png'),
  MainLogo: require('../../images/logo-bigsize.png'),
  Logo2: require('../../images/logo-anhem.png'),
  mailLink: "mailto:laiquoclong90@gmail.com",
  mail: "laiquoclong90@gmail.com",
  numberLink: "callto:+84938636843",
  Number: "0938636843",
  facebookLink: "//facebook.com/Thiết-Kế-Đồ-Hoạ-2604857046301739/",
  zaloLink: "https://zalo.me/0337590737",
  instagramLink: "//www.messenger.com/t/2604857046301739",
};