import React from "react"
import {close} from 'react-icons-kit/fa/close'
import { Link } from 'react-router-dom';
import L from "../../logic/locatization/LocalizationManager";
import urls from "../../Urls"


export default class ResetPasswordEmailSentPanel extends React.Component {

    render() {
        return (
            <div className="container-fluid base-row">
                <div className="container">
                    <div className="row">
                        <div className="login-reset-email-panel col-lg-6 col-md-10 col-12 card-3-static">
                            <h3 className="text-center" style={{marginBottom: "30px"}}>
                                {L.login.resetPasswordEmailHeader}
                            </h3>
                            <p className="small text-center">
                                {L.login.resetPasswordEmailMessage}
                            </p>
                            <div className="text-center">
                                <Link to={urls.LOGIN}>
                                    <button className="btn btn-orange-primary"
                                            style={{width: "140px", marginTop: "20px"}}>
                                        {L.login.resetPasswordEmailButton}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

