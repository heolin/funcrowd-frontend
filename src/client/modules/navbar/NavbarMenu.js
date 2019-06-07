import React from "react"
import NavbarMenuButton from "./NavbarMenuButton";


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
        //<div>Hello, {this.state.user.username}</div>-->
        //<NavbarMenuButton onClick={this.props.onNavigateToMissions} name="Missions"/>
        //                            <NavbarMenuButton onClick={this.onLogout} name="Logout"/>
        if (this.state.user) {
            return (
                <div>
                    <div style={{ position: "absolute", right: "80px", top: "18px"}}>
                        Hello, {this.state.user.username}
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarToggler">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <NavbarMenuButton onClick={this.props.onNavigateToBounties} name="Bounties"/>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarToggler">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <NavbarMenuButton onClick={this.props.onNavigateToMissions} name="Missions"/>
                        </ul>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}
