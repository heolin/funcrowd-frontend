import React from "react"
import ProgressBar from "../../components/ProgressBar";
import {Breadcrumbs, BreadcrumbItem} from "../../components/Breadcrumbs";
import L from "../../logic/locatization/LocalizationManager";
import {Icon, SmallIcon} from "../../components/Icons";
import {CircleImage} from "../../components/Image";


export default class TasksHeader extends React.Component {

    render() {
        let mission = this.props.mission;
        let progress = this.props.progress;
        let image = require("../../static/"+mission.metadata.image);

        let tasks = null;
        if (mission.tasksCount > 0)
            tasks = (
                <div className="d-inline-block">
                    <SmallIcon name="missions"/>
                    <small> {mission.tasksCount} {L.general.missions}</small>
                </div>);

        let achievements = null;
        if (mission.achievements > 0)
            achievements = (
                <div className="d-inline-block">
                    <SmallIcon name="achievements"/>
                    <small> {mission.achievements} {L.general.achievements}</small>
                </div>);

        let experience = null;
        if (mission.totalExp > 0)
            experience = (
                <div className="d-inline-block">
                    <SmallIcon name="experience"/>
                    <small> {mission.totalExp} {L.general.experience}</small>
                </div>);

        return (
            <div>
                <div className="tasks-header-bar row">
                    <div className="container">
                        <div className="row tasks-header">
                            <div className="col-md-12">
                                <div>
                                    <Breadcrumbs>
                                        <BreadcrumbItem label={L.labels.missions} link="/missions"/>
                                        <BreadcrumbItem label={mission.name}/>
                                    </Breadcrumbs>
                                </div>
                                <div className="tasks-header-info">
                                    <Icon className="tasks-header-icon" name={mission.metadata.icon}/>
                                    <div className="tasks-header-info-text">
                                        <h3 style={{marginBottom: 0}}>{mission.name}</h3>
                                        <span className="small">{mission.description}</span>
                                    </div>
                                </div>
                                <div>
                                    <ProgressBar className="tasks-header-progress"
                                                 textAlign="right"
                                                 progress={progress.progress}
                                                 text={"Ukończono "+progress.tasks_done + "/" + progress.tasks_count}/>
                                </div>
                                <CircleImage className="tasks-header-image d-none d-sm-none d-md-block" image={image}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tasks-summary-bar card-1-static row">
                    <div className="container">
                        <div className="row tasks-summary">
                            <div className="col-sm-12 col-md-8 justify-items">
                                {tasks}
                                {achievements}
                                {experience}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


