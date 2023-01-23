import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import { createLogger} from 'redux-logger';
import ThunkMiddleware  from 'redux-thunk';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons'
import { searchRobots, requestRobots } from './reducer';


const logger = createLogger();

const rootReducer = combineReducers({searchRobots, requestRobots})
const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware, logger))

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider> , document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
