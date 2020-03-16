import React from "react"
import posed from 'react-pose';
import {Icon, SmallIcon} from "../../components/Icons";


const Card = posed.div({
    enter: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 }
});


export default class TaskCard extends React.Component {

    constructor(props){
        super(props);
        this.onSelect = this.onSelect.bind(this);
    }

    onSelect() {
        let progress = this.props.progress;
        if (progress.status !== "FINISHED" && progress.status !== "LOCKED")
            this.props.onSelect();
    }

    render() {
        let progress = this.props.progress;
        let metadata = this.props.task.metadata;

        let taskIconBase = "task/task";
        if (metadata['icon'])
            taskIconBase = "task/" + metadata['icon'];
        let taskIcon = taskIconBase + "_grey";
        let startIcon = null;
        let statusClassName = "locked";
        let experience = null;

        if (progress.status === "FINISHED") {
            startIcon = <Icon className="very-small-icon" name="tick-sign-green"/>;
            statusClassName = "finished";
            taskIcon = taskIconBase + "_green";
        }
        else if (progress.status === "PERMANENT") {
            startIcon = <Icon className="very-small-icon task-card-start-icon" name="arrow-right_orange"/>;
            statusClassName = "permanent";
            taskIcon = taskIconBase + "_orange";
        }
        else if (progress.status !== "LOCKED") {
            startIcon = <Icon className="very-small-icon task-card-start-icon" name="arrow-right_blue"/>;
            statusClassName = "unlocked";
            taskIcon = taskIconBase + "_blue";
        }

        if (this.props.task.totalExp > 0)
            experience = this.props.task.totalExp + " exp";


        return (
            <Card className={"col-12 task-card " + statusClassName} onClick={this.onSelect}>
                <div className="row">
                    <div className="col-1">
                        <SmallIcon className="task-card-icon" name={taskIcon}/>
                    </div>
                    <div className="col-6">
                        {this.props.task.name}
                    </div>
                    <div className="col-2">
                        {experience}
                    </div>
                    <div className="col-1">
                        {startIcon}
                    </div>
                </div>
            </Card>
        );
    }
}
