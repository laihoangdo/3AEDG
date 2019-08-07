import React, {PureComponent} from 'react';
import Icofont from 'react-icofont';
import OwlCarousel from "react-owl-carousel3";
import PropTypes from "prop-types";

export default class Review extends PureComponent {
    render() {
        //Testimonials loop start
        const testimonialsitem = this.props.testimonialsData.map((testimonials, index) => (
            <div className="single-testimonial-item text-center" key={index}>
                <Icofont icon="icofont-quote-left" />
                <p>{testimonials.Content}</p>

                <div className="client-profile">
                    <img src={testimonials.clientImage} alt="client-one" />
                </div>

                <div className="client-info">
                    <h3>{testimonials.Name}</h3>
                    <span>{testimonials.Profession}</span>
                </div>
            </div>
        ));
        //Testimonials loop END
        return (
            <React.Fragment>
                <section className="testimonials ptb-100">
                    <div className="container">
                        <OwlCarousel
                            className="owl-theme testimonial-slides"
                            items={1}
                            nav= {true}
                            dots= {false}
                            autoplay= {false}
                            loop= {true}
                            autoplayHoverPause= {true}
                            smartSpeed= {1000}
                            navText= {[
                                "<i class='icofont-arrow-left'></i>",
                                "<i class='icofont-arrow-right'></i>"
                            ]}
                        >
                            {testimonialsitem}
                        </OwlCarousel>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

//Props Types
Review.propTypes = {
    testimonialsData: PropTypes.array
};

//Default Props
Review.defaultProps = {
    testimonialsData: [
        {
            clientImage: require("../../images/thaytien1.jpg"),
            Content: "Chất lượng giảng dạy rất tốt . Giảng viên nhiệt tình giúp đỡ , sau khi hoàn thành khó học 2D tại trung tâm tôi đã có thể kiếm được công việc và có thu nhập ổn định.",
            Name: "Thanh Bo",
            Profession: "Học Viên Khóa 2019",
        },
        {
            clientImage: require("../../images/thaytien1.jpg"),
            Content: "\n" +
                "​\n" +
                "\n" +
                "Mình xuất thân là dân tay ngang, học ĐH Ngoại ngữ ra nhưng có niềm đam mê với Marketing và Thiết kế. Với mình, trọn bộ khóa học này rất thú vị và cần thiết, đặc biệt với các marketer và designer tay ngang hay mới vào nghề. Khóa học giúp mình có nền tảng về thiết kế và có thể học về thiết kế đồ họa một cách bài bản nhất, được các thầy hỗ trợ nhiệt tình mà chi phí hợp lý.",
            Name: "Hoang Do",
            Profession: "Học Viên Khóa 2019",
        },
    ]
};