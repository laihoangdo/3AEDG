import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import Icofont from 'react-icofont';
import { Link } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';
import {fetchBlogDetail, fetchBlogsAction} from "../../store/blog/action";
import {connect} from "react-redux";
import CourseSidebar from "../services/CourseSidebar";




function mapStateToProps(state) {
    return {
        blogDetail: state.blog.blogDetail,
    }
}
const mapDispatchToProps = {
    fetchBlogDetail : fetchBlogDetail
};

export default
@connect(mapStateToProps, mapDispatchToProps)
class Single extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            blogDetail : {},
        }
    }
    componentWillMount(){
        // this.callApi(this.props.match.params.id);
        this.props.fetchBlogDetail(this.props.match.params.id);
    }
    // callApi = async (id) => {
    //     const response = await fetch('https://nodejssalesforce.herokuapp.com/blogs/' + id);
    //     const body = await response.json();
    //     if (response.status !== 200) throw Error(body.message);
    //     console.log('res' , body);
    //     this.setState({blogDetail:body});
    // };
    render() {
        // Id ,Name ,Author__c , Author_Link_Social__c, Tag__c
        // const { Image__c, Content__c , Tittle__c } = this.state.blogDetail;
        const { Image__c, Content__c , Tittle__c } = this.props.blogDetail;
        return (
            <React.Fragment>
                <Header/>
                {/* <div className="bread-cumbs-area bread-cumbs-bg">
                    <div className="diplay-table">
                        <div className="display-table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-7">
                                    <h1>{this.props.Title}</h1>
                                    <p>{this.props.Content}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  */}
                <section id="blog" className="our-blog main-blog">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="row line-opacity">
                                    <div className="col-lg-12">
                                        <div className="blog-details">
                                            <div className="post-img">
                                                <img src={Image__c} alt="blog-one" />
                                            </div>
                                            
                                            <div className="blog-info">
                                                {/*<div className="date-box">*/}
                                                {/*{this.props.SingleDate} <span className="month">{this.props.SingleMonth}</span>*/}
                                                {/*</div>*/}
                                                <div className="title-meta">
                                                    <h2>{Tittle__c}</h2>
                                                    <div className="post-meta">
                                                        <ul>
                                                            <li>Posted By: <Link to={this.props.authorLink}>{this.props.authorName}</Link> <Icofont icon="icofont-funky-man" /></li>
                                                            <li>Comments: <Link to={this.props.CommentsLink}>{this.props.TotalComments}</Link> <Icofont icon="icofont-speech-comments" /> </li>
                                                            <li> Tags: <Link to={this.props.TagLink}>{this.props.TagName}</Link> <Icofont icon="icofont-tags" /></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                
                                            <div className="post-content">
                                                <div dangerouslySetInnerHTML={{ __html: Content__c }} />
                                                
                                                {/*<div className="sharing-link">*/}
                                                    {/*<ul>*/}
                                                        {/*<li><strong>Đồ Họa Thế Hệ Mới : </strong></li>*/}
                                                        {/*<li><a href={this.props.TwitterLink} rel="noopener noreferrer" target="_blank"><Icofont icon="icofont-facebook" /></a></li>*/}
                                                        {/*<li><Link to={this.props.TwitterLink}><Icofont icon="icofont-twitter" /></Link></li>*/}
                                                        {/*<li><Link to={this.props.InstagramLink}><Icofont icon="icofont-instagram"/></Link></li>*/}
                                                        {/*<li><Link to={this.props.linkedinLink}><Icofont icon="icofont-linkedin"/></Link></li>*/}
                                                    {/*</ul>*/}
                                                {/*</div>*/}
                                            </div>
                                            <div className="fb-post"
                                                 data-href="https://www.facebook.com/2604857046301739/photos/a.2645051658948944/2645166245604152/?type=3&amp;theater"
                                                 data-width="500" data-show-text="true">
                                                <blockquote
                                                    cite="https://www.facebook.com/2604857046301739/photos/a.2645051658948944/2645166245604152/?type=3&amp;theater"
                                                    className="fb-xfbml-parse-ignore"><p>Thân gửi &amp; cảnh báo cho các
                                                    bạn học viên !!!

                                                    Phần mềm Photoshop, iLLustrator, Corel Draw, Indesign là các phầm
                                                    mềm...</p>Người đăng: <a
                                                    href="https://www.facebook.com/Thi&#x1ebf;t-K&#x1ebf;-&#x110;&#x1ed3;-Ho&#x1ea1;-2604857046301739/" target="_blank">Thiết
                                                    Kế Đồ Hoạ</a> vào&nbsp;<a
                                                    href="https://www.facebook.com/2604857046301739/photos/a.2645051658948944/2645166245604152/?type=3&amp;theater" target="_blank">Thứ
                                                    Hai, 29 tháng 7, 2019</a></blockquote>
                                            </div>
                                            <div className="sharing-link">
                                                <ul>
                                                    <li><strong>Đồ Họa Thế Hệ Mới : </strong></li>
                                                    <li><a href={this.props.TwitterLink} rel="noopener noreferrer" target="_blank"><Icofont icon="icofont-facebook" /></a></li>
                                                </ul>
                                            </div>
                                            
                                            {/* <Comments /> */}
                                            
                                            {/*<div className="comments-form">*/}
                                            {/*    <h3 className="comments-title">Leave a Comments</h3>*/}
                                            {/*    <form>*/}
                                            {/*        <div className="form-group">*/}
                                            {/*            <input type="text" className="form-control" id="name" placeholder="Your Name" />*/}
                                            {/*        </div>*/}
                                            {/*        <div className="form-group">*/}
                                            {/*            <input type="email" className="form-control" id="email_address" placeholder="Your Email" />*/}
                                            {/*        </div>*/}
                                            {/*        <div className="form-group">*/}
                                            {/*            <textarea className="form-control" rows="5" placeholder="Type here..." />*/}
                                            {/*        </div>*/}
                                            {/*        <div className="text-center">*/}
                                            {/*            <div className="button">*/}
                                            {/*                <Link to="/#0">Submit Comment</Link>*/}
                                            {/*                <div className="mask"></div>*/}
                                            {/*            </div>*/}
                                            {/*        </div>*/}
                                            {/*    </form>*/}
                                            {/*</div>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*<Sidebar />*/}
                            <CourseSidebar tagsData={this.props.tagsData} />

                        </div>
                    </div>
                </section>
                <Footer/>
            </React.Fragment>
        );
    }
}
Single.propTypes = {
    Title: PropTypes.string,
    Content: PropTypes.string,
    SingleImage:PropTypes.string,
    SingleDate: PropTypes.string,
    SingleMonth: PropTypes.string,
    authorLink: PropTypes.string,
    authorName: PropTypes.string,
    CommentsLink: PropTypes.string,
    TotalComments: PropTypes.string,
    TagLink: PropTypes.string,
    TagName: PropTypes.string,
    FacebookLink: PropTypes.string,
    TwitterLink: PropTypes.string,
    InstagramLink: PropTypes.string,
    linkedinLink: PropTypes.string,
    servicesData :PropTypes.array,
    tagsData : PropTypes.array

};

