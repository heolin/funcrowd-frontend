import React from "react"


export default class TaskCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-4">
                <div className="task-card card-2" onClick={this.props.onSelect}>
                    <h4>{this.props.task.name}</h4>
                    <p>0/0 ukończone</p>
                </div>
            </div>
        );
    }
}
