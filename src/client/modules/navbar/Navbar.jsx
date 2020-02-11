import React from "react"
import NavbarMenu from "./NavbarMenu";
import { Icon } from 'react-icons-kit'
import {user} from 'react-icons-kit/metrize/user'
import L from "../../logic/locatization/LocalizationManager";
import NavbarProfile from "./NavbarProfile";
import NavbarLoginMenu from "./NavbarLoginMenu";
import Logo from "../../static/img/common/fun_crowd-02.svg";


export default class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
            location: null,
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
        if (this.state.user)
            return (
                <nav className="navbar fixed-top navbar-light bg-light navbar-expand-md py-3">

                    <a className="navbar-brand" href="#">
                        <img className="logo" src={Logo}/>
                    </a>
                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mr-auto"/>
                        <NavbarMenu location={this.state.location}
                                    showSideProfile={this.props.showSideProfile}
                                    onLogout={this.props.onLogout}/>
                    </div>
                </nav>
            );
        else
            return (
                <nav className="navbar fixed-top navbar-light bg-light py-3">
                    <a className="navbar-brand" href="#">
                        <img className="logo" src={Logo}/>
                    </a>
                    <div className="">
                        <NavbarLoginMenu location={this.state.location}/>
                    </div>
                </nav>
            );

    }
}
