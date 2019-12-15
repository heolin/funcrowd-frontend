import React from "react"
import Base from "./Base"
import { HashRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './static/scss/navbar.scss'
import './static/scss/style.scss'
import './static/scss/missions.scss'
import LocalizationManager from './logic/locatization/LocalizationManager'

let baseLangCode = process.env.LANG_CODE || "en";
LocalizationManager.setup(baseLangCode);


class App extends React.Component {
    render() {
        return (
            <Router><Base/></Router>
        );
    }
}

export default App;
