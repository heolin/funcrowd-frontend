import React from "react"
import Tasks from "./tasks/Tasks";


export default class TasksMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="row baserow">
                <div className="col-sm-12">
                    <h3>Taski</h3>
                </div>
                <div className="col-sm-12">
                    <Tasks mission={this.props.mission} onSelect={this.props.onTaskSelect}/>
                </div>
            </div>
        );
    }
}
