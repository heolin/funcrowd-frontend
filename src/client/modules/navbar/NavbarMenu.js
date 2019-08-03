import React from "react"
import NavbarMenuButton from "./NavbarMenuButton";

import L from "../../logic/locatization/LocalizationManager";


export default class NavbarMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
        this.onLogout = this.onLogout.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.user !== state.user) {
            return {
                user: props.user,
            };
        }
        return null;
    }

    onLogout() {
        this.props.onLogout();
    }

    render() {
        //if (!this.state.user)
        //    return null;

        return (
            <ul className="navbar-nav ml-auto">
                <NavbarMenuButton targetPath="/missions" name={L.labels.missions} icon="missions"/>
                <NavbarMenuButton targetPath="/about" name={L.labels.about} icon="about"/>
                <NavbarMenuButton targetPath="/achievements" name={L.labels.achievements} icon="achievements"/>
                <NavbarMenuButton targetPath="/ranking" name={L.labels.ranking} icon="ranking"/>
            </ul>
        );
    }
}
