import React from "react"
import Base from "./Base"
import { HashRouter as Router} from 'react-router-dom';


class App extends React.Component {
    render() {
        return (
            <Router><Base/></Router>
        );
    }
}

export default App;
