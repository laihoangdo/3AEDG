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
                                                {/*<div className="date-box">*/}
                                                {/*    {this.props.CourseDetailDate} <span className="month">{this.props.CourseDetailMonth}</span>*/}
                                                {/*</div>*/}
                                                <div className="title-meta">
                                                    <h2>{this.state.courseDetail.heading}</h2>

                                                    <div className="post-meta">
                                                        {/*<ul>*/}
                                                        {/*    <li>Posted By: <Link to={this.props.authorLink}>{this.props.authorName}</Link> <Icofont icon="icofont-funky-man" /></li>*/}
                                                        {/*    <li>Comments: <Link to={this.props.CommentsLink}>{this.props.TotalComments}</Link> <Icofont icon="icofont-speech-comments" /> </li>*/}
                                                        {/*    <li> Tags: <Link to={this.props.TagLink}>{this.props.TagName}</Link> <Icofont icon="icofont-tags" /></li>*/}
                                                        {/*</ul>*/}
                                                        <p>Tag: Lớp học {this.state.courseDetail.Id} tại Sài Gòn, học {this.state.courseDetail.Id} tại Sài Gòn, Khóa học {this.state.courseDetail.Id} tại Sài Gòn, Lop hoc illutrator tai sai gon, hoc {this.state.courseDetail.Id} tai Hồ Chí Minh, khoa hoc {this.state.courseDetail.Id} tại Sai Gon.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="post-content" id="course-detail">
                                                {/*<textarea value={Content__c} ></textarea>*/}
                                                {this.state.courseDetail.PostContent.map((post , index) => (
                                                    <div className="post-detail" key={index}>
                                                        <Icofont icon="icofont-tags icofont-2x" /> &nbsp;
                                                        <span key={index}>{post}</span>
                                                    </div>

                                                ))}
                                                <p>{this.state.courseDetail.PostContent1 ? this.state.courseDetail.PostContent1: ''}</p>
                                                <h3>{this.state.courseDetail.courseStep}</h3>
                                                <img src={this.state.courseDetail.ImageStep} alt="Photoshop"/>
                                                {/*return <div dangerouslySetInnerHTML={{ __html:  }} />;*/}
                                                <h3 className="title-reason"><Icofont icon="icofont-question-square icofont-2x" /> &nbsp; Tại sao nên lựa chọn học thiết kế đồ họa {this.state.courseDetail.Id}? </h3>
                                                <div className="target-course">
                                                    <div className="target-one">
                                                        <ul>
                                                            <li>
                                                                <div className="target-li">
                                                                    {this.state.courseDetail.reason.map((reason , index) => (
                                                                        <div key={index}>
                                                                            <p><Icofont icon="icofont-hand-right icofont-1x" /> &nbsp; {reason}</p>
                                                                        </div>

                                                                    ))}
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <h3 className="title-reason"><Icofont icon="icofont-question-square icofont-2x" /> &nbsp; Kết thúc khóa học {this.state.courseDetail.Id} làm được gì? </h3>
                                                <div className="target-course">
                                                    <div className="target-one">
                                                        <div className="target-li">
                                                            {this.state.courseDetail.whatMake.map((make , index) => (
                                                                <div key={index}>
                                                                    <p><Icofont icon="icofont-hand-right icofont-1x" /> &nbsp; {make}</p>
                                                                </div>

                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                                <h3 className="title-reason"><Icofont icon="icofont-money icofont-2x" /> &nbsp; Khai giảng liên tục [ lớp: Sáng / Chiều / Tối ]</h3>
                                                <div className="target-course">
                                                    <div className="course-price">
                                                        <h3 className='course-fee'>Học phí gốc khóa học: <span>1.500.000(vnđ)</span></h3>
                                                        <p className="course-date"><span>Từ ngày 5/8 – 12/8/2019 Hỗ trợ bạn chi phí xăng xe đi học</span></p>
                                                        <p className="course-date">Học phí cho <span>mỗi phần học</span> chỉ còn <span>1.300.000</span>(TPHCM) </p>
                                                        <p className="course-trust"> (Cam kết không phát sinh chi phí nào khác)</p>
                                                        <p className="course-trust">(Đã bao gồm tài liệu, phần mềm cài đặt, Chứng nhận)</p>
                                                        <p className="course-author">(Khó khăn về kinh tế hoặc cần tư vấn đừng ngại cứ gọi Mr. Long 0938636843)</p>
                                                    </div>
                                                </div>
                                                <h3 className="title-reason"> <Icofont icon="icofont-ui-calendar icofont-2x" /> &nbsp; Thời Gian Giành Cho Khóa Học Đồ Họa {this.state.courseDetail.description}</h3>
                                                <table className="table-course">
                                                    <thead>
                                                        <tr>
                                                            <th><p>Thời Gian</p><p>Bạn chọn lớp ca phù hợp</p> </th>
                                                            <th><p>Thực Hành</p></th>
                                                            <th><p>Địa Điểm</p></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Ca Sáng: 8h30 đến 11h<br/>

                                                                Ca Chiều: 14h đến 17h<br/>

                                                                Ca Tối: 18h30 đến 21h<br/>

                                                                Lớp: sáng, chiều tối (2,4,6 hoặc 3,5,7)<br/>

                                                                Lớp: Học liền (thứ 2->thứ 6)<br/>

                                                                Lớp: Thứ 7 & CN cho người bận rộn</td>
                                                            <td>15 Buổi<br/>

                                                                Chỉ thực hành<br/>

                                                                sản phẩm thực tế ngay trong khóa học</td>
                                                            <td>P504, Tòa C4, Chung Cư Khang Gia, Đường 38, Phường 14, Quận Gò Vấp, TPHCM</td>

                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className="product-student">
                                                    <h3 className="title-reason"><Icofont icon="icofont-graduate-alt icofont-2x" /> &nbsp; Sản Phẩm Học Viên Sau Khi Hoàn Thành Khóa Học {this.state.courseDetail.description}</h3>
                                                    {this.state.courseDetail.imageWork.map((product , index) => (
                                                        <img key={index} src={product.link} alt=""/>
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

                                            {/*<div className="comments-form">*/}
                                                {/*<h3 className="comments-title">Leave a Comments</h3>*/}
                                                {/*<form>*/}
                                                    {/*<div className="form-group">*/}
                                                        {/*<input type="text" className="form-control" id="name" placeholder="Your Name" />*/}
                                                    {/*</div>*/}
                                                    {/*<div className="form-group">*/}
                                                        {/*<input type="email" className="form-control" id="email_address" placeholder="Your Email" />*/}
                                                    {/*</div>*/}
                                                    {/*<div className="form-group">*/}
                                                        {/*<textarea className="form-control" rows="5" placeholder="Type here..." />*/}
                                                    {/*</div>*/}
                                                    {/*<div className="text-center">*/}
                                                        {/*<div className="button">*/}
                                                            {/*<Link to="/#0">Submit Comment</Link>*/}
                                                            {/*<div className="mask"></div>*/}
                                                        {/*</div>*/}
                                                    {/*</div>*/}
                                                {/*</form>*/}
                                            {/*</div>*/}
                                            <div className="fb-video-link">
                                            <div className="fb-video"
                                                 data-href="https://www.facebook.com/2604857046301739/videos/2324921554282334/"
                                                 data-width="500" data-show-text="true">
                                                <blockquote
                                                    cite="https://developers.facebook.com/2604857046301739/videos/2324921554282334/"
                                                    className="fb-xfbml-parse-ignore"><a
                                                    href="https://developers.facebook.com/2604857046301739/videos/2324921554282334/">KHÓA
                                                    HỌC THIẾT KẾ ĐỒ HỌA CÙNG CHUYÊN GIA</a>
                                                    <p>#HỌC_THIẾT_KẾ_ĐỒ_HỌA_CÙNG_CHUYÊN_GIA, KHÓA CẦM TAY CHỈ VIỆC.
                                                        Cam kết học xong trở thành chuyên gia. Với GIảng viên cao cấp
                                                        với nhiều năm kinh nghiệm trong ngành thiết kế Đồ Họa.
                                                        Để biết thêm thông tin về khóa học này xin liên hệ theo số
                                                        hotline để được tư vẫn. Hotline: 0938.636.843
                                                        Với thời đại công nghệ 4.0 Ngành đồ họa đang phát triển như vũ
                                                        bão và nhu cầu rất cần lao động về thiết kế đồ họa rất cao.Hãy
                                                        đăng ký ngay để đươc nhận ưu đãi từ khóa học.</p>Người đăng: <a
                                                        href="https://www.facebook.com/Thi&#x1ebf;t-K&#x1ebf;-&#x110;&#x1ed3;-Ho&#x1ea1;-2604857046301739/">Thiết
                                                        Kế Đồ Hoạ</a> vào Thứ Năm, 1 tháng 8, 2019
                                                </blockquote>
                                            </div>
                                            </div>
                                            <div className="fb-comments"
                                                 data-href="https://www.facebook.com/2604857046301739/videos/2324921554282334/"
                                                 data-width="" data-numposts="5"></div>
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
    CourseDetailDate: PropTypes.string,
    CourseDetailMonth: PropTypes.string,
    FacebookLink: PropTypes.string,
    TwitterLink: PropTypes.string,
    InstagramLink: PropTypes.string,
    linkedinLink: PropTypes.string,
    servicesData: PropTypes.array,

};

//Default Props
CourseDetail.defaultProps = {
    CourseDetailDate: "10",
    CourseDetailMonth: "Mar",
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
                "Photoshop",
            Image: require("../../images/pts-bg.jpg"),
            ImageStep: require("../../images/courses/khoa-photoshop.png"),
            courseStep : "Nôi Dung Khóa Học Photoshop Cơ Bản Và Nâng Cao",
            PostContent: [
                "Thiết kế ấn phẩm truyền thông thương hiệu của bạn bằng chính ý tưởng của bạn",
                "Thiết kế các banner truyền thông bán hàng trên Website, Facebook, Zalo ",
                "Chỉnh sửa cắt ghép hình ảnh sản phẩm Chỉnh sửa phục chế những bức hình chưa ưng ý",
              "Thành thạo hoàn toàn những công cụ trong Photoshop từ cơ bản đến nâng cao. Thấu hiểu hình ảnh kỹ thuật số, định hình không gian, bố cục màu cho một bức ảnh Chỉnh sửa, tách ảnh, cắt ảnh, lồng ảnh,tạo layer thông minh... tất cả những kỹ năng xử lý hình ảnh.",
              "Tạo kỹ xảo hình ảnh, kiến thức hòa trộn, hướng dẫn blend màu, xử lý màu ảnh có bố cục. Chỉnh sửa ảnh chân dung: Chỉnh sáng, màu cho mắt; loại bỏ mụn, nếp nhăn, làm mịn, căng da; chỉnh màu son môi, makeup khuôn mặt,... ",
                "Thiết kế 1 giao diện website hoàn chỉnh trong 7 bước Thiết kế banner quảng cáo trong 6 bước Sử dụng tự động hóa trên photoshop"
            ],
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
                    link: require("../../images/product/pts/pts-hocvien-1.png")
                },
                {
                    link: require("../../images/product/pts/pts-hocvien-3.jpg")
                }
            ],
            reason: [
                "Phầm mềm Ilusstrator cung cấp cho người dùng các công cụ hỗ trợ để tạo lên các sản phẩm vector về hình khối 3D dùng trong thiết kế nội thất, bản đồ, Minh họa sách báo, Thiết kế logo, Tạo các sản phẩm tờ rơi, Card Visit, brochure, Profile,vẽ hoạt hình,… một cách nhanh chóng với màu sắc sát với sản phẩm thực tế giúp ta tạo ra các sản phẩm một cách nhanh chóng.",
                "Điểm mạnh: Màu sắc file thiết kế đẹp mắt, dễ dàng tương thích với Photoshop, Corel Draw, dễ dàng thay đổi và trao đổi dữ liệu, hỗ trợ in ấn rất tốt. Màu sắc rất mượt. "
            ],
            whatMake:[
                "thành thạo Adobe Photoshop, làm được tốt những công việc sau: Cắt, ghép, chỉnh sửa phục chế xử lý hình ảnh các kiểu từ cơ bản đến nâng cao. Ứng dụng được trong mọi công việc như thiết kế: Website, banner sản phẩm truyền thông, kiến trúc, báo chí, in ấn, nội thất, ảnh viện…",
                "Học viên ứng dụng phần mềm Photoshop ở nhiều môi trường làm việc khác nhau theo nhu cầu riêng"
            ]
        },
        {
            Id: "illustrator",
            icon: "icofont-bullseye",
            heading: "KHÓA HỌC ĐỒ HỌA ILLUSTRATOR",
            description:
                "Illustrator",
            Image: require("../../images/ai-bg.jpg"),
            ImageStep: require("../../images/courses/khoa-ai.png"),
            courseStep : "Nôi Dung Khóa Học Illustrator Cơ Bản Và Nâng Cao",
            Title: "Blog Details",
            Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",
            PostContent:[
                "Thiết kế các ấn phẩm: Logo, banner, poster, brochure, profile... sáng tạo bùng nổ với thiết kế logo, thiết kế bộ nhận diện thương hiệu.",
                "Sáng tạo mọi nhân vật hoạt hình bạn yêu thích hay những nhân vật ngộ nghĩnh trong phim.",
                "Phát triển tư duy màu sắc, hình ảnh cần có trong thiết kế.",
                "Tự tin thiết kế minh họa báo chí, in ấn, thiết kế hình họa, tích hợp chuyển động flash..." ,
                "Vẽ cả thế giới tưởng tượng của bạn qua cây bút thần kì Adobe Illustrator. ",
            ] ,


            PostContent1: "Thiết kế Đồ họa vẫn là một nghề hot trong những năm gần đây, nhu cầu của thị trường luôn ở mức cao vì thế cơ hội nghề nghiệp là rất rộng mở với tất cả mọi người. Để trở thành một nhà thiết kế Đồ họa bạn cần có đam mê và sự nỗ lực, ngoài những kiến thức về chuyên ngành thiết kế như bố cục màu sắc, tư duy sáng tạo, thị giác và truyền thông... người làm thiết kế luôn phải trang bị cho mình những công cụ thiết kế cần thiết để có thể giải phóng những ý tưởng thành các bản vẽ thiết kế, biến thế giới trừu tượng trong trí não thành những hình ảnh cụ thể. Một trong những công cụ hữu hiệu để giúp bạn làm được điều đó chính là Illustrator.",
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
                    link: require("../../images/product/ai/ai-hv-1.png")
                },
                {
                    link: require("../../images/product/ai/ai-hv-2.jpg")
                }
            ],
            reason: [
                "Phầm mềm Ilusstrator cung cấp cho người dùng các công cụ hỗ trợ để tạo lên các sản phẩm vector về hình khối 3D dùng trong thiết kế nội thất, bản đồ, Minh họa sách báo, Thiết kế logo, Tạo các sản phẩm tờ rơi, Card Visit, brochure, Profile,vẽ hoạt hình,… một cách nhanh chóng với màu sắc sát với sản phẩm thực tế giúp ta tạo ra các sản phẩm một cách nhanh chóng.",
                "Điểm mạnh: Màu sắc file thiết kế đẹp mắt, dễ dàng tương thích với Photoshop, Corel Draw, dễ dàng thay đổi và trao đổi dữ liệu, hỗ trợ in ấn rất tốt. Màu sắc rất mượt. "
            ],
            whatMake:[
                "bạn thành thạo Adobe Illustrator, làm được tốt những công việc sau: Thiết kế các ấn phẩm, Thiết kế logo, thiết kế tờ rơi, catalogue từ đơn giản đến phức tạp, tự thiết kế các bộ nhận dạng thương hiệu theo cầu của khách hàng",
                "Học viên ứng dụng phần mềm Illustrator  ở nhiều môi trường làm việc khác nhau theo nhu cầu riêng"
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
            PostContent: [
                "Sử dụng thành thạo phần mềm thiết kế đồ họa in ấn, quảng cáo Corel DrawTư duy thiết kế, kỹ năng sáng tạo và kỹ thuật thiết kế hoàn thiện sản phẩm sẽ được trình bày trong khóa họcBiên tập, minh họa các ấn phẩm quảng cáoThiết kế, sáng tạo các dạng sản phẩm đồ họa phổ biến như: Logo, Poster, Brochure, Profile, Card Visit, tờ rơi ...",
                "Thiết kế hoàn thiện bộ nhận diện thương hiệu, ấn phẩm văn phòng ...Kỹ thuật thiết kế Banner và thiết kế các sản phẩm quảng cáo cho Maketting Online, Facebook Online ...Hoàn thành khóa học cùng kiến thức và kỹ năng chuyên sâu, học viên hoàn toàn có thể làm việc trong các công ty thiết kế in ấn, quảng cáo ..."
            ] ,
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
                    link: require("../../images/product/corel/corel-hv1.jpg")
                },
                {
                    link: require("../../images/product/corel/corel-hv2.jpg")
                }
            ],
            reason: [
                "Khóa học chia sẻ đam mê ĐỒ HỌA mà chúng tôi đã tạo dựng, cống hiến & làm việc cho khách hàng",
                "Cung cấp nhân sự cho xưởng thiết kế của chúng tôi và các công ty truyền thông",
                "Phong cách đào tạo: Khoa học, Hài hước của người đào tạo – học viên hiểu nhanh và hứng thú học"
            ],
            whatMake:[
                "cam kết, bạn có thể thành thạo CorelDraw,   bạn cũng có thể thành thạo các công việc sau: Thiết kế logo, tờ rơi, banner, thiết kế tạp chí báo chí từ cơ bản đến nâng cao .Ứng dụng được trong mọi công việc như dàn trang báo chí như: thiết kế bìa tạp chí, sách,",
                "Học viên ứng dụng phần mềm CorelDraw   ở nhiều môi trường làm việc khác nhau theo nhu cầu riêng",

            ]
        },
        {
            Id: "indesign",
            icon: "icofont-chart-growth",
            heading: "HỌC THIẾT KẾ ĐỒ HỌA IN DESIGN",
            description:
                "Indesign",
            Image: require("../../images/indesign-bg.jpg"),
            ImageStep: require("../../images/courses/khoa-indesign.png"),
            courseStep : "Nôi Dung Khóa Học InDesign Cơ Bản Và Nâng Cao",
            Title: "Blog Details",
            Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",
            PostContent: [
                    "Giúp bạn làm chủ Indesign - công cụ hữu hiệu để tạo ra các sản phẩm như Sách, báo, Tạp chí, catalogues… mà với khả năng kiểm soát, tương tác hiệu quả với các đối tượng đồ họa tĩnh, động.",
                    "Làm chủ giao diện làm việc và các công cụ",
                    "Quản lý trang tài liệu",
                    "Tìm hiểu các lệnh biên tập văn bản Character",
                    "Biên tập cấu trúc văn bản đoạn Paragraph",
                    "Làm việc với đối tượng đồ họa Graphics link",
                    "Quản lý màu sắc & đối tượng trên indesign",
                    "Biến đổi đối tượng - Transforming Objects",
                    "Đóng gói để xuất khẩu và in ấn"
            ],
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
                    link: require("../../images/product/indesign/indesign-hv1.jpg")
                },
                {
                    link: require("../../images/product/indesign/indesign-hv3.jpg")
                },
                {
                    link: require("../../images/product/indesign/indesign-hv2.jpg")
                }
            ],
            reason: [
                "Khóa học chia sẻ đam mê ĐỒ HỌA mà chúng tôi đã tạo dựng, cống hiến & làm việc cho khách hàng",
                "Cung cấp nhân sự cho xưởng thiết kế của chúng tôi và các công ty truyền thông",
                "Phong cách đào tạo: Khoa học, Hài hước của người đào tạo – học viên hiểu nhanh và hứng thú học"
            ],
            whatMake:[
                "bạn thành thạo Adobe Indesign, làm được tốt những công việc sau:  thiết kế các tạp chí báo chí  từ cơ bản đến nâng cao. Ứng dụng được trong mọi công việc như dàn trang báo chí, bìa tạp chí, sách, các ấn phẩm theo nhu cầu của bạn",
                "Học viên ứng dụng phần mềm Adobe Indesign   ở nhiều môi trường làm việc khác nhau theo nhu cầu riêng",

            ]
        },
        {
            Id: "autocad",
            icon: "icofont-network-tower",
            heading: "HỌC THIẾT KẾ ĐỒ HỌA AUTOCAD",
            description:
                "Autocad",
            Image: require("../../images/autocad-bg.jpg"),
            ImageStep: require("../../images/courses/khoa-autocad.jpg"),
            courseStep : "Nôi Dung Khóa Học Autocad Cơ Bản Và Nâng Cao",
            Title: "Blog Details",
            Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",
            PostContent:[

            ] ,
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
                    link: require("../../images/product/autocad/auto-cad-hv1.png")
                },
                {
                    link: require("../../images/product/autocad/auto-cad-hv2.jpg")
                },

            ],
            reason: [
                "Khóa học chia sẻ đam mê ĐỒ HỌA mà chúng tôi đã tạo dựng, cống hiến & làm việc cho khách hàng",
                "Cung cấp nhân sự cho xưởng thiết kế của chúng tôi và các công ty truyền thông",
                "Phong cách đào tạo: Khoa học, Hài hước của người đào tạo – học viên hiểu nhanh và hứng thú học"
            ],
            whatMake:[
                "Cài đặt và sử dụng thành thạo các công cụ trong Autocad",
                "Thành thạo các lệnh trong Autocad để hoàn thiện một bản vẽ kỹ thuật",
                "Thành thạo việc tạo lập tỷ lệ cho bản vẽ",
                "Đọc, hiểu và thiết kế ra các bản vẽ nhà ở, cơ khí, nộị thất",
                "Thực hiện được mọi ý tưởng của mình và khách hàng yêu cầu"

            ]
        },
        {
            Id: "3ds-max",
            icon: "icofont-laptop-alt",
            heading: "HỌC THIẾT KẾ ĐỒ HỌA 3Ds MAX",
            description:
                "3Ds MAX",
            Image: require("../../images/3dsmax-bg.jpeg"),
            ImageStep: require("../../images/courses/khoa-3D-max.jpg"),
            courseStep : "Nôi Dung Khóa Học 3Ds Max Cơ Bản Và Nâng Cao",
            Title: "Blog Details",
            Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",
            PostContent: [],
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
                    link: require("../../images/product/3ds-max/3ds-max-hv2.jpg")
                },
                {
                    link: require("../../images/product/3ds-max/3ds-max-hv3.jpg")
                },
            ],
            reason: [
                "Khóa học chia sẻ đam mê ĐỒ HỌA mà chúng tôi đã tạo dựng, cống hiến & làm việc cho khách hàng",
                "Học theo hình thức “Cầm tay chỉ việc” nên các bạn học đến đâu thì các bạn hiểu ra và thành thạo đến đó.",
                "Giáo trình thực hành được lấy ra từ các dự án thực tế – học thật, tay nghề thật.",
                "Cam kết các bạn thành nghề thì mới xong khóa học chứ không đào tạo theo hình thức quảng cáo vớ vẩn."
            ],
            whatMake:[
                "Hiểu rõ và sử dụng thành thạo 3Ds Max.",
                "Thành thạo các công cụ và cách cài đặt phần mềm.",
                "Nắm được tư duy thiết kế mô hình 3D nội thất, xây dựng.",
                "Thực hiện các dự án phối cảnh công trình nhà phố, biệt thự.",
                "Thực hành thiết kế nội, ngoại thất căn hộ chung cư, biệt thự.",
                "Kỹ thuật xuất file qua các phần mềm 3D khác."

            ]
        },
        {
            Id: "sketchup",
            icon: "icofont-laptop-alt",
            heading: "HỌC THIẾT KẾ ĐỒ HỌA SKETCHUP",
            description:
                "Sketchup",
            Image: require("../../images/sketchup-bg.jpg"),
            ImageStep: require("../../images/courses/khoa-Sketchup-Vray.jpg"),
            courseStep : "Nôi Dung Khóa Học Sketchup Cơ Bản Và Nâng Cao",
            Title: "Blog Details",
            Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",
            PostContent:[
                "Doanh nghiệp có nhu cầu nâng cao năng lực diễn họa, thiết kế của cán bộ, nhân viên bằng phần mềm Sketchup Vray.",
                "Nắm vững các khái niệm về môi trường đồ họa 3 chiều, các công cụ tạo mô hình 3 chiều.",
                "Các kỹ năng thiết kế bản vẽ xây dựng, kiến trúc, nội ngoại thất theo mô hình 3 chiều.",
                "Củng cố các kỹ năng thiết kế chuyên ngành",
                "Cung cấp cho học viên kiến thức và kĩ năng sáng tạo mô hình và các sản phẩm 3D",
                "Sáng tạo ý tưởng trong môi trường 3D hoặc nhập thông tin từ các chương trình 2D để hoàn thiện bản thiết kế với sự dễ dàng thử nghiệm, tìm tòi, thay đổi để tìm ra phương án tốt nhất, sử dụng Vray để thiết lập chiếu sáng, đưa vật liệu vào bản thiết kế giúp công trình thiết kế sinh động hơn."

            ],
            PostContent1: "Khi dùng sketchup bạn có thể dựng hình với kích thước chính xác như Autocad, với mức độ chi tiết rất cao. Mức độ chính xác có thể đảm bảo 100% LayOut trong sketchup. Sketchup không phải chỉ để dành cho thiết kế 3d đơn thuần mà nó còn chức năng xuất hồ sơ với mặt bằng, mặt đứng, mặt cắt tương tự như autocad khi bạn dùng LayOut trong sketchup. Khi chuyển qua layout thì bạn có thể scale tỷ lệ của mặt bằng, mặt đứng, mặt cắt,… Khi bạn sửa model ở sketchup thì phần trình bày ở Layout cũng sẽ tự động cập nhật. Một chức năng rất tiện lợi đúng không.",

            // "
            // Đối tượng tham gia Học Sketchup vray tại Tây Thạnh, Tân Phú – TPHCM.\n" +
            //     "\n" +
            //      +
            //     "Sinh viên các trường Đại học chuyên ngành kiến trúc, quy hoạch, nội thất, xây dựng, cầu đường,… đang cần công cụ để thể hiện ý tưởng đồ án, bổ sung, hoàn thiện kiến trúc và tiếp cận với công việc thực tế.\n" +
            //     "Kỹ sư, kiến trúc sư, họa viên cần củng cố kỹ năng, chuẩn hóa kiến thức sử dụng Sketchup Vray, tăng khả năng thăng tiến trong nghề nghiệp.\n" +
            //     "Cán bộ, chủ xưởng thiết kế thi công nội, ngoại thất, quảng cáo,…\n" +
            //     "Những bạn đã tham gia khóa học tại nhiều đơn vị khác nhưng không đạt được kết quả như kỳ vọng, chưa thể ứng dụng trong công việc.\n" +
            //     "Thời gian Học Sketchup vray tại Tây Thạnh, Tân Phú – TPHCM.\n" +
            //     "\n" +
            //     "1 ngày có các ca : Sáng 8h30′ – 11h00′, Chiều 14h00′ – 17h00′ , Tối 18h00′ – 20h30′. Lớp học 2-4-6 và 3-5-7.\n" +
            //     "Mỗi lớp ViTaDu chỉ đào tạo từ 8 – 10/hv.\n" +
            //     "Lịch học linh động phù hợp cho tất cả các đối tượng từ sinh viên đến người đi làm.\n" +
            //     "Sau khi kết thúc lớp học Sketchup tại Vitadu học viên có được những gì?\n" +
            //     "\n" +
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
                    link: require("../../images/product/sketchup/sketchup-hv1.jpg")
                },
                {
                    link: require("../../images/product/sketchup/sketchup-hv2.png")
                },
                {
                    link: require("../../images/product/sketchup/sketchup-hv3.jpg")
                },
            ],
            reason: [
                "Khóa học chia sẻ đam mê ĐỒ HỌA mà chúng tôi đã tạo dựng, cống hiến & làm việc cho khách hàng",
                "Học theo hình thức “Cầm tay chỉ việc” nên các bạn học đến đâu thì các bạn hiểu ra và thành thạo đến đó.",
                "Giáo trình thực hành được lấy ra từ các dự án thực tế – học thật, tay nghề thật.",
                "Cam kết các bạn thành nghề thì mới xong khóa học chứ không đào tạo theo hình thức quảng cáo vớ vẩn."
            ],
            whatMake:[
                "Hiểu rõ và sử dụng thành thạo Sketchup.",
                "Thành thạo các công cụ và cách cài đặt phần mềm.",
                "Nắm được tư duy thiết kế mô hình 3D nội thất, xây dựng.",
                "Thực hiện các dự án phối cảnh công trình nhà phố, biệt thự.",
                "Thực hành thiết kế nội, ngoại thất căn hộ chung cư, biệt thự.",
                "Kỹ thuật xuất file qua các phần mềm 3D khác."

            ]
        },
    ]

}
