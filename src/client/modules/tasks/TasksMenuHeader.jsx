import React from "react"
import ProgressBar from "../components/ProgressBar";
import {Breadcrumbs, BreadcrumbItem} from "../components/Breadcrumbs";
import L from "../../logic/locatization/LocalizationManager";
import {SmallIcon} from "../components/Icons";


export default class TasksMenuHeader extends React.Component {

    render() {
        let mission = this.props.mission;
        let image = require("../../static/"+mission.metadata.image);
        let icon = require("../../static/icons/"+mission.metadata.icon+".svg");

        return (
            <div>
                <div className="tasks-header-bar"/>
                <div className="row tasks-header">
                    <div className="col-md-12">
                        <div>
                            <Breadcrumbs>
                                <BreadcrumbItem label={L.labels.missions} link="/missions"/>
                                <BreadcrumbItem label={mission.name}/>
                            </Breadcrumbs>
                        </div>
                        <div className="tasks-header-info">
                            <img className="tasks-header-icon" src={icon}/>
                            <div className="tasks-header-info-text">
                                <h3 style={{marginBottom: 0}}>{mission.name}</h3>
                                <span className="small">{mission.description}</span>
                            </div>
                        </div>
                        <div>
                            <ProgressBar className="tasks-header-progress"
                                         textAlign="right" progress={0.54}/>
                        </div>
                        <div className="card-3-static tasks-header-image d-none d-sm-none d-md-block">
                            <img className="tasks-header-image-content" src={image}/>
                        </div>
                    </div>
                </div>
                <div className="tasks-summary-bar card-1-static"/>
                <div className="row tasks-summary">
                    <div className="col-sm-12 col-md-8 justify-items">
                        <div className="d-inline-block">
                            <SmallIcon name="missions"/>
                            <small> {mission.tasksCount} {L.general.missions}</small>
                        </div>
                        <div className="d-inline-block">
                            <SmallIcon name="achievements"/>
                            <small> 10 {L.general.achievements}</small>
                        </div>
                        <div className="d-inline-block">
                            <SmallIcon name="experience"/>
                            <small> 10 {L.general.experience}</small>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


