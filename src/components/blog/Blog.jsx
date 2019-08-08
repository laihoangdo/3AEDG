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
    fetchBlog(){
    // ,{ method: 'get', mode: 'no-cors',headers: {
    //         'Access-Control-Allow-Origin':'*'
    //     } }
        fetch(`https://nodejssalesforce.herokuapp.com/blogs` , {method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }} ).then(res => res.json())
            .then(data => {
                console.log('data' , data);
                this.setState({blogList:data})
            })
    }
    callApi = async () => {
        const response = await fetch('https://nodejssalesforce.herokuapp.com/blogs');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        console.log('res' , body);
        console.log(body.records);
        this.setState({blogList:body.records});
        return body;
    };
    componentWillMount() {
        // const {fetchBlogs} = this.props;
        // this.fetchBlogs();
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
        // const blogdata = this.props.blogsData.map((blog, index) => (
        //     <div className="col-md-6 col-lg-6" key={index}>
        //         <div className="blog-item">
        //             <Link to={blog.postLink} className="blog-img"><img src={blog.postImage} alt="blog-one" /></Link>
        //             <div className="blog-info">
        //                 <div className="date-box">
        //                     {blog.date} <span className="month">{blog.month}</span>
        //                 </div>
        //                 <div className="title-meta">
        //                     <h2><Link to={blog.postLink}>{blog.posttitle}</Link></h2>
        //                     <div className="post-meta">
        //                         <ul>
        //                             <li><Icofont icon="icofont-funky-man" /> Posted By: <Link to={blog.authorLink}>{blog.authorName}</Link></li>
        //                             <li><Icofont icon="icofont-speech-comments" /> Comments: <Link to={blog.CommentsLink}>{blog.TotalComments}</Link></li>
        //                             <li><Icofont icon="icofont-tags" /> Tags: <Link to={blog.TagLink}>{blog.TagName}</Link></li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="post-content">
        //                 <p>{blog.postContent}</p>
        //             </div>
        //         </div>
        //     </div>
        // ));
        const blogdata = blogList.map((blog, index) => (
            <div className="col-md-6 col-lg-6" key={index}>
                <div className="blog-item">
                    <Link to={{pathname: `blog-posts/${blog.Id}`}} className="blog-img"><img src={blog.Image__c} alt="blog-one" />
                    <div className="blog-info">
                        <div className="date-box">
                            4<span className="month">5</span>
                        </div>
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
                    </Link>
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
    blogsData: PropTypes.array
};

//Default Props
Blog.defaultProps = {
    SectionbgTitle: "Blog",
    sectionTitle: "Blog Của Chúng tôi",
    sectionDescription:
        "Góc chia sẻ kinh nghiệm học tập và những bài thực hành hay.",
    btnLink: "/blog-one",
    BlogBtn: "Tất cả",
    blogsData: [
        {
            postImage: require("../../images/design-01.jpg"),
            postLink: "/blog-details",
            date: "25",
            month: "Feb",
            posttitle: "14 ridiculously cool websites you never know.",
            postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.",
            authorName: "Jone",
            authorLink: "/#0",
            TotalComments: "06",
            CommentsLink: "/#0",
            TagName: "lifestyle",
            TagLink: "/#0",
        },
        {
            postImage: require("../../images/design-01.jpg"),
            postLink: "/blog-details",
            date: "10",
            month: "Feb",
            posttitle: "10 hot marketing trends you need.",
            postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.",
            authorName: "Jone",
            authorLink: "/#0",
            TotalComments: "06",
            CommentsLink: "/#0",
            TagName: "lifestyle",
            TagLink: "/#0",
        },
        {
            postImage: require("../../images/design-01.jpg"),
            postLink: "/blog-details",
            date: "30",
            month: "Jan",
            posttitle: "10 reasons you need a digital marketing strategy in 2019",
            postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.",
            authorName: "Jone",
            authorLink: "/#0",
            TotalComments: "06",
            CommentsLink: "/#0",
            TagName: "lifestyle",
            TagLink: "/#0",
        },
        {
            postImage: require("../../images/design-01.jpg"),
            postLink: "/blog-details",
            date: "20",
            month: "Jan",
            posttitle: "How to build a programming career.",
            postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.",
            authorName: "Jone",
            authorLink: "/#0",
            TotalComments: "06",
            CommentsLink: "/#0",
            TagName: "lifestyle",
            TagLink: "/#0",
        },

    ]
};