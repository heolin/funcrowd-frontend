import React from "react"
import NavbarMenu from "./NavbarMenu";
import { Icon } from 'react-icons-kit'
import {user} from 'react-icons-kit/metrize/user'
import L from "../../logic/locatization/LocalizationManager";
import NavbarProfile from "./NavbarProfile";
import NavbarLoginMenu from "./NavbarLoginMenu";


export default class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
            location: null,
        };
    }

    static getDerivedStateFromProps(props, state) {
        if (props.user !== state.user) {
            return {
                user: props.user,
            };
        }
        if (props.location !== state.location) {
            return {
                location: location
            };
        }
        return null;
    }

    render() {
        let navmenu = null;
        if (this.state.user)
            navmenu = <NavbarMenu showSideProfile={this.props.showSideProfile}
                                  onLogout={this.props.onLogout}/>;
        else
            navmenu = <NavbarLoginMenu location={this.state.location}/>;

        return (
            <nav className="navbar fixed-top navbar-light bg-light navbar-expand-md py-3">

                <a className="navbar-brand" href="#">{L.labels.title}</a>
                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mr-auto"/>
                    {navmenu}
                </div>
            </nav>
        );
    }
}
