import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Router from "./route"
import './semantic/dist/semantic.min.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import item from './reducers/item';


const store = createStore(item);

ReactDOM.render(
    <Provider store={store}>
        <Router/>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
