import React from "react"
import Base from "./Base"
import { Switch, BrowserRouter as Router} from 'react-router-dom';
import './static/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router><Base/></Router>
            </div>
        );
    }
}

export default App;
