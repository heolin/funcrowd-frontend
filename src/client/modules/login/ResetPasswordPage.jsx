import React from "react"
import UserRepository from "../../logic/repositories/UserRepository";
import Loading from "../../components/Loading";
import { Link } from 'react-router-dom';
import {Footer} from "../../Footer";
import L from "../../logic/locatization/LocalizationManager";
import ResetPasswordEmailSentPanel from "./ResetPasswordEmailSentPanel";


export default class ResetPasswordPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            stayLoggedIn: false,
            error: null,
            loading: false,
            emailSentPanel: false
        };

        this.validateForm = this.validateForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateForm() {
        return this.state.email.length > 0;
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        let email = this.state.email;

        this.setState({loading: true});
        UserRepository.resetPassword(email)
            .then(() => {
                this.setState({
                    emailSentPanel: true,
                    loading: false
                });
            })
            .catch((error) => {
                let responseError = error.response.data['detail'];

                let errorMessage = L.login.unknownError;
                if (responseError === "User with following email not found.")
                    errorMessage = L.login.emailNotFound;

                this.setState({
                    loading: false,
                    error: errorMessage
                });
            });
    }

    render() {
        if (this.state.loading)
            return <Loading/>;

        if (this.state.emailSentPanel)
            return <ResetPasswordEmailSentPanel/>;

        return (
            <div className="container-fluid base-row">
                <div className="container">
                    <div className="row">
                        <div className="login-window col-md-6 card-3-static">
                            <h3 className="text-center login-header">{L.login.resetPasswordHeader}</h3>
                            <p className="small text-center" style={{marginBottom: "30px"}}>
                                {L.login.resetPasswordMessage}
                            </p>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input id="email"
                                           type="email"
                                           className="login-input form-control"
                                           value={this.state.email}
                                           onChange={this.handleChange}
                                           placeholder="Adres e-mail"/>
                                </div>
                                <div className="text-center small login-error-message">
                                    {this.state.error}
                                </div>
                                <button type="submit"
                                     disabled={!this.validateForm()}
                                     className="btn btn-orange-primary login-button">Wyślij</button>
                            </form>

                            <div className="text-center small login-link">
                                Masz już konto? <Link to="/">Zaloguj się</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
