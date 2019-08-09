import React, {PureComponent} from 'react';
import Icofont from 'react-icofont';
import PropTypes from "prop-types";
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';

export default class Services extends PureComponent {
    render() {
        //Service loop start
        const servicedata = this.props.servicesData.map((service, index) => (
            <div className="col-md-6 col-lg-4 text-center" key={index}>
                <div className="service-item">
                    <div className="glyph">
                        <Icofont icon={service.icon} />
                    </div>
                    <Link to={{pathname: `khoa-hoc/${service.Id}`}} className="btn-a"><h3>{service.heading}</h3>
                    <h4>{service.description}</h4>
                    <img
                        src={service.Image}
                        alt="Gallery"
                        className="img-fluid"
                    /></Link>
                    {/*<div className="center-wrap">*/}
                        {/*<Link to={{pathname: `khoa-hoc/${service.Id}`}} title="Read More" className="link-btn"><i className="fa fa-arrow-right"></i>Xem Chi Tiết</Link>*/}
                    {/*</div>*/}

                    <div className="center-wrap">
                        <Link to={{pathname: `khoa-hoc/${service.Id}`}} className="btn-a">
                            <div className="button">
                               Xem Chi Tiết  <Icofont icon="icofont-long-arrow-right" />
                                <div className="mask"></div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        ));
        //Service loop END
        return (
            <React.Fragment>
                <section id="services" className="services ptb-100">
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
                            {servicedata}
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
    // render(){
    //     return (
    //         <section id="welcome" className="welcome-area ptb-80">
    //             <div className="container">
    //                 <div className="section-title">
    //                     <h4>We are creative</h4>
    //                     <h2>Welcome to <span>Addax</span></h2>
    //                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    //                 </div>
    //
    //                 <div className="row">
    //                     <div className="col-lg-4 col-md-6">
    //                         <div className="single-box">
    //                             <i className="fa fa-pencil-square-o icon"></i>
    //                             <h3>Creative Design</h3>
    //                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
    //                             <img src={'../../images/corel.jpg'}/>
    //                             <Link to="#" title="Read More" className="link-btn"><i className="fa fa-arrow-right"></i></Link>
    //                         </div>
    //                     </div>
    //
    //                     <div className="col-lg-4 col-md-6">
    //                         <div className="single-box">
    //                             <i className="fa fa-laptop icon"></i>
    //                             <h3>Friendly Codes</h3>
    //                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
    //                             <Link to="#" title="Read More" className="link-btn"><i className="fa fa-arrow-right"></i></Link>
    //                         </div>
    //                     </div>
    //
    //                     <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
    //                         <div className="single-box">
    //                             <i className="fa fa-life-ring icon"></i>
    //                             <h3>Fast Support</h3>
    //                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
    //                             <Link to="#" title="Read More" className="link-btn"><i className="fa fa-arrow-right"></i></Link>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </section>
    //     );
    // }

}
//Props Types
Services.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    servicesData: PropTypes.array
};
//Default Props
Services.defaultProps = {
    SectionbgTitle: "KHÓA HỌC",
    sectionTitle: "KHÓA HỌC THIẾT KẾ ĐỒ HỌA CƠ BẢN NÂNG CAO",
    sectionDescription:
        "Dựa Trên Giáo Trình Được Biên Soạn Bởi Các Giảng Viên Giỏi Nhất.",

    servicesData: [
        {
            Id: "photoshop",
            icon: "icofont-automation",
            heading: "KHOÁ HỌC ĐỒ HỌA PHOTOSHOP",
            description:
                "PHOTOSHOP",
            Image: require("../../images/bg/pts-bg.jpg"),
        },
        {
            Id: "illustrator",
            icon: "icofont-bullseye",
            heading: "KHÓA HỌC ĐỒ HỌA ILLUSTRATOR",
            description:
                "ILLUSTRATOR",
            Image: require("../../images/bg/ai-bg.jpg"),
        },
        {
            Id: "corel",
            icon: "icofont-woman-in-glasses",
            heading: "HỌC THIẾT KẾ ĐỒ HỌA COREL DRAW",
            description:
                "Corel",
            Image: require("../../images/corel.jpg"),
        },
        {
            Id: "indesign",
            icon: "icofont-chart-growth",
            heading: "HỌC THIẾT KẾ ĐỒ HỌA IN DESIGN",
            description:
                "IN DESIGN",
            Image: require("../../images/bg/indesign-bg.jpg"),
        },
        {
            Id: "autocad",
            icon: "icofont-network-tower",
            heading: "HỌC THIẾT KẾ ĐỒ HỌA AUTOCAD",
            description:
                "AUTOCAD",
            Image: require("../../images/bg/autocad-bg.jpg"),
        },
        {
            Id: "3ds-max",
            icon: "icofont-laptop-alt",
            heading: "HỌC THIẾT KẾ ĐỒ HỌA 3Ds MAX",
            description:
                "3Ds MAX",
            Image: require("../../images/bg/3dsmax-bg.jpg"),
        },
        {
            Id: "sketchup",
            icon: "icofont-laptop-alt",
            heading: "HỌC THIẾT KẾ ĐỒ HỌA SKETCHUP",
            description:
                "SKETCHUP",
            Image: require("../../images/bg/sketchup-bg.jpg"),
        },
    ]
};