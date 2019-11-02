import React from "react";
import Card from "../../components/animated/Card";
import {lock} from 'react-icons-kit/fa/lock'
import {unlock} from 'react-icons-kit/fa/unlock'
import {trophy} from 'react-icons-kit/fa/trophy'
import {SmallIcon} from "../../components/Icons";
import ProgressBar from "../../components/ProgressBar";
import L from "../../logic/locatization/LocalizationManager";


export default class BountyCard extends React.Component {

    render() {
        let bounty = this.props.bounty;
        let task = bounty.task;
        let userBounty = bounty.userBounty;

        let progressBar = null;
        let icon = "locked";
        let bountyStatus = L.bounty.status.CLOSED;
        let className = "mission-closed-card card-2-static";
        let onClick = () => {};

        if (userBounty) {
            if (userBounty.status === "NEW") {
                icon = "missions";
                bountyStatus = L.bounty.status.NEW;
                className = "card-2";
                onClick = this.props.onSelect;
            } else if (userBounty.status === "IN_PROGRESS") {
                icon = "missions";
                bountyStatus = L.bounty.status.IN_PROGRESS;
                className = "card-2";
                onClick = this.props.onSelect;
            } else if (userBounty.progress === 1) {
                bountyStatus = L.bounty.status.FINISHED;
                icon = "tick-sign-green";
                className = "card-2";
                onClick = this.props.onSelect;
            }

            let annotationsDone = Math.min(userBounty.annotationsDone, bounty.annotationsTarget);
            progressBar = (
                <ProgressBar progress={userBounty.progress} textAlign="right"
                             text={"Ukończono "+annotationsDone + "/" + bounty.annotationsTarget}/>
            );
        } else if (bounty.closed === false) {
            icon = "missions";
            bountyStatus = L.bounty.status.NEW;
            className = "card-2";
            onClick = this.props.onSelect;
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
