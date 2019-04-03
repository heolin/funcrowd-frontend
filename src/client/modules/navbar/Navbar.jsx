import React from "react"
import NavbarMenu from "./NavbarMenu";
import { Icon } from 'react-icons-kit'
import {user} from 'react-icons-kit/metrize/user'


export default class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
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
        return (
            <nav className="navbar card-2-static fixed-top navbar-expand-lg navbar-light bg-light">
                <div className="navbar-brand">
                    <Icon icon={user} size={24} style={{position: "absolute", top: "calc(50% - 18px)"}}/>
                    <span style={{marginLeft: "32px"}}>FunCrowd</span>
                </div>
                <NavbarMenu user={this.state.user}
                            onLogout={this.props.onLogout}
                            onNavigateToMissions={this.props.onNavigateToMissions}
                            onNavigateToBounties={this.props.onNavigateToBounties}/>
            </nav>
        );
    }
}
