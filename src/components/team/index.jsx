import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import Icofont from 'react-icofont';
import OwlCarousel from 'react-owl-carousel3';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Team extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false
        };
    }

    render() {
        //Team loop start
        const teamdata = this.props.teamsData.map((team, index) => (
            <div className="team-box" key={index}>
                <img src={team.Image} alt="Description" />
                <div className="box-content">
                    <div className="box-inner-content">
                        <h3 className="title">{team.Name}</h3>
                        <span className="post">{team.Profession}</span>
                        <ul className="icon">
                            {/*<li><Link to={team.facebookLink}><Icofont icon="icofont-facebook" /></Link></li>*/}
                            <li><a href={this.props.teamsData[index].facebookLink} rel="noopener noreferrer" target="_blank"><Icofont icon="icofont-facebook" /></a></li>
                            <li><a href={team.skypeLink} rel="noopener noreferrer" target="_blank"><Icofont icon="icofont-skype icofont-1x" /></a></li>
                            <li><a href={team.youtubeLink} rel="noopener noreferrer" target="_blank"><Icofont icon="icofont-technorati icofont-1x" /></a></li>


                        </ul>
                    </div>
                </div>
            </div>
        ));
        //Team loop END
        return (
            <React.Fragment>
                <section id="team" className="our-team ptb-100">
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
                            <OwlCarousel
                                className="owl-theme team-slides"
                                dots= {false}
                                autoplay= {true}
                                loop= {true}
                                margin={30}
                                nav={true}
                                smartSpeed= {1000}
                                autoplayHoverPause= {true}
                                navText= {[
                                    "<i class='icofont-arrow-left'></i>",
                                    "<i class='icofont-arrow-right'></i>"
                                ]}
                                responsive={{
                                    0: { items: 1 },
                                    768: {
                                        items: 2
                                    },
                                    1024: {
                                        items: 3
                                    },
                                    1200: {
                                        items: 3
                                    }
                                }}
                            >
                                {teamdata}
                            </OwlCarousel>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
//Props Types
Team.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    teamsData: PropTypes.array
};

//Default Props
Team.defaultProps = {
    SectionbgTitle: "Giảng Viên",
    sectionTitle: "Đội Ngũ Giảng Viên",
    sectionDescription:
        "Đội ngũ giảng viên đều là các chuyên viên thiết kế đồ họa tốt nghiệp chuyên ngành thiết kế đồ họa của những trường đại học danh tiếng như CNTT , Bách Khoa ..., luôn luôn tận tâm trong công việc.",
    teamsData: [
        {
            Image: require("../../images/thaytien-avatar01.jpg"),
            Name: "Thầy Long",
            Profession: "Giảng Viên 2D ,3D",
            facebookLink: "https://facebook.com/tiencanh.chonphieubong",
            skypeLink: "skype:live:lai.do_1?chat",
            youtubeLink: "https://zalo.me/0337590737",
        },
        {
            Image: require("../../images/thay-chau.jpg"),
            Name: "Thầy Châu",
            Profession: "Giảng Viên 2D ,3D",
            facebookLink: "https://facebook.com/profile.php?id=100026725434352",
            skypeLink: "skype:live:lai.do_1?chat",
            youtubeLink: "https://zalo.me/0343472015",
        },
        {
            Image: require("../../images/thay-TA1.jpg"),
            Name: "Thầy Tuấn Anh",
            Profession: "Giảng Viên 2D ,3D",
            facebookLink: "https://www.facebook.com/profile.php?id=100014332325166",
            skypeLink: "skype:live:lai.do_1?chat",
            youtubeLink: "https://zalo.me/0343472015",
        }

    ]
};
