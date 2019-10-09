import React from "react";
import Card from "../../components/animated/Card";
import {lock} from 'react-icons-kit/fa/lock'
import {unlock} from 'react-icons-kit/fa/unlock'
import {trophy} from 'react-icons-kit/fa/trophy'
import {SmallIcon} from "../../components/Icons";
import ProgressBar from "../../components/ProgressBar";


export default class BountyCard extends React.Component {

    render() {
        let bounty = this.props.bounty;
        let task = bounty.task;
        let userBounty = bounty.userBounty;

        let progressBar = null;
        let icon = "locked";
        let bountyStatus = "Bounty closed";
        let className = "mission-closed-card card-2-static";
        let onClick = () => {};

        if (userBounty) {
            if (userBounty.status === "NEW") {
                icon = "missions";
                bountyStatus = "Bounty open";
                className = "card-2";
                onClick = this.props.onSelect;
            } else if (userBounty.status === "IN_PROGRESS") {
                icon = "missions";
                bountyStatus = "Bounty in progress";
                className = "card-2";
                onClick = this.props.onSelect;
            } else if (userBounty.progress === 1) {
                bountyStatus = "Bounty finished";
                icon = "checked";
                className = "card-2";
                onClick = this.props.onSelect;
            }

            let annotationsDone = Math.min(userBounty.annotationsDone, bounty.annotationsTarget);
            progressBar = (
                <ProgressBar progress={userBounty.progress} textAlign="right"
                             text={"Ukończono "+annotationsDone + "/" + bounty.annotationsTarget}/>
            );
        }


        return (
            <Card className="col-md-4">
                <div className={"mission-card font-light " + className} onClick={onClick}>
                    <div className="mission-card-content">
                        <h4>#{bounty.id} {task.name}</h4>
                        <p className="small" style={{minHeight: "48px"}}>{task.description}</p>
                        <div className="small" style={{margin: "30px 0"}}>
                            <SmallIcon name={icon}/>
                            <span style={{marginLeft: "10px"}}>{bountyStatus}</span>
                        </div>
                        {progressBar}
                    </div>
                </div>
            </Card>
        )
    }
}
