import React from "react"
import {SmallIcon} from "../../components/Icons";
import ProgressBar from "../../components/ProgressBar";


export default class NavbarProfile extends React.Component {

    render() {
        return (
            <div className="nav-item navbar-profile" onClick={this.props.onClick}>
                <div className="navbar-profile-icon">
                    <SmallIcon name="user"/>
                </div>
                <div className="navbar-profile-label">
                    <div>Twoje konto</div>
                    <ProgressBar color="dark" text="POZIOM 2"/>
                </div>
            </div>
        );
    }
}
