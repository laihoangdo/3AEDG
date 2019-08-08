import React, {PureComponent} from 'react';
import Icofont from "react-icofont";
import PropTypes from "prop-types";
import ScrollAnimation from "react-animate-on-scroll";
import { MDBContainer, MDBRow } from "mdbreact";
import Lightbox from "react-image-lightbox";

const images = [
    require("../../images/product/pts/pts-hv4.webp"),
    require("../../images/product/pts/pts-hocvien-3.webp"),
    require("../../images/product/ai/ai-hv-2.webp"),
    require("../../images/product/ai/ai-hv-1.webp"),
    require("../../images/product/3ds-max/3ds-max-hv3.webp"),
    require("../../images/product/sketchup/sketchup-hv1.webp"),
];

const smallImages = [
    require("../../images/product/pts/pts-hv4.webp"),
    require("../../images/product/pts/pts-hocvien-3.webp"),
    require("../../images/product/ai/ai-hv-2.webp"),
    require("../../images/product/ai/ai-hv-1.webp"),
    require("../../images/product/3ds-max/3ds-max-hv3.webp"),
    require("../../images/product/sketchup/sketchup-hv1.webp"),
];
export default class Work extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false
        };
    }

    render() {
        const { photoIndex, isOpen } = this.state;
        return (
            <React.Fragment>
                <section id="works" className="our-works ptb-100">
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

                    <MDBContainer>
                        <div className="mdb-lightbox no-margin">
                            <MDBRow>
                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                                src={smallImages[0]}
                                                alt="Gallery"
                                                className="img-fluid"
                                            />
                                            <div className="box-content">

                                                <ul className="icon">
                                                    <li>
                                                        <span
                                                            href= "ll"
                                                            onClick={() => this.setState({ photoIndex: 0, isOpen: true })}
                                                            className="popup-btn">
                                                            <Icofont icon="icofont-search-2"/>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </figure>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                                src={smallImages[1]}
                                                alt="Gallery"
                                                className="img-fluid"
                                            />
                                            <div className="box-content">

                                                <ul className="icon">
                                                    <li>
                                                        <span
                                                            href= "ll"
                                                            onClick={() => this.setState({ photoIndex: 1, isOpen: true })}
                                                            className="popup-btn">
                                                            <Icofont icon="icofont-search-2"/>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </figure>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                                src={smallImages[2]}
                                                alt="Gallery"
                                                className="img-fluid"
                                            />
                                            <div className="box-content">

                                                <ul className="icon">
                                                    <li>
                                                        <span
                                                            href= "ll"
                                                            onClick={() => this.setState({ photoIndex: 2, isOpen: true })}
                                                            className="popup-btn">
                                                            <Icofont icon="icofont-search-2"/>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </figure>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                                src={smallImages[3]}
                                                alt="Gallery"
                                                className="img-fluid"
                                            />
                                            <div className="box-content">

                                                <ul className="icon">
                                                    <li>
                                                        <span
                                                            href= "ll"
                                                            onClick={() => this.setState({ photoIndex: 3, isOpen: true })}
                                                            className="popup-btn">
                                                            <Icofont icon="icofont-search-2"/>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </figure>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                                src={smallImages[4]}
                                                alt="Gallery"
                                                className="img-fluid"
                                            />
                                            <div className="box-content">

                                                <ul className="icon">
                                                    <li>
                                                        <span
                                                            href= "ll"
                                                            onClick={() => this.setState({ photoIndex: 4, isOpen: true })}
                                                            className="popup-btn">
                                                            <Icofont icon="icofont-search-2"/>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </figure>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                                src={smallImages[5]}
                                                alt="Gallery"
                                                className="img-fluid"
                                            />
                                            <div className="box-content">

                                                <ul className="icon">
                                                    <li>
                                                        <span
                                                            href= "ll"
                                                            onClick={() => this.setState({ photoIndex: 5, isOpen: true })}
                                                            className="popup-btn">
                                                            <Icofont icon="icofont-search-2"/>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                            </MDBRow>
                        </div>
                        {isOpen && (
                            <Lightbox
                                mainSrc={images[photoIndex]}
                                nextSrc={images[(photoIndex + 1) % images.length]}
                                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                imageTitle={photoIndex + 1 + "/" + images.length}
                                onCloseRequest={() => this.setState({ isOpen: false })}
                                onMovePrevRequest={() =>
                                    this.setState({
                                        photoIndex: (photoIndex + images.length - 1) % images.length
                                    })
                                }
                                onMoveNextRequest={() =>
                                    this.setState({
                                        photoIndex: (photoIndex + 1) % images.length
                                    })
                                }
                            />
                        )}
                    </MDBContainer>
                </section>
            </React.Fragment>
        );
    }
}
//Props Types
Work.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
};

//Default Props
Work.defaultProps = {
    SectionbgTitle: "Trải Nghiệm",
    sectionTitle: "Sản Phẩm Học Viên",
    sectionDescription:
        "Sản Phẩm được học viên tại Đồ Họa Anh Em Hoàn thành.",
};
