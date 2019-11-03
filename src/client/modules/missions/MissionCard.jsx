import React from "react"

import Card from "../../components/animated/Card";
import ProgressBar from "../../components/ProgressBar";
import {Icon, SmallIcon} from "../../components/Icons";

import L from "../../logic/locatization/LocalizationManager";


export default class MissionCard extends React.Component {

    render() {
        let mission = this.props.mission;
        let metadata = mission.metadata;
        let progress = this.props.progress;
        let image = require("../../static/"+metadata.image);

        let achievements = null;
        let experience = null;

        if (mission.achievementsCount)
            achievements = (
                <p className="mission-card-label">
                    <SmallIcon name="achievements"/>
                    <span className="mission-card-label-text">
                        {mission.achievementsCount} {L.general.achievements}
                    </span>
                </p>);

        experience = (
            <p className="mission-card-label">
                <SmallIcon name="experience"/>
                <span className="mission-card-label-text">
                    {mission.totalExp} {L.general.experience}
                </span>
            </p>);


        return (
            <Card className="col-md-4">
                <div className="mission-card card-2 font-light" onClick={this.props.onSelect}>
                    <div className="mission-card-top">
                        <img className="mission-card-image" src={image}/>
                        <Icon className="mission-card-icon" name={metadata.icon}/>
                        <svg className="mission-card-triangle"
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
                        {achievements}
                        {experience}
                        <ProgressBar progress={progress.progress} text={"Ukończono "+progress.tasks_done + "/" + progress.tasks_count}/>
                    </div>
                </div>
            </Card>
        );
    }
}
