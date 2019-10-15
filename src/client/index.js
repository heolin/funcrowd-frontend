import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import browser from "./utils/DetectIE";
import NotSupported from "./NotSupported";


let result = browser.detectIE();

if (result)
    ReactDOM.render(<NotSupported />, document.getElementById('root'));
else {
    ReactDOM.render(<App />, document.getElementById('root'));
}

