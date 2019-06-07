import React from "react"
import Base from "./Base"
import { BrowserRouter as Router} from 'react-router-dom';
import './static/css/style.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


class App extends React.Component {
    render() {
        return (
            <Router><Base/></Router>
        );
    }
}

export default App;
