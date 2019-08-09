import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import Icofont from 'react-icofont';
import { Link } from 'react-router-dom';
// import html from 'react-inner-html';
import Sidebar from "./Sidebar"; 
import Header from '../header';
import Footer from '../footer';

export default class Single extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            blogDetail : {},
        }
    }
    componentWillMount(){
        this.callApi(this.props.match.params.id);
    }
    callApi = async (id) => {
        const response = await fetch('https://nodejssalesforce.herokuapp.com/blogs/' + id);
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        console.log('res' , body);
        this.setState({blogDetail:body});
    };
    render() {
        console.log('render');
        console.log('blog detail' , this.state.blogDetail);
        // Id ,Name ,Author__c , Author_Link_Social__c, Tag__c
        const { Image__c, Content__c , Tittle__c } = this.state.blogDetail;
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
                                                        {/*<li><strong>Đồ Họa Anh Em : </strong></li>*/}
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
                                                    <li><strong>Đồ Họa Anh Em : </strong></li>
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
    SingleTitle: PropTypes.string,
    SingleDate: PropTypes.string,
    SingleMonth: PropTypes.string,
    authorLink: PropTypes.string,
    authorName: PropTypes.string,
    CommentsLink: PropTypes.string,
    TotalComments: PropTypes.string,
    TagLink: PropTypes.string,
    TagName: PropTypes.string,
    PostContent: PropTypes.string,
    FacebookLink: PropTypes.string,
    TwitterLink: PropTypes.string,
    InstagramLink: PropTypes.string,
    linkedinLink: PropTypes.string,

};

//Default Props
Single.defaultProps = {
    Title: "Blog Details",
    Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",
    SingleImage: require("../../images/design-01.jpg"),
    SingleTitle: "Risus commodo viverra mae.",
    SingleDate: "10",
    SingleMonth: "Mar",
    authorLink: "/#0",
    authorName: "Jone",
    CommentsLink: "/#0",
    TotalComments: "545",
    TagLink: "/#0",
    TagName: "Business",
    PostContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
    FacebookLink: "https://www.facebook.com/Thi%E1%BA%BFt-K%E1%BA%BF-%C4%90%E1%BB%93-Ho%E1%BA%A1-2604857046301739/",
    TwitterLink: "https://www.facebook.com/Thi%E1%BA%BFt-K%E1%BA%BF-%C4%90%E1%BB%93-Ho%E1%BA%A1-2604857046301739/",
    InstagramLink: "https://www.facebook.com/Thi%E1%BA%BFt-K%E1%BA%BF-%C4%90%E1%BB%93-Ho%E1%BA%A1-2604857046301739/",
    linkedinLink: "https://www.facebook.com/Thi%E1%BA%BFt-K%E1%BA%BF-%C4%90%E1%BB%93-Ho%E1%BA%A1-2604857046301739/",

}
