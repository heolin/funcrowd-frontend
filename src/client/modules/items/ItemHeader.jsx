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
                <div className="tasks-header-bar"/>
                <div className="row tasks-header">
                    <div className="col-md-12">
                        <div>
                            <Breadcrumbs>
                                <BreadcrumbItem label={L.labels.missions} link="/missions"/>
                                <BreadcrumbItem label={L.labels.missions} link="/mission/2/tasks"/>
                                <BreadcrumbItem label="Zadanie"/>
                            </Breadcrumbs>
                        </div>
                        <div className="tasks-header-info">
                            <div className="color-white">
                                <h3 style={{marginBottom: 0}}>{task.name}</h3>
                                <span className="small">{task.description}</span>
                            </div>
                        </div>
                        {imageElement}
                    </div>
                </div>
                <div className="tasks-summary-bar card-1-static"/>
                <div className="row tasks-summary">
                    <div className="col-sm-12 col-md-8 justify-items">
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


