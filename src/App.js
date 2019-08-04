import React, { Component } from 'react';
import {Route, Switch , Redirect} from "react-router-dom";
import Page from "react-page-loading";
import { CSSTransition } from "react-transition-group";
// import './App.css';
import './css/style.css';
import './css/responsive.css';
import './css/color-default.css';
import ScrollUpBtn from './components/scroll';
import routes from './router';

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
                                        {/* <Switch location={location}>
                                            
                                            <Route
                                                path="/"
                                                component={HomeOne}
                                            />
                                            <Route
                                                path="/blog-posts"
                                                component={Single}
                                            />
                                            <Redirect to="/aboutus" />
                                        </Switch> */}
                                          <Switch location={location}>
                                            {
                                              routes.map(({...restRouter}) => {
                                                return (
                                                    <Route {...restRouter}/>
                                                )
                                              })
                                            }
                                          </Switch>
                                    </section>
                                </CSSTransition>
                            )}
                        />
                        {/* ScrollUpBtn: src/components/ScrollUp.jsx */}
                        <ScrollUpBtn />
                    </div>
          </Page>
      </div>
    );
  }
}

export default App;
