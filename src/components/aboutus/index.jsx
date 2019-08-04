import React, {PureComponent} from 'react';
import Icofont from 'react-icofont';
import PropTypes from "prop-types";
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
import ScrollAnimation from 'react-animate-on-scroll';

export default class AboutUs extends PureComponent {
    state = {
        didViewCountUp: false
    };

    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({ didViewCountUp: true });
        }
    };
  render() {
    return (
        <React.Fragment>
            <section id="aboutus" className="fun-facts ptb-100">
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
                        <div className="col-lg-4 col-md-4">
                            <div className="count-box text-center">
                                <div className="glyph">
                                    <Icofont icon="icofont-handshake-deal" />
                                </div>
                                <p>HỌC VIÊN</p>
                                <h2 className="counter">
                                <VisibilitySensor
                                    onChange={this.onVisibilityChange}
                                    offset={{
                                        top: 10
                                    }}
                                    delayedCall
                                >
                                    <CountUp
                                        start={0}
                                        end={
                                            this.state.didViewCountUp
                                                ? 150
                                                : 0
                                        }
                                        duration={3}
                                    />
                                </VisibilitySensor>
                                </h2>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <div className="count-box text-center">
                                <div className="glyph">
                                    <Icofont icon="icofont-checked" />
                                </div>
                                <p>ĐÃ HOÀN THÀNH KHÓA HỌC</p>
                                <h2 className="counter">
                                <VisibilitySensor
                                    onChange={this.onVisibilityChange}
                                    offset={{
                                        top: 10
                                    }}
                                    delayedCall
                                >
                                    <CountUp
                                        start={0}
                                        end={
                                            this.state.didViewCountUp
                                                ? 80
                                                : 0
                                        }
                                        duration={3}
                                    />
                                </VisibilitySensor>
                                </h2>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4">
                            <div className="count-box text-center">
                                <div className="glyph">
                                    <Icofont icon="icofont-trophy-alt" />
                                </div>
                                <p>VINH DANH</p>
                                <h2 className="counter">
                                <VisibilitySensor
                                    onChange={this.onVisibilityChange}
                                    offset={{
                                        top: 10
                                    }}
                                    delayedCall
                                >
                                    <CountUp
                                        start={0}
                                        end={
                                            this.state.didViewCountUp
                                                ? 10
                                                : 0
                                        }
                                        duration={3}
                                    />
                                </VisibilitySensor>
                                </h2>
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
AboutUs.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string
};

//Default Props
AboutUs.defaultProps = {
    SectionbgTitle: "ĐỒ HỌA ANH EM",
    sectionTitle: "ĐỒ HỌA ANH EM GIÚP BẠN GẦN HƠN VỚI THÀNH CÔNG",
    sectionDescription:
        "CHÚNG TÔI ĐÃ LÀM ĐƯỢC.",
};
    