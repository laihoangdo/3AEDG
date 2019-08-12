import React, {PureComponent} from 'react';
import Header from '../header';
import Footer from '../footer';
import Banner from '../Banner';
import Services from "../services";
import Team from "../team";
import Blog from "../blog/Blog";
import Review from "../Review";
import Contact from '../contact';
import AboutUs from '../aboutus';
import Work2 from "../work2";

export default class HomeOne extends PureComponent {
// <div className="ca-pic set-bg" style={ { backgroundImage: `url(${teacher})` } }></div>
    render() {
        return (
            <React.Fragment>
            {/* NavBar: src/components/NavBar.jsx */}
            <Header pageName="home" />
            <Banner />
            <Services/>
            <Work2/>
            {/*<Team/>*/}
            <Blog/>
            <AboutUs/>
            <Review/>
            <Contact/>
            <Footer />
        </React.Fragment>
        )
    }
}