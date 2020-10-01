import React from "react"
import ReactDOM from "react-dom"
import AppRoot from "./App";
import ErrorBoundary from "./ErrorBoundary";
import browser from "./utils/DetectIE";
import NotSupported from "./NotSupported";


let result = browser.detectIE();

if (result)
    ReactDOM.render(<NotSupported />, document.getElementById('root'));
else {
    let element = (
        <ErrorBoundary>
            <AppRoot/>
        </ErrorBoundary>
    );

    ReactDOM.render(element,
        document.getElementById("root"));
}

