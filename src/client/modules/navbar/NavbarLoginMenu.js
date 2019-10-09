import React from "react"

import L from "../../logic/locatization/LocalizationManager";
import NavbarMenuButton from "./NavbarMenuButton";
import NavbarLoginButton from "./NavbarLoginButton";


export default class NavbarLoginMenu extends React.Component {

    render() {
        return (
            <ul className="navbar-nav ml-auto small">
                <NavbarMenuButton targetPath="/about" name={L.labels.about} icon="about"/>
                <NavbarLoginButton targetPath="/"
                                   name="Login"
                                   isSelected={
                                       this.props.location.pathname === "/" ||
                                       this.props.location.pathname === "/resetpassword"
                                   }/>
                <NavbarLoginButton targetPath="/register"
                                   name="Załóż konto"
                                   isSelected={this.props.location.pathname === "/register"}
                                   style={{marginLeft: "20px"}}/>
            </ul>
        );
    }
}
