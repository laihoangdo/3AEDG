import React, { Component , Suspense } from 'react';
import {Route, Switch} from "react-router-dom";
import Page from "react-page-loading";
import { CSSTransition } from "react-transition-group";
import './App.css';
import ScrollUpBtn from './components/scroll';
import routes from './router';
import CallButton from "./components/callButton";
import Loading from "./modules/loading";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Page loader={"comet-spin"} color={"#1452d9"} size={50}>
            <div>
                <Suspense fallback={<Loading/>}>
                        <Route
                            render={({ location }) => (
                                <CSSTransition
                                    key={location.key}
                                    timeout={{ enter: 900, exit: 900 }}
                                    classNames="fade"
                                >
                                    <section className="route-section">
                                          <Switch location={location}>
                                            {
                                              routes.map(({...restRouter}) => {
                                                return (
                                                    <Route key={restRouter.path} {...restRouter}/>
                                                )
                                              })
                                            }
                                          </Switch>
                                    </section>
                                </CSSTransition>
                            )}
                        />
                </Suspense>
                        <CallButton/>
                        <ScrollUpBtn />
                    </div>
          </Page>
      </div>
    );
  }
}

export default App;
