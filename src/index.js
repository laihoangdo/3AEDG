import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter , BrowserRouter} from 'react-router-dom';
// import createHistory from 'history/createBrowserHistory';
import { createBrowserHistory as createHistory } from 'history'
import ConnectedRouter from 'react-router-redux';
import rootReducer from "./store";
// import { createLogger } from 'redux-logger';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const middleware = [thunk];
// applyMiddleware(logger)
// const logger = createLogger();
const store =  createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))

);
const history = createHistory({
    basename: process.env.PUBLIC_URL,
});
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter history={history}>
        <App />
        </BrowserRouter>
    </Provider>
     
     , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
