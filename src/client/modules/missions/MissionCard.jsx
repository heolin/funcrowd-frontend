import React from "react"
import posed from 'react-pose';

import ProgressBar from "../components/ProgressBar";
import { SmallIcon } from "../components/Icons"

import L from "../../logic/locatization/LocalizationManager";

const Card = posed.div({
    enter: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 }
});

export default class MissionCard extends React.Component {

    render() {
        let metadata = this.props.mission.metadata;
        let image = require("../../static/"+metadata.image);
        let icon = require("../../static/icons/"+metadata.icon+".svg");

        return (
            <Card className="col-md-4">
                <div className="mission-card card-2 font-light" onClick={this.props.onSelect}>
                    <div className="mission-card-top">
                        <img className="mission-card-image" src={image}/>
                        <img className="mission-card-icon" src={icon}/>
                        <svg className="mission-card-triangle"
                             width="100%" viewBox="0 0 300 60">
                            <polygon points="300,60 300,0 0,60"/>
                        </svg>
                    </div>
                    <div className="mission-card-content">
                        <h4>{this.props.mission.name}</h4>
                        <p className="small">{this.props.mission.description}</p>
                        <p className="small">
                            <SmallIcon name="missions"/>
                            {this.props.mission.tasksCount} {L.general.missions}
                        </p>
                        <p className="small">
                            <SmallIcon name="achievements"/>
                            10 {L.general.achievements}
                        </p>
                        <p className="small">
                            <SmallIcon name="experience"/>
                            10 {L.general.experience}
                        </p>
                        <ProgressBar progress={0.25}/>
                    </div>
                </div>
            </Card>
        );
    }
}
