import React,{PureComponent} from 'react';
import PropTypes from "prop-types";
import Icofont from 'react-icofont';
import { Link } from 'react-router-dom';
import './footer.css';

export default class  Footer extends PureComponent {
    render(){
        return(
        //     <div>
        //         <footer className="footer-section spad pb-0">

        //   </footer>
        //     </div>
        <React.Fragment>
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <p className="copyright">{this.props.copyrightText}</p>
                            </div>
                            <div className="col-md-7">
                                <div className="social-icons bottom">
                                    <ul className="list-inline">
                                        <li>{this.props.socialTitle} </li>
                                        <li><a href={this.props.FacebookLink} rel="noopener noreferrer" target="_blank"><Icofont icon="icofont-facebook" /></a></li>
                                        {/* <li><Link to={this.props.FacebookLink}><Icofont icon="icofont-facebook"/></Link></li> */}
                                        <li><Link to={this.props.TwitterLink}><Icofont icon="icofont-twitter"/></Link></li>
                                        <li><Link to={this.props.InstagramLink}><Icofont icon="icofont-instagram"/></Link></li>
                                        <li><Link to={this.props.linkedinLink}><Icofont icon="icofont-linkedin"/></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/*<div className="footer-top">*/}
                        {/*<div className="footer-warp">*/}
                            {/*<div className="row">*/}
                                {/*<div className="widget-item">*/}
                                    {/*<h4>Contact Info</h4>*/}
                                    {/*<ul className="contact-list">*/}
                                        {/*<li>1481 Creekside Lane Avila Beach, CA 931</li>*/}
                                        {/*<li>+53 345 7953 32453</li>*/}
                                        {/*<li>yourmail@gmail.com</li>*/}
                                    {/*</ul>*/}
                                {/*</div>*/}
                                {/*<div className="widget-item">*/}
                                    {/*<h4>Engeneering</h4>*/}
                                    {/*<ul>*/}
                                        {/*<li><a href="">Applied Studies</a></li>*/}
                                        {/*<li><a href="">Computer Engeneering</a></li>*/}
                                        {/*<li><a href="">Software Engeneering</a></li>*/}
                                        {/*<li><a href="">Informational Engeneering</a></li>*/}
                                        {/*<li><a href="">System Engeneering</a></li>*/}
                                    {/*</ul>*/}
                                {/*</div>*/}
                                {/*<div className="widget-item">*/}
                                    {/*<h4>Graphic Design</h4>*/}
                                    {/*<ul>*/}
                                        {/*<li><a href="">Applied Studies</a></li>*/}
                                        {/*<li><a href="">Computer Engeneering</a></li>*/}
                                        {/*<li><a href="">Software Engeneering</a></li>*/}
                                        {/*<li><a href="">Informational Engeneering</a></li>*/}
                                        {/*<li><a href="">System Engeneering</a></li>*/}
                                    {/*</ul>*/}
                                {/*</div>*/}
                                {/*<div className="widget-item">*/}
                                    {/*<h4>Development</h4>*/}
                                    {/*<ul>*/}
                                        {/*<li><a href="">Applied Studies</a></li>*/}
                                        {/*<li><a href="">Computer Engeneering</a></li>*/}
                                        {/*<li><a href="">Software Engeneering</a></li>*/}
                                        {/*<li><a href="">Informational Engeneering</a></li>*/}
                                        {/*<li><a href="">System Engeneering</a></li>*/}
                                    {/*</ul>*/}
                                {/*</div>*/}
                                {/*<div className="widget-item">*/}
                                    {/*<h4>Newsletter</h4>*/}
                                    {/*<form className="footer-newslatter">*/}
                                        {/*<input type="email" placeholder="E-mail"></input>*/}
                                        {/*<button className="site-btn">Subscribe</button>*/}
                                        {/*<p>*We don’t spam</p>*/}
                                    {/*</form>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div className="footer-bottom">*/}
                        {/*<div className="footer-warp">*/}
                            {/*<ul className="footer-menu">*/}
                                {/*<li><a href="#">Terms & Conditions</a></li>*/}
                                {/*<li><a href="#">Register</a></li>*/}
                                {/*<li><a href="#">Privacy</a></li>*/}
                            {/*</ul>*/}
                            {/*<div*/}
                                {/*className="copyright">*/}
                                {/*Copyright &copy;*/}
                                {/*<script>document.write(new Date().getFullYear());</script>*/}
                                {/*All rights reserved | This template is made with <i className="fa fa-heart-o"*/}
                                                                                    {/*aria-hidden="true"></i> by <a*/}
                                {/*href="https://Google.com" target="_blank">Hoàng Đô</a>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                </footer>
            </React.Fragment>
        )
    }

}
//Props Types
Footer.propTypes = {
    copyrightText: PropTypes.string,
    FacebookLink: PropTypes.string,
    TwitterLink: PropTypes.string,
    InstagramLink: PropTypes.string,
    linkedinLink: PropTypes.string,
};

//Default Props
Footer.defaultProps = {
    copyrightText: "2019 © All Rights Reserved.",
    socialTitle: "Follow Us On:",
    FacebookLink: "//facebook.com/Thi%E1%BA%BFt-K%E1%BA%BF-%C4%90%E1%BB%93-Ho%E1%BA%A1-2604857046301739/",
    TwitterLink: "/#0",
    InstagramLink: "/#0",
    linkedinLink: "/#0",
};