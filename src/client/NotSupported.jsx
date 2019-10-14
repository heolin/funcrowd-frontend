import React from "react"
import 'bootstrap/dist/js/bootstrap';
import './static/scss/navbar.scss'
import './static/scss/style.scss'
import safariIcon from "./static/img/common/browsers/safari.png";
import chromeIcon from "./static/img/common/browsers/chrome.png";
import firefoxIcon from "./static/img/common/browsers/firefox.png";


class NotSupported extends React.Component {
    render() {
        return (
        <div id="notsupported" style={{textAlign: "center"}}>
            <h3 style={{marginTop: "30px"}}>
                Sorry, but this browser is not supported.
            </h3>
            Please try using one of the browsers listed below:
            <div style={{marginTop: "30px", marginBottom: "20px"}}>
                <div style={{display: "inline-block", marginRight: "20px"}}>
                    <div>
                        <img src={firefoxIcon} style={{width: "90px"}}/>
                    </div>
                    <a href="https://www.mozilla.org/pl/firefox/" target="_blank">
                        FireFox
                    </a>
                </div>
                <div style={{display: "inline-block"}}>
                    <div>
                        <img src={chromeIcon} style={{width: "94px"}}/>
                    </div>
                    <a href="https://www.google.com/chrome/" target="_blank">
                        Chrome
                    </a>
                </div>
                <div style={{display: "inline-block", marginLeft: "20px"}}>
                    <div>
                        <img src={safariIcon} style={{"width": "84px"}}/>
                    </div>
                    <a href="https://support.apple.com/downloads/safari" target="_blank">
                        Safari
                    </a>
                </div>
            </div>
        </div>
        );
    }
}

export default NotSupported;
