import React from "react"
import UserManager from "../../logic/UserManager";
import UserRepository from "../../logic/repositories/UserRepository";
import Loading from "../../components/Loading";
import L from "../../logic/locatization/LocalizationManager";
import {Footer} from "../../Footer";


export default class SettingsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            oldPassword: "",
            newPassword1: "",
            newPassword2: "",
            loading: false,
            settingsMessage: "",
            settingsError: false,
            passwordMessage: "",
            passwordError: false
        };

        this.handleSettingsSubmit = this.handleSettingsSubmit.bind(this);
        this.handlePasswordSubmit = this.handlePasswordSubmit.bind(this);
        this.validatePasswordForm = this.validatePasswordForm.bind(this);
        this.validateSettingsForm = this.validateSettingsForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    validateSettingsForm() {
        return this.state.username.length > 0
    }

    validatePasswordForm() {
        return this.state.oldPassword.length > 0 &&
            this.state.newPassword1.length > 0 &&
            this.state.newPassword2.length > 0;
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSettingsSubmit(event) {
        event.preventDefault();

        this.setState({
            loading: true,
            settingsError: false,
            settingsMessage: ""
        });
        console.log("handleSettingsSubmit");
        UserRepository.changeSettings(this.state.username)
            .then((user) => {
                console.log("handleSettingsSubmit - success");
                UserManager.changeUsername(user.username);
                this.setState({
                    loading: false,
                    settingsMessage: L.login.usernameChanged
                });
            })
            .catch((error) => {
                let settingsMessage = error.response.data['detail'];
                switch(settingsMessage) {
                    case "Username is already used":
                        settingsMessage = L.login.usernameAlreadyUsed;
                        break;
                }

                this.setState({
                    loading: false,
                    settingsError: true,
                    settingsMessage: settingsMessage
                });
            });
    }

    handlePasswordSubmit(event) {
        event.preventDefault();

        this.setState({
            loading: true,
            passwordMessage: "",
            passwordError: false,
        });
        UserRepository.changePassword(
            this.state.oldPassword, this.state.newPassword1, this.state.newPassword2)
            .then((user) => {
                this.setState({
                    loading: false,
                    passwordMessage: L.login.passwordChanged
                });
            })
            .catch((error) => {
                console.log(error);
                let passwordMessage = error.response.data['detail'];
                console.log(passwordMessage);
                switch(passwordMessage) {
                    case "Authentication credentials were not provided.":
                        passwordMessage = L.login.currentPasswordNotCorrect
                        break;

                    case "Passwords does not match":
                        passwordMessage = L.login.passwordsNotMatch
                        break;
                }

                this.setState({
                    loading: false,
                    passwordError: true,
                    passwordMessage: passwordMessage
                });
            });
    }

    render() {
        if (this.state.loading ||
            UserManager.user === null)
            return <Loading/>;

        let settingsMessageClassName = this.state.settingsError ? "error" : "";
        let passwordMessageClassName = this.state.passwordError ? "error" : "";

        return (
            <div className="container-fluid base-row">
                <div className="container">
                    <div className="row tasks-row" style={{paddingTop: "60px"}}>
                        <div className="col-sm-12">
                            <h3>Ustawienia</h3>
                            <p>Tu możesz zmienić swoją nazwę lub hasło</p>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="form-group">
                                <label className="weight-bold small settings-form-label" htmlFor="username">
                                    Nazwa użytkownika
                                </label>
                                <small id="usernameHelp" className="text-muted settings-form-text">
                                    We'll never share your email with anyone else.
                                </small>
                                <input type="username" className="form-control settings-form-input"
                                       id="username" placeholder={UserManager.user.username}
                                       onChange={this.handleChange}/>

                                <button onClick={this.handleSettingsSubmit}
                                        disabled={!this.validateSettingsForm()}
                                        className="btn btn-orange-primary settings-button">Zapisz dane</button>

                                <p className={"settings-form-error-message text-center small " + settingsMessageClassName}>
                                    {this.state.settingsMessage}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row tasks-row">
                        <div className="col-xl-4 col-md-6">
                            <div className="form-group">
                                <label className="weight-bold small settings-form-label" htmlFor="password1">
                                    Nazwa użytkownika
                                </label>
                                <small className="settings-form-text text-muted">
                                    Podaj swoje stare hasło
                                </small>
                                <input type="password" className="form-control settings-form-input"
                                       id="oldPassword" placeholder="current password"
                                       onChange={this.handleChange}/>
                                <small className="settings-form-text text-muted">
                                    Podaj swoje nowe haslo
                                </small>
                                <input type="password" className="form-control settings-form-input"
                                       id="newPassword1" placeholder="new password"
                                       onChange={this.handleChange}/>
                                <input type="password" className="form-control settings-form-input"
                                       id="newPassword2" placeholder="repeat new password"
                                       onChange={this.handleChange}/>

                                <button onClick={this.handlePasswordSubmit}
                                        disabled={!this.validatePasswordForm()}
                                        className="btn btn-orange-primary settings-button">Zmień hasło</button>

                                <p className={"settings-form-error-message text-center small " + passwordMessageClassName}>
                                    {this.state.passwordMessage}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer style={{marginTop: "80px"}}/>
            </div>
        );
    }
}
