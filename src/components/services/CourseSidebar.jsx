import React, {PureComponent} from 'react';
import Icofont from 'react-icofont';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

export default class CourseSidebar extends PureComponent {
    render() {
        //Sidebar Posts loop start
        const sidebardata = this.props.sideData.map((sidebar, index) => (
            <div className="single-post" key={index}>
                <Link to={sidebar.postsLink} target="_blank"><img src={sidebar.Image} alt="post" /></Link>
                <h4><Link to={sidebar.postsLink} target="_blank">{sidebar.PostTitle}</Link></h4>

                <div className="post-meta">
                    <p>{sidebar.postContent}</p>
                    <ul>
                        <li><a href={sidebar.facebookLink} rel="noopener noreferrer" target="_blank"><Icofont icon="icofont-facebook" />Giảng Viên: {sidebar.teacher} </a></li>
                        {/*<li><a href={this.props.instagramLink} rel="noopener noreferrer" target="_blank"><Icofont icon="icofont-instagram" /></a></li>*/}
                    </ul>
                </div>
            </div>
        ));
        //Sidebar Posts loop END

        //Sidebar Categories loop start
        const categoriedata = this.props.categoriesData.map((categories, index) => (
            <li className="list-group-item" key={index}>
                <Link to={categories.categorieLink}>{categories.categorieName}</Link>
            </li>
        ));
        //Sidebar Categories loop END

        //Sidebar Tags loop start
        const tagdata = this.props.tagsData.map((tag, index) => (
            <li key={index}>
                <h4>{tag.tagName}</h4>
                {/*<Link to={tag.tagLink}>{tag.tagName}</Link>*/}
            </li>
        ));
        //Sidebar Tags loop END

        return (
            <React.Fragment>
                <div className="col-lg-4">
                    <div className="side-widget">
                        <div className="search-form">
                            <form>
                                <input type="text" className="form-control" id="" placeholder="Search" />
                                <button type="submit" className="btn btn-default"><Icofont icon="icofont-search-2" /></button>
                            </form>
                        </div>
                    </div>

                    <div className="side-widget">
                        <h3>{this.props.widgetTitle1}</h3>

                        {sidebardata}

                    </div>

                    <div className="side-widget">
                        <h3>{this.props.widgetTitle2}</h3>

                        {sidebardata}

                    </div>

                    <div className="side-widget">
                        <h3>{this.props.widgetTitle3}</h3>
                        <ul className="list-group">
                            {categoriedata}
                        </ul>
                    </div>

                    <div className="side-widget">
                        <h3>{this.props.widgetTitle4}</h3>
                        <ul className="list-tags">
                            {tagdata}
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
//Props Types
CourseSidebar.propTypes = {
    widgetTitle1: PropTypes.string,
    widgetTitle2: PropTypes.string,
    widgetTitle3: PropTypes.string,
    widgetTitle4: PropTypes.string,
    sideData: PropTypes.array,
    categoriesData: PropTypes.array,
    tagsData: PropTypes.array,
};

//Default Props
CourseSidebar.defaultProps = {
    widgetTitle1: "CÁC KHÓA HỌC KHÁC TẠI TRUNG TÂM",
    widgetTitle2: "KHÓA HỌC HOT",
    widgetTitle3: "Categories",
    widgetTitle4: "Tags",
    sideData: [
        {
            postsLink: "/khoa-hoc/illustrator",
            Image: require("../../images/ai-bg.jpg"),
            PostTitle: "Khóa Học Illustrator",
            postContent: "Khóa Học Illustrator",
            postDate: "10 Mar",
            teacher: "Thầy Long",
            facebookLink : "//facebook.com/tiencanh.chonphieubong"
        },
        {
            postsLink: "/khoa-hoc/photoshop",
            Image: require("../../images/pts-bg.jpg"),
            PostTitle: "Khóa Học Photoshop",
            postContent: "Khóa Học Photoshop",
            postDate: "10 Mar",
            teacher: "Thầy Long",
            facebookLink : "//facebook.com/tiencanh.chonphieubong"
        },
        {
            postsLink: "/khoa-hoc/corel",
            Image: require("../../images/corel.jpg"),
            PostTitle: "Khóa Học Corel",
            postContent: "Khóa Học Corel",
            postDate: "10 Mar",
            teacher: "Thầy Long",
            facebookLink : "//facebook.com/tiencanh.chonphieubong"
        },
    ],
    categoriesData: [
        {
            categorieLink: "/#0",
            categorieName: "Business",
        },
        {
            categorieLink: "/#0",
            categorieName: "Technology",
        },
        {
            categorieLink: "/#0",
            categorieName: "Food",
        },
        {
            categorieLink: "/#0",
            categorieName: "Family",
        },
    ],
    // tagsData: [
    //     {
    //         tagLink: "/#0",
    //         tagName: "Business",
    //     },
    //     {
    //         tagLink: "/#0",
    //         tagName: "Family",
    //     },
    //     {
    //         tagLink: "/#0",
    //         tagName: "Technology",
    //     },
    //     {
    //         tagLink: "/#0",
    //         tagName: "Business",
    //     },
    //     {
    //         tagLink: "/#0",
    //         tagName: "Food",
    //     },
    //     {
    //         tagLink: "/#0",
    //         tagName: "Technology",
    //     },
    //     {
    //         tagLink: "/#0",
    //         tagName: "Technology",
    //     },
    //     {
    //         tagLink: "/#0",
    //         tagName: "Business",
    //     },
    //     {
    //         tagLink: "/#0",
    //         tagName: "Food",
    //     },
    //     {
    //         tagLink: "/#0",
    //         tagName: "Technology",
    //     },
    // ]

};