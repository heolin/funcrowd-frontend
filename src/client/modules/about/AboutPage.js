import React from "react"


export default class AboutPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }

    render() {

        return (
            <div className="row base-row">
                <div className="col-sm-12 missions-header-bar">
                    <h3>About</h3>
                    <p>Super ipsum.</p>
                </div>
            </div>
        );
    }
}
