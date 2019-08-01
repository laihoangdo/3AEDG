import React, {PureComponent} from 'react';
import Icofont from 'react-icofont';
import PropTypes from "prop-types";
import ScrollAnimation from 'react-animate-on-scroll';

export default class Services extends PureComponent {
    render() {
        //Service loop start
        const servicedata = this.props.servicesData.map((service, index) => (
            <div className="col-md-6 col-lg-4 text-center" key={index}>
                <div className="service-item">
                    <div className="glyph">
                        <Icofont icon={service.icon} />
                    </div>
                    <h3>{service.heading}</h3>
                    <p>{service.description}</p>
                    <img
                        src={service.Image}
                        alt="Gallery"
                        className="img-fluid"
                    />
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
                                        <p>{this.props.sectionDescription}</p>
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
            icon: "icofont-automation",
            heading: "Corel",
            description:
                "Corel",
            Image: require("../../images/corel.jpg"),
        },
        {
            icon: "icofont-bullseye",
            heading: "Corel",
            description:
                "Corel",
            Image: require("../../images/corel.jpg"),
        },
        {
            icon: "icofont-woman-in-glasses",
            heading: "Corel",
            description:
                "Corel",
            Image: require("../../images/corel.jpg"),
        },
        {
            icon: "icofont-chart-growth",
            heading: "Corel",
            description:
                "Corel",
            Image: require("../../images/corel.jpg"),
        },
        // {
        //     icon: "icofont-network-tower",
        //     heading: "Corel",
        //     description:
        //         "Corel",
        //     Image: require("../../images/corel.jpg"),
        // },
        // {
        //     icon: "icofont-laptop-alt",
        //     heading: "Corel",
        //     description:
        //         "Corel",
        //     Image: require("../../images/corel.jpg"),
        // },
    ]
};