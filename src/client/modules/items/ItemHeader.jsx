import React from "react"
import {Breadcrumbs, BreadcrumbItem} from "../../components/Breadcrumbs";
import L from "../../logic/locatization/LocalizationManager";
import {Icon, SmallIcon} from "../../components/Icons";
import {CircleImage} from "../../components/Image";


export default class ItemHeader extends React.Component {

    render() {
        let task = this.props.task;
        let imageElement;
        if (task.metadata.image) {
            let image = require("../../static/"+task.metadata.image);
            imageElement = <CircleImage className="tasks-header-image d-none d-sm-none d-md-block" image={image}/>;
        }

        return (
            <div>
                <div className="tasks-header-bar row">
                    <div className="container">
                        <div className="row tasks-header">
                            <div className="col-md-8 col-sm-12">
                                <div style={{marginTop: "10px"}}>
                                    <Breadcrumbs>
                                        <BreadcrumbItem label={L.labels.missions} link="/missions"/>
                                        <BreadcrumbItem label={task.name} link={"/mission/" + task.mission_id + "/tasks"}/>
                                        <BreadcrumbItem label={L.general.task}/>
                                    </Breadcrumbs>
                                </div>
                                <div className="tasks-header-info">
                                    <div className="color-white">
                                        <h3 style={{marginBottom: 0}}>{task.name}</h3>
                                        <span className="small item-header-info-text">{task.description}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                {imageElement}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tasks-summary-bar card-1-static row">
                    <div className="container">
                        <div className="row tasks-summary">
                            <div className="col-sm-12 col-md-8 justify-items">
                                <div className="d-inline-block">
                                    <SmallIcon name="achievements"/>
                                    <small> X {L.general.achievements}</small>
                                </div>
                                <div className="d-inline-block">
                                    <SmallIcon name="experience"/>
                                    <small> {task.totalExp} {L.general.experience}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


