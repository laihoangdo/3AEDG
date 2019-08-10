import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import Icofont from 'react-icofont';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchBlogsAction} from "../../store/blog/action";

// const mapStateToProps = state => ({
//     // blogs: fetchBlogs(state),
// })
function mapStateToProps(state) {
    return {
        blogs: state.blogs.blogs,
    }
}

// const mapDispatchToProps = dispatch => bindActionCreators({
//     fetchBlogs: fetchBlogs
// }, dispatch)
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchBlogsAction,
    }, dispatch);
}

export default
@connect(mapStateToProps, mapDispatchToProps)
class Blog extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            blogList : null
        }
    }
    callApi = async () => {
    // { method: 'get', mode: 'no-cors',headers: { 'Access-Control-Allow-Origin':'*',  'Content-Type': 'application/json'} }
        const response = await fetch('https://nodejssalesforce.herokuapp.com/blogs' , { method: 'GET' ,mode: 'cors' ,Headers: {'Access-Control-Allow-Origin':'*', 'Content-Type': 'application/json'} });
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        this.setState({blogList:body.records});
        return body;
    };
    componentWillMount() {
        this.callApi();
    }
    componentDidMount() {
        // this.callApi();
        let scrollWithOffset = (el, offset) => {
            const elementPosition = el.offsetTop - offset;
            window.scroll({
                top: elementPosition,
                left: 0,
                behavior: "smooth"
            });
        };
        this.setState({ scrollWithOffset });
    }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if(prevProps.blogs !== this.props.blogs){
    //         this.callApi();
    //     }
    // }
    render() {
        //Blog loop start
        const {blogList} = this.state;
        if(!blogList){
            return(
                <div>loading</div>
            )
        }
        console.log('blogs' , blogList);
        const blogdata = blogList.map((blog, index) => (
            <div className="col-md-6 col-lg-6" key={index}>
                <div className="blog-item">
                    <Link to={{pathname: `blog-posts/${blog.Id}`}} className="blog-img"><img src={blog.Image__c} alt="blog-one" /></Link>
                    <div className="blog-info">
                        {/*<div className="date-box">*/}
                            {/*4<span className="month">5</span>*/}
                        {/*</div>*/}
                        <div className="title-meta">
                            <h2><Link to={{pathname: `blog-posts/${blog.Id}`}}>{blog.Tittle__c}</Link></h2>
                            <div className="post-meta">
                                <ul>
                                    <li><Icofont icon="icofont-funky-man" /> Posted By: <Link to={blog.Author__c}>{blog.Author__c}</Link></li>
                                    <li><Icofont icon="icofont-speech-comments" /> Comments: <Link to={blog.Author__c}>{blog.Author__c}</Link></li>
                                    <li><Icofont icon="icofont-tags" /> Tags: <Link to={blog.Tag__c}>{blog.Tag__c}</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="post-content">
                        <div className="p-hint" dangerouslySetInnerHTML={{ __html: blog.Content__c }} />
                        {/*<p>{blog.Content__c}</p>*/}
                    </div>
                </div>
            </div>
        ));
        //Blog loop END
        return (
            <React.Fragment>
                <section id="blog" className="our-blog ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <ScrollAnimation animateIn="fadeInUp">
                                    <div className="section-title">
                                        <h2>{this.props.sectionTitle}</h2>
                                        <h3>{this.props.sectionDescription}</h3>
                                        <span className="section-title-bg">{this.props.SectionbgTitle}</span>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>

                        <div className="row">
                            {blogdata}
                            <div className="col-lg-12 col-md-12 all-post">
                                <div className="center-wrap">
                                    <Link to={{pathname: `blog-posts/${this.props.Id}`}} className="btn-a">
                                        <div className="button">
                                            {this.props.BlogBtn} <Icofont icon="icofont-long-arrow-right" />
                                            <div className="mask"></div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
//Props Types
Blog.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    btnLink: PropTypes.string,
    BlogBtn: PropTypes.string,
};

//Default Props
Blog.defaultProps = {
    SectionbgTitle: "Tin Tức",
    sectionTitle: "Tin Tức Từ Đồ Họa Anh Em",
    sectionDescription:
        "Góc chia sẻ kinh nghiệm học tập và những bài thực hành hay.",
    btnLink: "/blog-one",
    BlogBtn: "Tất cả"
};