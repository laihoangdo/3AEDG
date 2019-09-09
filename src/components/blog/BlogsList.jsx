// import React, {PureComponent } from 'react';
// import PropTypes from "prop-types";
// import Icofont from 'react-icofont';
// import { Link } from 'react-router-dom';
// import Header from "../header";
// import Footer from "../footer";
// import {fetchBlogsAction} from "../../store/blog/action";
// import connect from "react-redux/es/connect/connect";
//
// function mapStateToProps(state) {
//     console.log('state.blogs.blogs', state.blog.blogs);
//     return {
//         blogs: state.blog.blogs.records,
//     }
// }
// const mapDispatchToProps = {
//     fetchBlogs : fetchBlogsAction
// };
//
// export default
// @connect(mapStateToProps, mapDispatchToProps)
// class BlogList extends PureComponent {
//     constructor(props) {
//         super(props);
//         this.state = {
//             blogList : null
//         }
//     }
//     componentWillMount() {
//         // this.callApi();
//         this.props.fetchBlogs();
//     }
//     render() {
//         //BlogList loop start
//         if(!this.props.blogs){
//             return(
//                 <div>loading</div>
//             )
//         }
//         const blogdata = this.props.blogs.map((blog, index) => (
//         // const blogdata = this.props.blogsData.map((blog, index) => (
//             <div className="col-md-6 col-lg-6" key={index}>
//                 <div className="blog-item">
//                     <Link to={blog.postLink} className="blog-img"><img src={blog.Image__c} alt="blog-one" /></Link>
//                     <div className="blog-info">
//                         <div className="date-box">
//                             {blog.date} <span className="month">{blog.month}</span>
//                         </div>
//                         <div className="title-meta">
//                             <h2><Link to={{pathname: `${blog.Id}`}}>{blog.Tittle__c}</Link></h2>
//                             <div className="post-meta">
//                                 <ul>
//                                     <li><Icofont icon="icofont-funky-man" /> Posted By: <Link to={blog.Author__c}>{blog.Author__c}</Link></li>
//                                     <li><Icofont icon="icofont-speech-comments" /> Comments: <Link to={blog.Author__c}>{blog.Author__c}</Link></li>
//                                     <li><Icofont icon="icofont-tags" /> Tags: <Link to={blog.Tag__c}>{blog.Tag__c}</Link></li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="post-content">
//                         <div className="p-hint" dangerouslySetInnerHTML={{ __html: blog.Content__c }} />
//                         {/*<p>{blog.Content__c}</p>*/}
//                     </div>
//                 </div>
//             </div>
//         ));
//         //BlogList loop END
//         return (
//             <React.Fragment>
//
//                 {/*NavBar: src/components/NavBer.jsx */}
//                 <Header/>
//
//                 <div className="bread-cumbs-area bread-cumbs-bg">
//                     <div className="diplay-table">
//                         <div className="display-table-cell">
//                             <div className="container">
//                                 <div className="row">
//                                     <div className="col-lg-7">
//                                         <h1>{this.props.Title}</h1>
//                                         <p>{this.props.Content}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//
//                 <section id="blog" className="our-blog main-blog">
//                     <div className="container">
//                         <div className="row">
//                             {blogdata}
//                             <div className="col-lg-12 pagination-area text-center">
//                                 <ul className="pagination">
//                                     <li><Link to="/#0"><Icofont icon="icofont-simple-left" /> Prev</Link></li>
//                                     <li className="active"><Link to="/#0">1</Link></li>
//                                     <li><Link to="/#0">2</Link></li>
//                                     <li><Link to="/#0">3</Link></li>
//                                     <li><Link to="/#0">Next <Icofont icon="icofont-simple-right" /></Link></li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//
//                 {/*Footer: src/components/Footer.jsx */}
//                 <Footer/>
//
//             </React.Fragment>
//         );
//     }
// }
// //Props Types
// BlogList.propTypes = {
//     Title: PropTypes.string,
//     Content: PropTypes.string,
// };
//
// //Default Props
// BlogList.defaultProps = {
//     Title: "Our Blog",
//     Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet."
// };




import React, {PureComponent , useState, useEffect } from 'react';
import axios from 'axios';
import Posts from "./post";



const BlogList = () =>{

const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(false);
const [currentPage , setCurrentPage] = useState(1);

const [postPerPage , setPostPerPage] = useState(10)

useEffect(() =>{
    const fetchPosts = async () =>{
        setLoading(true);
        // const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const res = await axios.get('https://nodejssalesforce.herokuapp.com/blogs');
        setPosts(res.data.records);
        setLoading(false);
    }
    fetchPosts();
} , []);

//get current post

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
console.log('post' , posts);
return (
    <div className="">
        <Posts posts={currentPosts} loading={false}/>
    </div>
)
};

export default BlogList;
