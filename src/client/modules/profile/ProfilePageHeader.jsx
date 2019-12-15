import React from "react"
import ProgressBar from "../../components/ProgressBar";
import {Breadcrumbs, BreadcrumbItem} from "../../components/Breadcrumbs";
import L from "../../logic/locatization/LocalizationManager";
import {Icon, SmallIcon} from "../../components/Icons";
import {CircleImage} from "../../components/Image";
import UserManager from "../../logic/UserManager";


export default class ProfilePageHeader extends React.Component {

    render() {
        let image = require("../../static/img/missions/office.png");

        return (
            <div className="tasks-header-bar card-2-static row">
                <div className="container">
                    <div className="row tasks-header">
                        <div className="col-md-12">
                            <div className="tasks-header-info">
                                <div className="tasks-header-info-text color-white small"
                                     style={{marginTop: "10px"}}>
                                    <h3>Cześć {UserManager.user.username}</h3>
                                    <p>
                                        Śledź postepy swojej nauki!<br/>W Twoim profilu zawarliśmy najważniejsze informacje dotyczące Twojej aktywności.
                                    </p>
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


