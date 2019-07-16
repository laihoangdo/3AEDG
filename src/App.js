import React, { Component } from 'react';
import {Route, Switch , Redirect} from "react-router-dom";
import routes from "./router";
import Page from "react-page-loading";
import { CSSTransition } from "react-transition-group";
// import bg from './images/bg.jpg';
// import ps from './images/ps.jpg';
// import ai from './images/ai.png';
// import corel from './images/corel.jpg';
// import teacher from './images/thaytien1.jpg';
// import './App.css';
import './css/style.css';
import './css/responsive.css';
import './css/color-default.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import HomeOne from './components/HomeOne';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Page loader={"comet-spin"} color={"#1452d9"} size={50}>
          {/* <div className="layout">
          <Header/>
          <Switch>
              {
                routes.map(({...restRouter}) => {
                  return (
                      <Route {...restRouter}/>
                  )
                })
              }
            </Switch>
            <Footer/>
            </div> */}

            <div>
                        <Route
                            render={({ location }) => (
                                <CSSTransition
                                    key={location.key}
                                    timeout={{ enter: 900, exit: 900 }}
                                    classNames="fade"
                                >
                                    <section className="route-section">
                                        <Switch location={location}>
                                            
                                            <Route
                                                path="/"
                                                component={HomeOne}
                                            />
                                            <Redirect to="/aboutus" />
                                        </Switch>
                                    </section>
                                </CSSTransition>
                            )}
                        />
                        {/* ScrollUpBtn: src/components/ScrollUp.jsx */}
                        {/* <ScrollUpBtn /> */}
                    </div>
          </Page>
      </div>
    );
  }
}

export default App;
