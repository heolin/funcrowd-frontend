import React from "react"

import L from "../../logic/locatization/LocalizationManager";
import NavbarMenuButton from "./NavbarMenuButton";
import NavbarLoginButton from "./NavbarLoginButton";
import urls from "../../Urls";


export default class NavbarLoginMenu extends React.Component {

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

        return (
            <div className="small">
                <NavbarMenuButton className="d-inline-block color-dark"
                                  targetPath={urls.ABOUT} name={L.labels.about} icon="about"/>

                <NavbarLoginButton targetPath={urls.LOGIN}
                                   name={L.labels.login}
                                   isSelected={
                                       urls.checkUrl(this.state.location.pathname, urls.LOGIN) ||
                                       urls.checkUrl(this.state.location.pathname, urls.RESET_PASSWORD)
                                   }/>

                <NavbarLoginButton targetPath={urls.REGISTER}
                                   name={L.labels.register}
                                   isSelected={urls.checkUrl(this.state.location.pathname, urls.REGISTER)
                                   }
                                   style={{marginLeft: "20px"}}/>
            </div>
        );
    }
}
