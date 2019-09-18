import React from "react"
import NavbarMenu from "./NavbarMenu";
import { Icon } from 'react-icons-kit'
import {user} from 'react-icons-kit/metrize/user'
import L from "../../logic/locatization/LocalizationManager";
import NavbarProfile from "./NavbarProfile";


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
            <nav className="navbar fixed-top navbar-light bg-light navbar-expand-md py-3">

                <a className="navbar-brand" href="#">{L.labels.title}</a>
                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mr-auto"/>
                    <NavbarMenu showSideProfile={this.props.showSideProfile}/>
                </div>
            </nav>
        );
    }
}
