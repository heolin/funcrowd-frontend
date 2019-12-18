import React from "react"
import {Icon} from "../../components/Icons";
import { Link } from 'react-router-dom';
import L from "../../logic/locatization/LocalizationManager";
import posed from 'react-pose';

let ToastCard = posed.div({
    exit: { opacity: 0 },
    enter: { opacity: 1 }
});


export default class Toast extends React.Component {

    render() {
        let icon = "achievements";
        let toastHeader = L.toasts.headerAchievement;
        let linkPath = "/achievements";
        let linkMessage = L.toasts.linkMessageAchievement;

        if (this.props.type === "level") {
            icon = "experience";
            toastHeader = L.toasts.headerLevel;
            linkPath = "/profile";
            linkMessage = L.toasts.linkMessageLevel;
        }

        return (
            <ToastCard className="toast-card card-3-static small">
                <div className="row">
                    <div className="col-2">
                        <Icon className="toast-icon" name={icon}/>
                    </div>
                    <div className="col-10" style={{paddingLeft: "25px"}}>
                        <div className="d-inline-block">
                            {toastHeader}
                        </div>
                        <div className="weight-bold">
                            {this.props.message}
                        </div>
                    </div>
                </div>
                <div className="toast-close" onClick={this.props.onClose}>
                    <Icon className="very-small-icon" name="cancel-sign"/>
                </div>
                <div className="toast-link little">
                    <Link to={linkPath}>
                        {linkMessage}
                    </Link>
                </div>

            </ToastCard>
        );
    }
}
