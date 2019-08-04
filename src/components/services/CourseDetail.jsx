import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import Icofont from 'react-icofont';
import { Link } from 'react-router-dom';
// import html from 'react-inner-html';
import  './service.css';

//Import Component
import Sidebar from "./CourseSidebar";
import Header from '../header';
import Footer from '../footer';
// import Comments from "./Comment";

export default class CourseDetail extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            courseDetail : {},
        }
        // this.filterCourse = this.filterCourse.bind(this);
    }
    componentWillMount(){
        this.filterCourse(this.props.match.params.id);
    }
    filterCourse (id){
        for (let i = 0 ;  i< this.props.servicesData.length ; i++){
            if(this.props.servicesData[i].Id === id){
                this.setState({courseDetail: this.props.servicesData[i]});
                break;
            }
        }
    }
    // rawMarkup() {
    //     var md = new Remarkable();
    //     return { __html: md.render(this.state.courseDetail.Content__c) };
    // }
    // componentDidMount () {
    //     const { id } = this.props.match.params.id;
    //     console.log(' id handle' , this.props.match.params.id);
    // }
    render() {
        console.log('blog detail' , this.state.courseDetail);
        // const {Id ,Name , Image__c, Content__c , Tittle__c , Tag__c , Author__c , Author_Link_Social__c} = this.state.courseDetail;
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
                                                <img src={this.state.courseDetail.Image} alt="blog-one" />
                                            </div>

                                            <div className="blog-info">
                                                <div className="date-box">
                                                    {this.props.CourseDetailDate} <span className="month">{this.props.CourseDetailMonth}</span>
                                                </div>
                                                <div className="title-meta">
                                                    <h2>{this.state.courseDetail.heading}</h2>
                                                    <div className="post-meta">
                                                        {/*<ul>*/}
                                                        {/*    <li>Posted By: <Link to={this.props.authorLink}>{this.props.authorName}</Link> <Icofont icon="icofont-funky-man" /></li>*/}
                                                        {/*    <li>Comments: <Link to={this.props.CommentsLink}>{this.props.TotalComments}</Link> <Icofont icon="icofont-speech-comments" /> </li>*/}
                                                        {/*    <li> Tags: <Link to={this.props.TagLink}>{this.props.TagName}</Link> <Icofont icon="icofont-tags" /></li>*/}
                                                        {/*</ul>*/}
                                                        <p>Tag: Lớp học illustrator tại Sài Gòn, học illustrator tại Sài Gòn, Khóa học illustrator tại Sài Gòn, Lop hoc illutrator tai sai gon, hoc illustrator tai Hồ Chí Minh, khoa hoc illustrator tại Sai Gon.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="post-content" id="course-detail">
                                                {/*<textarea value={Content__c} ></textarea>*/}
                                                <p>{this.state.courseDetail.PostContent}</p>
                                                <h2>{this.state.courseDetail.courseStep}</h2>
                                                <img src={this.state.courseDetail.ImageStep} alt="Photoshop"/>
                                                {/*return <div dangerouslySetInnerHTML={{ __html:  }} />;*/}
                                                <div className="target-course">
                                                    <div className="target-one">
                                                        <ul>
                                                            <li>
                                                               <h4> Tại sao nên lựa chọn học thiết kế đồ họa {this.state.courseDetail.Id}?</h4>
                                                                <ul>
                                                                    <li>li do 1</li>
                                                                    <li>lí do 2</li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <h3>Kết thúc khóa học {this.state.courseDetail.Id} làm được gì? </h3>
                                                <div className="target-course">
                                                    <div className="target-one">
                                                        <ul>
                                                            <li>
                                                                <h4> Tại sao nên lựa chọn học thiết kế đồ họa {this.state.courseDetail.Id}?</h4>
                                                                <ul>
                                                                    <li>li do 1</li>
                                                                    <li>lí do 2</li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="product-student">
                                                    <h3>Sản Phẩm Học Viên Sau Khi Hoàn Thành Khóa Học {this.state.courseDetail.Id}</h3>
                                                    {this.state.courseDetail.imageWork.map((product , index) => (
                                                        <img src={product.link} alt=""/>
                                                    ))}
                                                </div>
                                                {/*<h3>Tại sao nên lựa chọn học thiết kế đồ họa adobe illustrator?</h3>*/}
                                                {/*<h3>Tại sao nên lựa chọn học thiết kế đồ họa adobe illustrator?</h3>*/}

                                                <div className="sharing-link">
                                                    <ul>
                                                        <li><strong>Shear : </strong></li>
                                                        <li><Link to={this.props.FacebookLink}><Icofont icon="icofont-facebook" /></Link></li>
                                                        <li><Link to={this.props.TwitterLink}><Icofont icon="icofont-twitter" /></Link></li>
                                                        <li><Link to={this.props.InstagramLink}><Icofont icon="icofont-instagram"/></Link></li>
                                                        <li><Link to={this.props.linkedinLink}><Icofont icon="icofont-linkedin"/></Link></li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* <Comments /> */}

                                            <div className="comments-form">
                                                <h3 className="comments-title">Leave a Comments</h3>
                                                <form>
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="email" className="form-control" id="email_address" placeholder="Your Email" />
                                                    </div>
                                                    <div className="form-group">
                                                        <textarea className="form-control" rows="5" placeholder="Type here..." />
                                                    </div>
                                                    <div className="text-center">
                                                        <div className="button">
                                                            <Link to="/#0">Submit Comment</Link>
                                                            <div className="mask"></div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar: src/components*/}
                            <Sidebar tagsData={this.state.courseDetail.tagsData} />

                        </div>
                    </div>
                </section>
                <Footer/>
            </React.Fragment>
        );
    }
}
CourseDetail.propTypes = {
    Title: PropTypes.string,
    Content: PropTypes.string,
    CourseDetailImage:PropTypes.string,
    CourseDetailTitle: PropTypes.string,
    CourseDetailDate: PropTypes.string,
    CourseDetailMonth: PropTypes.string,
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
    servicesData: PropTypes.array,

};

