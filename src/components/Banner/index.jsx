import React,{} from 'react';
import OwlCarousel from "react-owl-carousel3";
import Icofont from "react-icofont";
import PropTypes from "prop-types";
import VisibilitySensor from "react-visibility-sensor";

 export default function Banner({banneronesData ,thumbsData}){
        const banneronedata = banneronesData.map(
            (bannerone, index) => (
                <div className={bannerone.BgClass} key={index}>
                    <div className="diplay-table">
                        <div className="display-table-cell">
                            <VisibilitySensor>
                                {({ isVisible }) => (
                                <div className="container">
                                    <div className="row">
                                        <div className="main-banner-text">
                                            <div className="col-lg-8">
                                                <span
                                                    className={
                                                        isVisible
                                                            ? "hero-text animated fadeInDown slow opacityOne"
                                                            : "opacityZero"
                                                    }
                                                >
                                                    {bannerone.TopTitle}
                                                </span>

                                                <h1
                                                    className={
                                                        isVisible
                                                            ? "animated fadeInDown slow opacityOne h1-style"
                                                            : "opacityZero h1-style"
                                                    }
                                                >
                                                    {bannerone.Title}
                                                </h1>
                                                {/*<p*/}
                                                {/*    className={*/}
                                                {/*        isVisible*/}
                                                {/*            ? "animated fadeInDown slow opacityOne"*/}
                                                {/*            : "opacityZero"*/}
                                                {/*    }*/}
                                                {/*>*/}
                                                {/*    {bannerone.Content}*/}
                                                {/*</p>*/}
                                                <div className="center-wrap">
                                                    {/*<AnchorLink href="#services" className="btn btn-primary">Khóa Học <Icofont icon="icofont-long-arrow-right" /></AnchorLink>*/}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            </VisibilitySensor>
                        </div>
                    </div>
                </div>
            )
        );
        //BannerOne loop END

        //Thumbs loop Start
        const thumbdata = thumbsData.map((thumb, index) => (
            <div className="owl-thumb-item" key={index}>
                <Icofont icon={thumb.ThumbIcon} />
                <h3>{thumb.ThumbTitle}</h3>
                <p>{thumb.ThumbContent}</p>
            </div>
            )
        );
        return(
            <React.Fragment>
            <div id="home" className="hompage-slides-wrapper">
                <OwlCarousel
                    className="owl-theme homepage-slides"
                    items={1}
                    autoplay={true}
                    touchDrag={false}
                    margin={0}
                    loop={true}
                    mouseDrag={false}
                    smartSpeed={1000}
                    dotData={true}
                    dotsContainer={".owl-thumbs"}
                >
                    {banneronedata}
                </OwlCarousel>

                {/*<div className="owl-thumbs">*/}
                    {/*{thumbdata}*/}
                {/*</div>*/}
            </div>
        </React.Fragment>
        )

}
//Props Types
Banner.propTypes = {
    banneronesData: PropTypes.array,
    thumbsData: PropTypes.array
};

//Default Props
Banner.defaultProps = {
    banneronesData: [
        {
            BgClass: "single-slider-item slide-bg-1",
            TopTitle: "Sáng Tạo & Đam Mê",
            Title: "Thiết Kế Đồ Họa Thế Hệ Mới",
            Content:
                "Cam Kết Đào Tạo ,Tạo ra Giá Trị Riêng Cho Bạn.",
        },
        {
            BgClass: "single-slider-item slide-bg-2",
            TopTitle: "Sáng Tạo & Đam Mê",
            Title: "Thiết Kế Đồ Họa Thế Hệ Mới",
            Content:
                "Cam Kết Đào Tạo ,Tạo ra Giá Trị Riêng Cho Bạn.",
        },
        {
            BgClass: "single-slider-item slide-bg-3",
            TopTitle: "Sáng Tạo & Đam Mê",
            Title: "Thiết Kế Đồ Họa Thế Hệ Mới",
            Content:
                "Cam Kết Đào Tạo ,Tạo ra Giá Trị Riêng Cho Bạn.",
        }
    ],
    thumbsData: [
        {
            ThumbIcon: "icofont-rocket-alt-1",
            ThumbTitle: "Cam Kết",
            ThumbContent: "Được đào tạo bởi những người thầy giỏi , tận tâm trong công việc.",
        },
        {
            ThumbIcon: "icofont-box",
            ThumbTitle: "Thực Hành",
            ThumbContent: "Được thực hành 100% trong quá trình học với sự chỉ bảo của giảng viên.",
        },
        {
            ThumbIcon: "icofont-live-support",
            ThumbTitle: "Hỗ Trợ",
            ThumbContent: "Hỗ trợ một phần chi phí cho những bạn có hoàn cảnh đặc biệt khó khăn.",
        },
    ]
};