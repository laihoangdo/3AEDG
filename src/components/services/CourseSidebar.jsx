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
                <p><Icofont icon="icofont-tags icofont-1x" /> &nbsp;{tag.tagName}</p>
                {/*<Link to={tag.tagLink}>{tag.tagName}</Link>*/}
            </li>
        ));
        //Sidebar Tags loop END

        return (
            <React.Fragment>
                <div className="col-lg-4">
                    {/*<div className="side-widget">*/}
                    {/*    <div className="search-form">*/}
                    {/*        <form>*/}
                    {/*            <input type="text" className="form-control" id="" placeholder="Search" />*/}
                    {/*            <button type="submit" className="btn btn-default"><Icofont icon="icofont-search-2" /></button>*/}
                    {/*        </form>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="side-widget">
                        <div >
                        <div className="pane-content">
                            <aside id="text-4" >
                                <p className="widget-title">Tư vấn</p>

                                <div className="textwidget">0938636843</div>
                            </aside>
                        </div>
                        </div>
                    </div>

                    <div className="side-widget">
                        <h3>{this.props.widgetTitle1}</h3>

                        {sidebardata}

                    </div>

                    <div className="side-widget">
                        <h3>{this.props.widgetTitle2}</h3>

                        {sidebardata[0]}{sidebardata[1]}

                    </div>

                    {/*<div className="side-widget">*/}
                    {/*    <h3>{this.props.widgetTitle3}</h3>*/}
                    {/*    <ul className="list-group">*/}
                    {/*        {categoriedata}*/}
                    {/*    </ul>*/}
                    {/*</div>*/}

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
            Image: require("../../images/bg/ai-bg.jpg"),
            PostTitle: "Khóa Học Illustrator",
            postContent: "Khóa Học Illustrator",
            postDate: "10 Mar",
            teacher: "Thầy Long",
            facebookLink : "https://facebook.com/tiencanh.chonphieubong"
        },
        {
            postsLink: "/khoa-hoc/photoshop",
            Image: require("../../images/bg/pts-bg.jpg"),
            PostTitle: "Khóa Học Photoshop",
            postContent: "Khóa Học Photoshop",
            postDate: "10 Mar",
            teacher: "Thầy Long",
            facebookLink : "https://facebook.com/tiencanh.chonphieubong"
        },
        {
            postsLink: "/khoa-hoc/corel",
            Image: require("../../images/corel.jpg"),
            PostTitle: "Khóa Học Corel",
            postContent: "Khóa Học Corel",
            postDate: "10 Mar",
            teacher: "Thầy Long",
            facebookLink : "https://facebook.com/tiencanh.chonphieubong"
        },
        {
            postsLink: "/khoa-hoc/autocad",
            Image: require("../../images/bg/autocad-bg.jpg"),
            PostTitle: "Khóa Học Autocad",
            postContent: "Khóa Học Autocad",
            postDate: "10 Mar",
            teacher: "Thầy Long",
            facebookLink : "https://facebook.com/tiencanh.chonphieubong"
        },
        {
            postsLink: "/khoa-hoc/indesign",
            Image: require("../../images/bg/indesign-bg.jpg"),
            PostTitle: "Khóa Học Indesign",
            postContent: "Khóa Học Indesign",
            postDate: "10 Mar",
            teacher: "Thầy Long",
            facebookLink : "https://facebook.com/tiencanh.chonphieubong"
        },
        {
            postsLink: "/khoa-hoc/3ds-max",
            Image: require("../../images/bg/3dsmax-bg.jpg"),
            PostTitle: "Khóa Học 3Ds Max",
            postContent: "Khóa Học 3Ds Max",
            postDate: "10 Mar",
            teacher: "Thầy Long",
            facebookLink : "https://facebook.com/tiencanh.chonphieubong"
        },
        {
            postsLink: "/khoa-hoc/sketchup",
            Image: require("../../images/bg/sketchup-bg.jpg"),
            PostTitle: "Khóa Học SketChup",
            postContent: "Khóa Học SketChup",
            postDate: "10 Mar",
            teacher: "Thầy Long",
            facebookLink : "https://facebook.com/tiencanh.chonphieubong"
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