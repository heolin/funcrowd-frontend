import React from "react"
import ProgressBar from "../../components/ProgressBar";
import {Breadcrumbs, BreadcrumbItem} from "../../components/Breadcrumbs";
import L from "../../logic/locatization/LocalizationManager";
import {Icon, SmallIcon} from "../../components/Icons";
import {CircleImage} from "../../components/Image";


export default class ProfilePageHeader extends React.Component {

    render() {
        let image = require("../../static/img/missions/office.png");

        return (
            <div className="tasks-header-bar card-2-static row">
                <div className="container">
                    <div className="row tasks-header">
                        <div className="col-md-12">
                            <div className="bounty-header-info">
                                <div className="color-white">
                                </div>
                            </div>
                            <CircleImage className="tasks-header-image d-none d-sm-none d-md-block" image={image}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


