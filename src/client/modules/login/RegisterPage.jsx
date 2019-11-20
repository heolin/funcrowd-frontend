import React from "react"
import UserRepository from "../../logic/repositories/UserRepository";
import Loading from "../../components/Loading";
import { Link } from 'react-router-dom';
import CheckboxElement from "../items/components/element/CheckboxElement";
import {Footer} from "../../Footer";
import L from "../../logic/locatization/LocalizationManager";
import ActivationEmailSentPanel from "./ActivationEmailSentPanel";

export default class RegisterPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            login: "",
            email: "",
            password1: "",
            password2: "",
            acceptTerms: false,
            error: false,
            loading: false,
            activationEmailPanel: false
        };

        this.validateForm = this.validateForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateForm() {
        return this.state.login.length > 0 &&
            this.state.password1.length > 0 &&
            this.state.password2.length > 0 &&
            this.state.email.length > 0 &&
            this.state.acceptTerms == 'true';
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleCheckboxChange(event) {
        event.target.value = event.target.checked;
        this.handleChange(event);
    }

    handleSubmit(event) {
        event.preventDefault();

        let username = this.state.login;
        let email = this.state.email;
        let password1 = this.state.password1;
        let password2 = this.state.password2;

        this.setState({loading: true});
        UserRepository.register(username, email, password1, password2)
            .then(() => {
                this.setState({
                    activationEmailPanel: true,
                    loading: false,
                });
            })
            .catch((error) => {
                let responseError = error.response.data['detail'];

                let errorMessage = L.login.registrationFailed;
                if (responseError === "Username is already used")
                    errorMessage = L.login.usernameAlreadyUsed;
                else if (responseError === "Email is already used")
                    errorMessage = L.login.emailAlreadyUsed;
                else if (responseError === "Passwords does not match")
                    errorMessage = L.login.passwordsNotMatch;

                this.setState({
                    loading: false,
                    error: errorMessage
                });
            });
    }

    render() {
        if (this.state.loading)
            return <Loading/>;

        if (this.state.activationEmailPanel)
            return <ActivationEmailSentPanel/>;

        return (
            <div className="container-fluid base-row">
                <div className="container">
                    <div className="row">
                        <div className="login-window col-md-6 card-3-static">
                            <h3 className="text-center login-header">
                                {L.login.registerHeader}
                            </h3>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input id="login"
                                           type="login"
                                           className="login-input form-control"
                                           value={this.state.username}
                                           onChange={this.handleChange}
                                           placeholder={L.login.username}/>
                                </div>
                                <div className="form-group">
                                    <input id="email"
                                           type="email"
                                           className="login-input form-control"
                                           value={this.state.email}
                                           onChange={this.handleChange}
                                           placeholder={L.login.email}/>
                                </div>
                                <div className="form-group">
                                    <input id="password1"
                                           type="password"
                                           className="login-input form-control"
                                           value={this.state.password1}
                                           onChange={this.handleChange}
                                           placeholder={L.login.password}/>
                                </div>
                                <div className="form-group">
                                    <input id="password2"
                                           type="password"
                                           className="login-input form-control"
                                           value={this.state.password2}
                                           onChange={this.handleChange}
                                           placeholder={L.login.repeatPassword}/>
                                </div>
                                <div className="form-group very-little">
                                    <CheckboxElement className="login-checkbox"
                                                     labelClassName="register-checkbox-label"
                                                     key={'acceptTerms'}
                                                     name={'acceptTerms'}
                                                     value={this.state.acceptTerms}
                                                     onChange={this.handleCheckboxChange}
                                                     label={L.login.processDataMessage}
                                    />
                                </div>
                                <div className="text-center small login-error-message">
                                    {this.state.error}
                                </div>
                                <button type="submit"
                                     disabled={!this.validateForm()}
                                     className="btn btn-orange-primary login-button">{L.login.registerButton}</button>
                            </form>
                            <div className="text-center small login-link">
                                {L.login.alreadyHaveAccount} <Link to="/">{L.login.logInto}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
