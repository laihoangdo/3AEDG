import React, {PureComponent} from 'react';
import Header from '../header';
import Footer from '../footer';
import Banner from '../Banner';
import Services from "../services";
import Work from "../work";
import Team from "../team";
import Blog from "../blog/Blog";
import Review from "../Review";
import Contact from '../contact';
import AboutUs from '../aboutus';

export default class HomeOne extends PureComponent {
    render() {
        return (
            <React.Fragment>
            {/* NavBar: src/components/NavBar.jsx */}
            <Header pageName="home" />
            {/* BannerOne: src/components/banner/BannerOne */}
            <Banner />
            {/* Services: src/components/Services.jsx */}
            <Services/>
            <Work/>
            <Team/>
            <Blog/>
            <AboutUs/>
            <Review/>
            <Contact/>
            <Footer />
        </React.Fragment>
        )
    }

}