import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import Icofont from 'react-icofont';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ScrollAnimation from 'react-animate-on-scroll';
import GoogleMapReact from 'google-map-react';
import icon from '../../images/icons/marker-icon.png';
const CustomComponent = ({ text }) => <div><img src={icon} alt="map" /></div>;
export default class Contact extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <section id="contact" className="contact-area ptb-100">
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
                                <div className="address-area">
                                    <div className="addess">
                                        <Icofont icon="icofont-google-map"/>
                                        <h4>{this.props.AddTitle}</h4>
                                        <p>{this.props.Address}</p>
                                    </div>
                                    <div className="email">
                                        <Icofont icon="icofont-email"/>
                                        <h4>{this.props.EmailTitle}</h4>
                                        <p>{this.props.Email}</p>
                                    </div>
                                    <div className="phone">
                                        <Icofont icon="icofont-phone"/>
                                        <h4>{this.props.PhoneTitle}</h4>
                                        <p>{this.props.Phone}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-8 col-md-8">
                                <div id="map">
                                    <div style={{ height: '100%', width: '100%' }}>
                                    <GoogleMapReact
                                        bootstrapURLKeys={{ key: 'AIzaSyDTWAxQ7Z4GNC28ljvgSDBAmTiZ-eYiGog' }}
                                        defaultCenter={this.props.center}
                                        defaultZoom={this.props.zoom}
                                    >
                                        <CustomComponent
                                            lat={10.843641}
                                            lng={106.636033}
                                            text="Marker"
                                        />
                                    </GoogleMapReact>
                                    </div>
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
Contact.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    AddTitle: PropTypes.string,
    Address: PropTypes.string,
    EmailTitle: PropTypes.string,
    Email: PropTypes.string,
    PhoneTitle: PropTypes.string,
    Phone: PropTypes.string,
};

//Default Props
Contact.defaultProps = {
    SectionbgTitle: "Contact",
    sectionTitle: "Liên Hệ Với Chúng Tôi",
    sectionDescription: "Liên Hệ với chúng tôi qua email , số điện thoại hoặc tới trực tiếp trung tâm để đăng kí.",
    AddTitle: "Địa Chỉ",
    Address: "Phòng 504, Tòa C4 Chung cư Khang Gia, Đường 38, Phường 14, Quận Gò Vấp TP Hồ Chí Minh.",
    EmailTitle: "Email",
    Email: "dreamhighx00@gmail.com",
    PhoneTitle: "Phone",
    Phone: "0938636843",
    center: {
        lat: 10.843641,
        lng: 106.636033
    },
    zoom: 14
};
