import React from "react"
import posed from 'react-pose';
import {Icon, SmallIcon} from "../../components/Icons";


const Card = posed.div({
    enter: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 }
});


export default class TaskCard extends React.Component {

    render() {
        let progress = this.props.progress;
        let metadata = this.props.task.metadata;

        let taskIconBase = "task/task";
        let taskIcon = taskIconBase + "_grey";
        let startIcon = null;
        let statusClassName = "locked";

        if (progress.status === "FINISHED") {
            startIcon = <Icon className="very-small-icon" name="tick-sign-green"/>;
            statusClassName = "finished";
            taskIcon = taskIconBase + "_green";
        }
        else if (progress.status !== "LOCKED") {
            startIcon = <Icon className="very-small-icon task-card-start-icon" name="arrow-right_blue"/>;
            statusClassName = "unlocked";
            taskIcon = taskIconBase + "_blue";
        }


        return (
            <Card className={"col-12 task-card " + statusClassName} onClick={this.props.onSelect}>
                <div className="row">
                    <div className="col-1">
                        <SmallIcon className="task-card-icon" name={taskIcon}/>
                    </div>
                    <div className="col-6">
                        {this.props.task.name}
                    </div>
                    <div className="col-2">
                        {this.props.task.totalExp} exp
                    </div>
                    <div className="col-1">
                        {startIcon}
                    </div>
                </div>
            </Card>
        );
    }
}
