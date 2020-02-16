import React from "react"
import NavbarMenuButton from "./NavbarMenuButton";
import NavbarProfile from "./NavbarProfile";
import ConfigManager from "../../logic/config/ConfigManager";

import urls from "../../Urls";
import L from "../../logic/locatization/LocalizationManager";


export default class NavbarMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
            location: null
        };
    }

    static getDerivedStateFromProps(props, state) {
        let result = {};

        if (props.user !== state.user) {
            result['user'] = props.user;
        }
        if (props.location !== state.location) {
            result['location'] = props.location;
        }
        return result;
    }

    render() {
        if (!this.state.location)
            return null;

        let elements = [];

        if (ConfigManager.profile.bounties)
            elements.push(<NavbarMenuButton key="bounties"
                                            targetPath={urls.BOUNTIES}
                                            name={L.labels.bounties}
                                            icon="bounties"
                                            isSelected={urls.checkUrl(this.state.location.pathname, urls.BOUNTIES)}
                                            iconStyle={{marginTop: "-10px"}}/>);

        if (ConfigManager.profile.missions)
            elements.push(<NavbarMenuButton key="missions"
                                            targetPath={urls.MISSIONS}
                                            name={L.labels.missions}
                                            isSelected={urls.checkUrl(this.state.location.pathname, urls.MISSIONS)}
                                            icon="missions"/>);

        if (ConfigManager.profile.about)
            elements.push(<NavbarMenuButton key="about"
                                            targetPath={urls.ABOUT}
                                            name={L.labels.about}
                                            isSelected={urls.checkUrl(this.state.location.pathname, urls.ABOUT)}
                                            icon="about"/>);

        if (ConfigManager.profile.achievements)
            elements.push(<NavbarMenuButton key="achievements"
                                            targetPath={urls.ACHIEVEMENTS}
                                            name={L.labels.achievements}
                                            isSelected={urls.checkUrl(this.state.location.pathname, urls.ACHIEVEMENTS)}
                                            icon="achievements"/>);

        if (ConfigManager.profile.ranking)
            elements.push(<NavbarMenuButton key="ranking"
                                            targetPath={urls.RANKING}
                                            name={L.labels.ranking}
                                            isSelected={urls.checkUrl(this.state.location.pathname, urls.RANKING)}
                                            icon="ranking"/>);

        if (ConfigManager.profile.profile)
            elements.push(<NavbarProfile key="profile"
                                         onClick={this.props.showSideProfile}/>);
        else
            elements.push(<NavbarMenuButton key="settings"
                                            targetPath={urls.SETTINGS}
                                            name={L.labels.profile}
                                            isSelected={urls.checkUrl(this.state.location.pathname, urls.SETTINGS)}
                                            icon="user"/>);

        return (
            <ul className="navbar-nav ml-auto small">
                {elements}

                <li className="nav-item" onClick={this.props.onLogout}>
                    <span className="nav-link">{L.labels.logout}</span>
                </li>
            </ul>
        );
    }
}
