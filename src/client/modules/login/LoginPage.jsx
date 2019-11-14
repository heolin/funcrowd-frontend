import React from "react"
import UserRepository from "../../logic/repositories/UserRepository";
import Loading from "../../components/Loading";
import CheckboxElement from "../items/components/element/CheckboxElement";
import { Link } from 'react-router-dom';
import L from "../../logic/locatization/LocalizationManager";
import {Footer} from "../../Footer";


export default class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: "",
            stayLoggedIn: false,
            error: null,
            loading: false
        };

        this.validateForm = this.validateForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateForm() {
        return this.state.login.length > 0 && this.state.password.length > 0;
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
        let password = this.state.password;
        let stayLoggedIn = this.state.stayLoggedIn == "true";

        this.setState({loading: true});
        UserRepository.login(username, password)
            .then((user) => {
                this.props.onSuccess(user, stayLoggedIn);
            })
            .catch((error) => {
                this.setState({
                    loading: false,
                    error: error
                });
                console.log(error);
            });
    }

    render() {
        if (this.state.loading)
            return <Loading/>;

        let errorMessage = null;
        if (this.state.error) {
            errorMessage = (
                <div className="form-group">
                    <div className="text-center small login-error-message">
                        {L.login.loginIncorrect}
                    </div>
                </div>
            );
        }
        return (
            <div className="container-fluid base-row">
                <div className="container">
                    <div className="row">
                        <div className="login-window col-lg-6 col-md-10 col-12 card-3-static">
                            <h3 className="text-center login-header">{L.login.loginHeader}</h3>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input id="login"
                                           type="login"
                                           className="login-input form-control"
                                           value={this.state.login}
                                           onChange={this.handleChange}
                                           placeholder={L.login.login}/>
                                </div>
                                <div className="form-group">
                                    <input id="password"
                                           type="password"
                                           className="login-input form-control"
                                           value={this.state.password}
                                           onChange={this.handleChange}
                                           placeholder={L.login.password}/>
                                </div>
                                <div className="from-group little" style={{position: "relative"}}>
                                    <CheckboxElement className="login-checkbox"
                                                     labelClassName="login-checkbox-label"
                                                     name='stayLoggedIn'
                                                     value={this.state.stayLoggedIn}
                                                     onChange={this.handleCheckboxChange}
                                                     label={L.login.rememberMe}/>
                                    <div className="login-reset-password-link login-link">
                                        <Link to="/reset_password">
                                            {L.login.forgotPassword}
                                        </Link>
                                    </div>
                                </div>
                                {errorMessage}
                                <button type="submit"
                                     disabled={!this.validateForm()}
                                     className="btn btn-orange-primary login-button">Zaloguj</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
