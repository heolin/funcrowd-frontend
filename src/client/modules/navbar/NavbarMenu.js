import React from "react"
import NavbarMenuButton from "./NavbarMenuButton";
import NavbarProfile from "./NavbarProfile";
import ConfigManager from "../../logic/config/ConfigManager";

import L from "../../logic/locatization/LocalizationManager";


export default class NavbarMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
    }

    static getDerivedStateFromProps(props, state) {
        if (props.user !== state.user) {
            return {
                user: props.user,
            };
        }
        return null;
    }

    render() {
        let elements = [];

        if (ConfigManager.profile.bounties)
            elements.push(
                <NavbarMenuButton key="bounties" targetPath="/bounties"
                                  name={L.labels.bounties} icon="bounties"
                                  iconStyle={{marginTop: "-10px"}}/>
            );

        if (ConfigManager.profile.missions)
            elements.push(<NavbarMenuButton key="missions" targetPath="/missions" name={L.labels.missions} icon="missions"/>);

        if (ConfigManager.profile.about)
            elements.push(<NavbarMenuButton key="about" targetPath="/about" name={L.labels.about} icon="about"/>);

        if (ConfigManager.profile.achievements)
            elements.push(<NavbarMenuButton key="achievements" targetPath="/achievements" name={L.labels.achievements} icon="achievements"/>);

        if (ConfigManager.profile.ranking)
            elements.push(<NavbarMenuButton key="ranking" targetPath="/ranking" name={L.labels.ranking} icon="ranking"/>);

        if (ConfigManager.profile.profile)
            elements.push(<NavbarProfile key="profile" onClick={this.props.showSideProfile}/>);

        return (
            <ul className="navbar-nav ml-auto small">
                {elements}


                <li className="nav-item" onClick={this.props.onLogout}>
                    <span className="nav-link">Wyloguj</span>
                </li>
            </ul>
        );
    }
}
