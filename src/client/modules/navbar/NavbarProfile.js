import React from "react"
import {SmallIcon} from "../../components/Icons";
import ProgressBar from "../../components/ProgressBar";
import UserManager from "../../logic/UserManager";
import L from "../../logic/locatization/LocalizationManager";


export default class NavbarProfile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            exp: null
        };

        this.onUpdate = this.onUpdate.bind(this);
    }

    componentWillMount() {
        UserManager.addExperienceChangeHandler(this.onUpdate);
    }

    componentWillUnmount() {
        UserManager.removeExperienceChangeHandler(this.onUpdate);
    }

    onUpdate() {
        if (UserManager.user) {
            this.setState({
                exp: UserManager.user.exp
            });
        }
    }


    render() {
        return (
            <div className="nav-item navbar-profile" onClick={this.props.onClick}>
                <div className="navbar-profile-icon">
                    <SmallIcon name="user"/>
                </div>
                <div className="navbar-profile-label">
                    <div>{L.labels.account}</div>
                    <ProgressBar color="dark"
                                 bg="light-blue"
                                 fg="blue"
                                 progress={UserManager.levelProgress}
                                 text={L.levels.level + " " + UserManager.level}/>
                </div>
            </div>
        );
    }
}
