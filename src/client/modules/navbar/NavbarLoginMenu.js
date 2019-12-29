import React from "react"

import L from "../../logic/locatization/LocalizationManager";
import NavbarMenuButton from "./NavbarMenuButton";
import NavbarLoginButton from "./NavbarLoginButton";
import urls from "../../Urls";


export default class NavbarLoginMenu extends React.Component {

    render() {
        if (!this.props.location)
            return null;

        return (
            <div className="small">
                <NavbarMenuButton className="d-inline-block color-dark"
                                  targetPath={urls.ABOUT} name={L.labels.about} icon="about"/>

                <NavbarLoginButton targetPath={urls.LOGIN}
                                   name={L.labels.login}
                                   isSelected={
                                       urls.checkUrl(this.props.location.hash, urls.LOGIN) ||
                                       urls.checkUrl(this.props.location.hash, urls.RESET_PASSWORD)
                                   }/>

                <NavbarLoginButton targetPath={urls.REGISTER}
                                   name={L.labels.register}
                                   isSelected={urls.checkUrl(this.props.location.hash, urls.REGISTER)
                                   }
                                   style={{marginLeft: "20px"}}/>
            </div>
        );
    }
}
