import React from 'react';
import Header from "../header";
import Footer from "../footer";
import {Link} from "react-router-dom";
import {Icofont} from "react-icofont";

const Posts = ({ posts , loading}) =>{
    if(loading){
        return <h2>loading ...</h2>
    }
    console.log('post new' , posts);
    // return ( <React.Fragment> <Header/>
    //     //     {/*{posts.map(post =>(*/}
    //     //         {/*<li key={post.id}>*/}
    //     //             {/*<img src={post.Image__c} alt="blog"/>*/}
    //     //         {/*</li>*/}
    //     //     {/*))}*/}
    //     //     {posts.map(blog => (
    //     //     <div className="col-md-6 col-lg-6" key={blog.id}>
    //     //         <div className="blog-item">
    //     //             <Link to={blog.Id} className="blog-img"><img src={blog.Image__c} alt="blog-one" /></Link>
    //     //             <div className="blog-info">
    //     //                 <div className="date-box">
    //     //                     {blog.Id} <span className="month">{blog.Id}</span>
    //     //                 </div>
    //     //                 <div className="title-meta">
    //     //                     <h2><Link to={{pathname: `${blog.Id}`}}>{blog.Tittle__c}</Link></h2>
    //     //                     <div className="post-meta">
    //     //                         {/*<ul>*/}
    //     //                             {/*<li><Icofont icon="icofont-funky-man" /> Posted By: <Link to={blog.Author__c}>{blog.Author__c}</Link></li>*/}
    //     //                             {/*<li><Icofont icon="icofont-speech-comments" /> Comments: <Link to={blog.Author__c}>{blog.Author__c}</Link></li>*/}
    //     //                             {/*<li><Icofont icon="icofont-tags" /> Tags: <Link to={blog.Tag__c}>{blog.Tag__c}</Link></li>*/}
    //     //                         {/*</ul>*/}
    //     //                     </div>
    //     //                 </div>
    //     //             </div>
    //     //             <div className="post-content">
    //     //                 <div className="p-hint" dangerouslySetInnerHTML={{ __html: blog.Content__c }} />
    //     //                 {/*<p>{blog.Content__c}</p>*/}
    //     //             </div>
    //     //         </div>
    //     //     </div>
    //     //     ))};
    //     //
    //     //  <Footer/>
    //     //     </React.Fragment>)


    const blogdata = posts.map((blog, index) => (
        // const blogdata = this.props.blogsData.map((blog, index) => (
        <div className="col-md-6 col-lg-6" key={index}>
            <div className="blog-item">
                <Link to={blog.Id} className="blog-img"><img src={blog.Image__c} alt="blog-one" /></Link>
                <div className="blog-info">
                    <div className="date-box">
                        {/*{blog.Id} <span className="month">{blog.Id}</span>*/}
                    </div>
                    <div className="title-meta">
                        <h2><Link to={{pathname: `${blog.Id}`}}>{blog.Tittle__c}</Link></h2>
                        <div className="post-meta">
                            {/*<ul>*/}
                                {/*<li><Icofont icon="icofont-funky-man" /> Posted By: <Link to={blog.Author__c}>{blog.Author__c}</Link></li>*/}
                                {/*<li><Icofont icon="icofont-speech-comments" /> Comments: <Link to={blog.Author__c}>{blog.Author__c}</Link></li>*/}
                                {/*<li><Icofont icon="icofont-tags" /> Tags: <Link to={blog.Tag__c}>{blog.Tag__c}</Link></li>*/}
                            {/*</ul>*/}
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
    return (
        <React.Fragment>

            {/*NavBar: src/components/NavBer.jsx */}
            <Header/>



            <section id="blog" className="our-blog main-blog">
                <div className="container">
                    <div className="row">
                        {blogdata}
                        <div className="col-lg-12 pagination-area text-center">
                            {/*<ul className="pagination">*/}
                                {/*<li><Link to="/#0"><Icofont icon="icofont-simple-left" /> Prev</Link></li>*/}
                                {/*<li className="active"><Link to="/#0">1</Link></li>*/}
                                {/*<li><Link to="/#0">2</Link></li>*/}
                                {/*<li><Link to="/#0">3</Link></li>*/}
                                {/*<li><Link to="/#0">Next <Icofont icon="icofont-simple-right" /></Link></li>*/}
                            {/*</ul>*/}
                        </div>
                    </div>
                </div>
            </section>

            {/*Footer: src/components/Footer.jsx */}
            <Footer/>

        </React.Fragment>
    )
}
export default Posts;