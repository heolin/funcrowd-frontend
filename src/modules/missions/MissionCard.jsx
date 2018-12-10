import React from "react"


export default class MissionCard extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }


    render() {
        return (
            <div className="col-md-4">
                <div className="mission-card card-2 font-light" onClick={this.props.onSelect}>
                    <h4>{this.props.mission.name}</h4>
                    <p>{this.props.mission.description}</p>
                    <div className="progress mission-progress">
                        <div className="progress-bar mission-progress-bar" style={{width: "25%"}}></div>
                    </div>

                    <p>0/0 ukończone</p>
                </div>
            </div>
        );
    }
}
