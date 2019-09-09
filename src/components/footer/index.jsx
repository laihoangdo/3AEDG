import React,{PureComponent} from 'react';
import PropTypes from "prop-types";
import Icofont from 'react-icofont';
import './footer.css';

export default class  Footer extends PureComponent {
    render(){
        return(
        <React.Fragment>
                <footer className="footer">
                    <div className="container">
                        <div className="fb-like"
                             data-href="https://www.facebook.com/Thi%E1%BA%BFt-K%E1%BA%BF-%C4%90%E1%BB%93-Ho%E1%BA%A1-2604857046301739/"
                             data-width="300" data-layout="standard" data-action="like" data-size="small"
                             data-show-faces="true" data-share="true"></div>
                        <div className="row">
                            <div className="col-md-5">
                                <p className="copyright">{this.props.copyrightText}</p>
                            </div>
                            <div className="col-md-7">
                                <div className="social-icons bottom">
                                    <ul className="list-inline">
                                        <li>{this.props.socialTitle} </li>
                                        <li><a href={this.props.FacebookLink} rel="noopener noreferrer" target="_blank"><Icofont icon="icofont-facebook" /></a></li>
                                        <li><a href={this.props.ZaloLink} rel="noopener noreferrer" target="_blank"><Icofont icon="icofont-technorati" /></a></li>
                                        <li><a href={this.props.InstagramLink} rel="noopener noreferrer" target="_blank"><Icofont icon="icofont-instagram" /></a></li>
                                        <li><a href={this.props.linkedinLink} rel="noopener noreferrer" target="_blank"><Icofont icon="icofont-linkedin" /></a></li>
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
    ZaloLink: PropTypes.string,
    InstagramLink: PropTypes.string,
    linkedinLink: PropTypes.string,
};

//Default Props
Footer.defaultProps = {
    copyrightText: "2019 © All Rights Reserved.",
    socialTitle: "Follow Us On:",
    FacebookLink: "//facebook.com/Thi%E1%BA%BFt-K%E1%BA%BF-%C4%90%E1%BB%93-Ho%E1%BA%A1-2604857046301739/",
    ZaloLink: "https://zalo.me/0337590737",
    InstagramLink: "//facebook.com/Thi%E1%BA%BFt-K%E1%BA%BF-%C4%90%E1%BB%93-Ho%E1%BA%A1-2604857046301739/",
    linkedinLink: "//facebook.com/Thi%E1%BA%BFt-K%E1%BA%BF-%C4%90%E1%BB%93-Ho%E1%BA%A1-2604857046301739/",
};