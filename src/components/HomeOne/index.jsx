import React, {PureComponent} from 'react';
import bg from '../../images/bg.jpg';
import ps from '../../images/ps.jpg';
import ai from '../../images/ai.png';
import corel from '../../images/corel.jpg';
import teacher from '../../images/thaytien1.jpg';
import Header from '../header';
import Footer from '../footer';
import Banner from '../Banner';

export default class HomeOne extends PureComponent {
    render() {
        return (
            <React.Fragment>
            {/* NavBar: src/components/NavBar.jsx */}
            <Header pageName="home" />
            {/* BannerOne: src/components/banner/BannerOne */}
            <Banner />
            {/* Services: src/components/Services.jsx */}          
            <Footer />
        </React.Fragment>
        )
    }

}