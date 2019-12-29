import React from "react"

import Card from "../../components/animated/Card";
import ProgressBar from "../../components/ProgressBar";
import {Icon, SmallIcon} from "../../components/Icons";

import L from "../../logic/locatization/LocalizationManager";


export default class MissionCard extends React.Component {

    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        if (this.props.progress.status !== "LOCKED")
            this.props.onSelect();
    }

    render() {
        let mission = this.props.mission;
        let metadata = mission.metadata;
        let progress = this.props.progress;
        let image = require("../../static/"+metadata.image);

        let achievements = null;
        let experience = null;

        let locked = progress.status === "LOCKED";
        let lockedClassName = locked ? "locked" : "";
        let iconClassName = locked ? "greyscale" : "";

        if (mission.achievementsCount)
            achievements = (
                <p className="mission-card-label">
                    <SmallIcon className={iconClassName} name="achievements"/>
                    <span className="mission-card-label-text">
                        {mission.achievementsCount} {L.general.achievements}
                    </span>
                </p>);

        if (mission.totalExp > 0)
            experience = (
                <p className="mission-card-label">
                    <SmallIcon className={iconClassName} name="experience"/>
                    <span className="mission-card-label-text">
                        {mission.totalExp} {L.general.experience}
                    </span>
                </p>);

        return (
            <Card className="col-md-6 col-lg-4">
                <div className={"mission-card card-2 font-light " + lockedClassName} onClick={this.onClick}>
                    <div className="mission-card-top">
                        <img className={"mission-card-image " + lockedClassName} src={image}/>
                        <Icon className="mission-card-icon" name={metadata.icon}/>
                        <svg className={"mission-card-triangle " + lockedClassName}
                             width="100%" viewBox="0 0 300 60">
                            <polygon points="300,60 300,0 0,60"/>
                        </svg>
                    </div>
                    <div className="mission-card-content">
                        <div className="mission-card-title">
                            <h4>{this.props.mission.name}</h4>
                            <span className="small mission-card-description">{this.props.mission.description}</span>
                        </div>
                        <p className="mission-card-label">
                            <SmallIcon name="missions"/>
                            <span className="mission-card-label-text">
                                {this.props.mission.tasksCount} {L.general.missions}
                            </span>
                        </p>
                        <div className="mission-card-labels">
                            {achievements}
                            {experience}
                        </div>
                        <ProgressBar progress={progress.progress} text={"Ukończono "+progress.tasks_done + " / " + progress.tasks_count}/>
                    </div>
                </div>
            </Card>
        );
    }
}