//Default Props
Single.defaultProps = {
    Title: "Blog Details",
    Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",
    SingleImage: require("../../images/design-01.jpg"),
    SingleDate: "10",
    SingleMonth: "Mar",
    authorLink: "/#0",
    authorName: "Jone",
    CommentsLink: "/#0",
    TotalComments: "545",
    TagLink: "/#0",
    TagName: "Business",
    FacebookLink: "https://www.facebook.com/Thi%E1%BA%BFt-K%E1%BA%BF-%C4%90%E1%BB%93-Ho%E1%BA%A1-2604857046301739/",
    TwitterLink: "https://www.facebook.com/Thi%E1%BA%BFt-K%E1%BA%BF-%C4%90%E1%BB%93-Ho%E1%BA%A1-2604857046301739/",
    InstagramLink: "https://www.facebook.com/Thi%E1%BA%BFt-K%E1%BA%BF-%C4%90%E1%BB%93-Ho%E1%BA%A1-2604857046301739/",
    linkedinLink: "https://www.facebook.com/Thi%E1%BA%BFt-K%E1%BA%BF-%C4%90%E1%BB%93-Ho%E1%BA%A1-2604857046301739/",
    tagsData: [
        {
            tagName: "Lớp học Photoshop tại Tp Hồ Chí Minh",
        },
        {
            tagName: "học Photoshop tại Tp Hồ Chí Minh",
        },
        {
            tagName: "Khóa học Photoshop tại Tp Hồ Chí Minh",
        },
        {
            tagName: "Lop hoc photoshop tai sai gon",
        },
        {
            tagName: "hoc Photoshop tai Hồ Chí Minh",
        },
        {
            tagName: "khoa hoc Photoshop tại Sai Gon",
        }
    ],


}
