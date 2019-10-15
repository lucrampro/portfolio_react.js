import React from 'react';
import ReactDOM from 'react-dom';
// STYLE
import './index.css';
// FONTS

import './fonts/didotbold.woff2'
import './fonts/didotbold.woff'
import './fonts/gothamBold.woff2'
import './fonts/gothamBold.woff2'
import './fonts/gothamBook.woff2'
import './fonts/gothamBook.woff2'
// APP
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
