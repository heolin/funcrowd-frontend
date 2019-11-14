import React from "react"
import UserManager from "../../logic/UserManager";


export default class SettingsPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            oldPassword: "",
            newPassword1: "",
            newPassword2: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateForm = this.validateForm.bind(this);
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

    handleSettingsSubmit() {

    }

    handlePasswordSubmit() {

    }

    render() {

        return (
            <div className="container-fluid base-row">
                <div className="container">
                    <div className="row tasks-row" style={{paddingTop: "60px"}}>
                        <div className="col-sm-12">
                            <h3>Ustawienia</h3>
                            <p>Tu możesz zmienić swoją nazwę lub hasło</p>
                        </div>
                        <div className="col-xl-4 col-md-6 mr-auto">
                            <form onSubmit={this.handleSettingsSubmit}>
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

                                    <button type="submit"
                                            disabled={!this.validateSettingsForm()}
                                            className="btn btn-orange-primary settings-button">Zapisz dane</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-xl-4 col-md-6 mr-auto">
                            <form onSubmit={this.handlePasswordSubmit}>
                                <div className="form-group">
                                    <label className="weight-bold small settings-form-label" htmlFor="password1">
                                        Nazwa użytkownika
                                    </label>
                                    <small id="usernameHelp" className="settings-form-text text-muted">
                                        Podaj swoje stare hasło
                                    </small>
                                    <input type="password" className="form-control settings-form-input"
                                           id="oldPassword" placeholder="current password"
                                           onChange={this.handleChange}/>
                                    <small id="usernameHelp" className="settings-form-text text-muted">
                                        Podaj swoje nowe haslo
                                    </small>
                                    <input type="password" className="form-control settings-form-input"
                                           id="newPassword1" placeholder="new password"
                                           onChange={this.handleChange}/>
                                    <input type="password" className="form-control settings-form-input"
                                           id="newPassword2" placeholder="repeat new password"
                                           onChange={this.handleChange}/>

                                    <button type="submit"
                                            disabled={!this.validatePasswordForm()}
                                            className="btn btn-orange-primary settings-button">Zmień hasło</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
