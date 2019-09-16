import React, {PureComponent} from 'react';
import Lightbox from "react-image-lightbox";
import 'react-image-lightbox/style.css';
import { Link } from 'react-router-dom';
import mixitup from "mixitup";
import PropTypes from "prop-types";
import Icofont from 'react-icofont';
import ScrollAnimation from "react-animate-on-scroll";
export default class Work2 extends PureComponent {
    state = {
        photoIndex: 0,
        isOpen: false
    };

    componentDidMount() {
        mixitup("#mix-wrapper", {
            animation: {
                effects: "fade rotateZ(0deg)",
                duration: 1400
            },
            classNames: {
                block: "programs",
                elementFilter: "filter-btn",
            },
            selectors: {
                target: ".mix-target"
            }
        });
    }

    render(){
        const { photoIndex, isOpen } = this.state;
        return (
            <React.Fragment>
            <section id="works" className="work-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <ScrollAnimation animateIn="fadeInUp">
                                <div className="section-title">
                                    <h2>{this.props.sectionTitle}</h2>
                                    <h3>{this.props.sectionDescription}</h3>
                                    <span className="section-title-bg">
                                            {this.props.SectionbgTitle}
                                        </span>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
                <div className="container content-product">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="shorting-menu">
                                <button
                                    className="filter"
                                    data-filter="all"
                                >
                                    All
                                </button>
                                <button
                                    className="filter"
                                    data-filter=".photoshop"
                                >
                                    Photoshop
                                </button>
                                <button
                                    className="filter"
                                    data-filter=".illustrator"
                                >
                                    Illustrator
                                </button>
                                <button
                                    className="filter"
                                    data-filter=".corel"
                                >
                                    Corel
                                </button>
                                <button
                                    className="filter"
                                    data-filter=".indesign"
                                >
                                    Indesign
                                </button>
                                <button
                                    className="filter"
                                    data-filter=".autocad"
                                >
                                    Autocad
                                </button>
                                <button
                                    className="filter"
                                    data-filter=".dmax"
                                >
                                    3DsMax
                                </button>
                                <button
                                    className="filter"
                                    data-filter=".sketchup"
                                >
                                    SketChup
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shorting">
                    <div className="row m-0" id="mix-wrapper">
                        {this.props.imageList.map((image , index) => (
                            <div key={index} className={image.name}>
                                <div className="single-work">
                                    <img src={image.link} alt="work-img" />

                                    <div className="work-content">
                                        <h4>Đồ Họa Thế Hệ Mới</h4>
                                        <ul>
                                            <li><a href={image.facebookLink} rel="noopener noreferrer" target="_blank"><Icofont icon="icofont-facebook" />{image.author}</a></li>
                                        </ul>
                                    </div>

                                    <Link
                                        to="#"
                                        className="popup-btn"
                                        onClick={() =>  this.setState({ photoIndex: index, isOpen: true })}
                                    ><Icofont icon="icofont-ui-zoom-in icofont-1x" /></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {isOpen && (
                    <Lightbox
                        mainSrc={this.props.imageList[photoIndex].link}
                        nextSrc={this.props.imageList[(photoIndex + 1) % this.props.imageList.length].link}
                        prevSrc={this.props.imageList[(photoIndex + this.props.imageList.length - 1) % this.props.imageList.length].link}
                        imageTitle={photoIndex + 1 + "/" + this.props.imageList.length}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + this.props.imageList.length - 1) % this.props.imageList.length
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % this.props.imageList.length
                            })
                        }
                    />
                )}
            </section>
            </React.Fragment>
        );
    }
}
// Props Types
Work2.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    imageList: PropTypes.array
};

//Default Props
Work2.defaultProps = {
    SectionbgTitle: "Trải Nghiệm",
    sectionTitle: "Sản Phẩm Học Viên",
    sectionDescription:
        "Sản Phẩm được học viên tại Đồ Họa Thế Hệ Mới Hoàn thành.",
    imageList: [
        {
            link: require("../../images/product/pts/pts-hv4.jpg"),
            name: "col-lg-4 col-md-6 mix photoshop p-0 mix-target",
            author: "Thành Bộ",
            facebookLink: "https://www.facebook.com/thanh.bo.9256"
        },
        {
            link: require("../../images/product/pts/pts-hv1.jpg"),
            name: "col-lg-4 col-md-6 mix photoshop p-0 mix-target",
            author: "Thành Bộ",
            facebookLink: "https://www.facebook.com/thanh.bo.9256"
        },
        {
            link: require("../../images/product/ai/ai-hv2.jpg"),
            name: "col-lg-4 col-md-6 mix illustrator p-0 mix-target",
            author: "Thành Bộ",
            facebookLink: "https://www.facebook.com/thanh.bo.9256"
        },
        {
            link: require("../../images/product/corel/corel-hv3.jpg"),
            name: "col-lg-4 col-md-6 mix corel p-0 mix-target",
            author: "Thành Bộ",
            facebookLink: "https://www.facebook.com/thanh.bo.9256"
        },
        {
            link: require("../../images/product/indesign/indesign-hv2.jpg"),
            name: "col-lg-4 col-md-6 mix indesign p-0 mix-target",
            author: "Thành Bộ",
            facebookLink: "https://www.facebook.com/thanh.bo.9256"
        },
        {
            link: require("../../images/product/autocad/autocad-hv1.jpg"),
            name: "col-lg-4 col-md-6 mix autocad p-0 mix-target",
            author: "Hoàng Đô",
            facebookLink: "https://www.facebook.com/laihoang.do"
        },
        {
            link: require("../../images/product/3ds-max/3ds-max-hv1.jpg"),
            name: "col-lg-4 col-md-6 mix dmax p-0 mix-target",
            author: "Hoàng Đô",
            facebookLink: "https://www.facebook.com/laihoang.do"
        },
        {
            link: require("../../images/product/3ds-max/3ds-max-hv2.jpg"),
            name: "col-lg-4 col-md-6 mix dmax p-0 mix-target",
            author: "Hoàng Đô",
            facebookLink: "https://www.facebook.com/laihoang.do"
        },
        {
            link: require("../../images/product/sketchup/sketchup-hv3.jpg"),
            name: "col-lg-4 col-md-6 mix  p-0 mix-target sketchup",
            author: "Hoàng Đô",
            facebookLink: "https://www.facebook.com/laihoang.do"
        },
    ]
};