//Default Props
CourseDetail.defaultProps = {
    Title: "Blog Details",
    Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",
    CourseDetailImage: require("../../images/design-01.jpg"),
    CourseDetailTitle: "Risus commodo viverra mae.",
    CourseDetailDate: "10",
    CourseDetailMonth: "Mar",
    authorLink: "/#0",
    authorName: "Jone",
    CommentsLink: "/#0",
    TotalComments: "545",
    TagLink: "/#0",
    TagName: "Business",
    PostContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
    FacebookLink: "/#0",
    TwitterLink: "/#0",
    InstagramLink: "/#0",
    linkedinLink: "/#0",
    servicesData: [
        {
            Id: "photoshop",
            icon: "icofont-automation",
            heading: "KHOÁ HỌC ĐỒ HỌA PHOTOSHOP",
            description:
                "PHOTOSHOP",
            Image: require("../../images/pts-bg.jpg"),
            ImageStep: require("../../images/courses/khoa-photoshop.png"),
            courseStep : "Nôi Dung Khóa Học Photoshop Cơ Bản Và Nâng Cao",
            Title: "Blog Details",
            Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",
            CourseDetailImage: require("../../images/design-01.jpg"),
            CourseDetailTitle: "Risus commodo viverra mae.",
            CourseDetailDate: "10",
            CourseDetailMonth: "Mar",
            authorLink: "/#0",
            authorName: "Jone",
            CommentsLink: "/#0",
            TotalComments: "545",
            TagLink: "/#0",
            TagName: "Business",
            PostContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
            FacebookLink: "/#0",
            TwitterLink: "/#0",
            InstagramLink: "/#0",
            linkedinLink: "/#0",
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
            imageWork: [
                {
                    link: require("../../images/post-01.jpg")
                }
            ]
        },
        {
            Id: "illustrator",
            icon: "icofont-bullseye",
            heading: "KHÓA HỌC ĐỒ HỌA ILLUSTRATOR",
            description:
                "ILLUSTRATOR",
            Image: require("../../images/ai-bg.jpg"),
            ImageStep: require("../../images/courses/khoa-ai.png"),
            courseStep : "Nôi Dung Khóa Học Illustrator Cơ Bản Và Nâng Cao",
            Title: "Blog Details",
            Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",
            CourseDetailImage: require("../../images/design-01.jpg"),
            CourseDetailTitle: "Risus commodo viverra mae.",
            CourseDetailDate: "10",
            CourseDetailMonth: "Mar",
            authorLink: "/#0",
            authorName: "Jone",
            CommentsLink: "/#0",
            TotalComments: "545",
            TagLink: "/#0",
            TagName: "Business",
            PostContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
            FacebookLink: "/#0",
            TwitterLink: "/#0",
            InstagramLink: "/#0",
            linkedinLink: "/#0",
            tagsData: [
                {
                    tagName: "Lớp học Illustrator tại Tp Hồ Chí Minh",
                },
                {
                    tagName: "học Illustrator tại Tp Hồ Chí Minh",
                },
                {
                    tagName: "Khóa học Illustrator tại Tp Hồ Chí Minh",
                },
                {
                    tagName: "Lop hoc illutrator tai sai gon",
                },
                {
                    tagName: "hoc Illustrator tai Hồ Chí Minh",
                },
                {
                    tagName: "khoa hoc Illustrator tại Sai Gon",
                }
            ],
            imageWork: [
                {
                    link: require("../../images/post-01.jpg")
                }
            ]
        },
        {
            Id: "corel",
            icon: "icofont-woman-in-glasses",
            heading: "HỌC THIẾT KẾ ĐỒ HỌA COREL DRAW",
            description:
                "Corel",
            Image: require("../../images/corel.jpg"),
            ImageStep: require("../../images/courses/khoa-corel.png"),
            courseStep : "Nôi Dung Khóa Học Corel Cơ Bản Và Nâng Cao",
            Title: "Blog Details",
            Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",
            CourseDetailImage: require("../../images/design-01.jpg"),
            CourseDetailTitle: "Risus commodo viverra mae.",
            CourseDetailDate: "10",
            CourseDetailMonth: "Mar",
            authorLink: "/#0",
            authorName: "Jone",
            CommentsLink: "/#0",
            TotalComments: "545",
            TagLink: "/#0",
            TagName: "Business",
            PostContent: "- Sử dụng thành thạo phần mềm thiết kế đồ họa in ấn, quảng cáo Corel DrawTư duy thiết kế, kỹ năng sáng tạo và kỹ thuật thiết kế hoàn thiện sản phẩm sẽ được trình bày trong khóa họcBiên tập, minh họa các ấn phẩm quảng cáoThiết kế, sáng tạo các dạng sản phẩm đồ họa phổ biến như: Logo, Poster, Brochure, Profile, Card Visit, tờ rơi ...Thiết kế hoàn thiện bộ nhận diện thương hiệu, ấn phẩm văn phòng ...Kỹ thuật thiết kế Banner và thiết kế các sản phẩm quảng cáo cho Maketting Online, Facebook Online ...Hoàn thành khóa học cùng kiến thức và kỹ năng chuyên sâu, học viên hoàn toàn có thể làm việc trong các công ty thiết kế in ấn, quảng cáo ...",
            FacebookLink: "/#0",
            TwitterLink: "/#0",
            InstagramLink: "/#0",
            linkedinLink: "/#0",
            tagsData: [
                {
                    tagName: "Lớp học Corel tại Tp Hồ Chí Minh",
                },
                {
                    tagName: "học Corel tại Tp Hồ Chí Minh",
                },
                {
                    tagName: "Khóa học Corel tại Tp Hồ Chí Minh",
                },
                {
                    tagName: "Lop hoc corel tai sai gon",
                },
                {
                    tagName: "hoc Corel tai Hồ Chí Minh",
                },
                {
                    tagName: "khoa hoc Corel tại Sai Gon",
                }
            ],
            imageWork: [
                {
                    link: require("../../images/post-01.jpg")
                }
            ]
        },
        {
            Id: "indesign",
            icon: "icofont-chart-growth",
            heading: "HỌC THIẾT KẾ ĐỒ HỌA IN DESIGN",
            description:
                "IN DESIGN",
            Image: require("../../images/indesign-bg.jpg"),
            ImageStep: require("../../images/courses/khoa-indesign.png"),
            courseStep : "Nôi Dung Khóa Học InDesign Cơ Bản Và Nâng Cao",
            Title: "Blog Details",
            Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",
            CourseDetailImage: require("../../images/design-01.jpg"),
            CourseDetailTitle: "Risus commodo viverra mae.",
            CourseDetailDate: "10",
            CourseDetailMonth: "Mar",
            authorLink: "/#0",
            authorName: "Jone",
            CommentsLink: "/#0",
            TotalComments: "545",
            TagLink: "/#0",
            TagName: "Business",
            PostContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
            FacebookLink: "/#0",
            TwitterLink: "/#0",
            InstagramLink: "/#0",
            linkedinLink: "/#0",
            tagsData: [
                {
                    tagName: "Lớp học Indesign tại Tp Hồ Chí Minh",
                },
                {
                    tagName: "học Indesign tại Tp Hồ Chí Minh",
                },
                {
                    tagName: "Khóa học Indesign tại Tp Hồ Chí Minh",
                },
                {
                    tagName: "Lop hoc indesign tai sai gon",
                },
                {
                    tagName: "hoc Indesign tai Hồ Chí Minh",
                },
                {
                    tagName: "khoa hoc Indesign tại Sai Gon",
                }
            ],
            imageWork: [
                {
                    link: require("../../images/post-01.jpg")
                }
            ]
        },
        {
            Id: "autocad",
            icon: "icofont-network-tower",
            heading: "HỌC THIẾT KẾ ĐỒ HỌA AUTOCAD",
            description:
                "AUTOCAD",
            Image: require("../../images/autocad-bg.jpg"),
            ImageStep: require("../../images/courses/khoa-indesign.png"),
            courseStep : "Nôi Dung Khóa Học Autocad Cơ Bản Và Nâng Cao",
            Title: "Blog Details",
            Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",
            CourseDetailImage: require("../../images/design-01.jpg"),
            CourseDetailTitle: "Risus commodo viverra mae.",
            CourseDetailDate: "10",
            CourseDetailMonth: "Mar",
            authorLink: "/#0",
            authorName: "Jone",
            CommentsLink: "/#0",
            TotalComments: "545",
            TagLink: "/#0",
            TagName: "Business",
            PostContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
            FacebookLink: "/#0",
            TwitterLink: "/#0",
            InstagramLink: "/#0",
            linkedinLink: "/#0",
            tagsData: [
                {
                    tagName: "Lớp học Autocad tại Tp Hồ Chí Minh",
                },
                {
                    tagName: "học Autocad tại Tp Hồ Chí Minh",
                },
                {
                    tagName: "Khóa học Autocad tại Tp Hồ Chí Minh",
                },
                {
                    tagName: "Lop hoc autocad tai sai gon",
                },
                {
                    tagName: "hoc Autocad tai Hồ Chí Minh",
                },
                {
                    tagName: "khoa hoc Autocad tại Sai Gon",
                }
            ],
            imageWork: [
                {
                    link: require("../../images/post-01.jpg")
                }
            ]
        },
        {
            Id: "3ds-max",
            icon: "icofont-laptop-alt",
            heading: "HỌC THIẾT KẾ ĐỒ HỌA 3Ds MAX",
            description:
                "3Ds MAX",
            Image: require("../../images/3dsmax-bg.jpeg"),
            ImageStep: require("../../images/courses/khoa-photoshop.png"),
            courseStep : "Nôi Dung Khóa Học 3Ds Max Cơ Bản Và Nâng Cao",
            Title: "Blog Details",
            Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",
            CourseDetailImage: require("../../images/design-01.jpg"),
            CourseDetailTitle: "Risus commodo viverra mae.",
            CourseDetailDate: "10",
            CourseDetailMonth: "Mar",
            authorLink: "/#0",
            authorName: "Jone",
            CommentsLink: "/#0",
            TotalComments: "545",
            TagLink: "/#0",
            TagName: "Business",
            PostContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
            FacebookLink: "/#0",
            TwitterLink: "/#0",
            InstagramLink: "/#0",
            linkedinLink: "/#0",
            tagsData: [
                {
                    tagName: "Lớp học 3Ds Max tại Tp Hồ Chí Minh",
                },
                {
                    tagName: "học 3Ds Max tại Tp Hồ Chí Minh",
                },
                {
                    tagName: "Khóa học 3Ds Max tại Tp Hồ Chí Minh",
                },
                {
                    tagName: "Lop hoc 3ds max tai sai gon",
                },
                {
                    tagName: "hoc 3Ds Max tai Hồ Chí Minh",
                },
                {
                    tagName: "khoa hoc 3Ds Max tại Sai Gon",
                }
            ],
            imageWork: [
                {
                    link: require("../../images/post-01.jpg")
                }
            ]
        },
        {
            Id: "sketchup",
            icon: "icofont-laptop-alt",
            heading: "HỌC THIẾT KẾ ĐỒ HỌA SKETCHUP",
            description:
                "SKETCHUP",
            Image: require("../../images/sketchup-bg.jpg"),
            ImageStep: require("../../images/courses/khoa-photoshop.png"),
            courseStep : "Nôi Dung Khóa Học Sketchup Cơ Bản Và Nâng Cao",
            Title: "Blog Details",
            Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",
            CourseDetailImage: require("../../images/design-01.jpg"),
            CourseDetailTitle: "Risus commodo viverra mae.",
            CourseDetailDate: "10",
            CourseDetailMonth: "Mar",
            authorLink: "/#0",
            authorName: "Jone",
            CommentsLink: "/#0",
            TotalComments: "545",
            TagLink: "/#0",
            TagName: "Business",
            PostContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
            FacebookLink: "/#0",
            TwitterLink: "/#0",
            InstagramLink: "/#0",
            linkedinLink: "/#0",
            tagsData: [
                {
                    tagName: "Lớp học Sketchup tại Tp Hồ Chí Minh",
                },
                {
                    tagName: "học Sketchup tại Tp Hồ Chí Minh",
                },
                {
                    tagName: "Khóa học Sketchup tại Tp Hồ Chí Minh",
                },
                {
                    tagName: "Lop hoc sketchup tai sai gon",
                },
                {
                    tagName: "hoc Sketchup tai Hồ Chí Minh",
                },
                {
                    tagName: "khoa hoc Sketchup tại Sai Gon",
                }
            ],
            imageWork: [
                {
                    link: require("../../images/post-01.jpg")
                }
            ]
        },
    ]

}
