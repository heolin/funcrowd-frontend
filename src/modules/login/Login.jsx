import React from "react"
import axios from 'axios';
import User from "../../logic/user/User";
import SessionManager from "../../logic/user/SessionManager";

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: "",
            stayLoggedIn: false,
            loading: false
        };

        this.validateForm = this.validateForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
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

    handleSubmit(event) {
        event.preventDefault();

        let username = this.state.login;
        let password = this.state.password;
        let stayLoggedIn = this.state.stayLoggedIn;

        this.setState({loading: true});
        axios.post('http://localhost:8888/api/v1/users/login', {
            username: username,
            password: password
        })
        .then((response) => {
            let user = User.fromJson(response.data);
            this.props.onSuccess(user, stayLoggedIn);
        })
        .catch((error) => {
            this.setState({ loading: false});
            console.log(error);
            alert(error)
        });
    }

    render() {
        if (this.state.loading) {
            return (
                <div>Loading</div>
            )
        }
        return (
            <div className="login-app baseapp">
                <div className="row baserow">
                    <div className="col-sm-8 offset-sm-2 card-3-static login-card">
                        <div className="row">
                            <div className="col-sm-12">
                                <h3>Zaloguj do systemu</h3>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label>Login</label>
                                        <input id="login"
                                               type="login"
                                               className="form-control"
                                               value={this.state.email}
                                               onChange={this.handleChange}
                                               placeholder="Login"/>
                                        <small id="loginHelp" className="form-text text-muted">Nazwa użytkownika podana podczas rejestracji</small>
                                    </div>
                                    <div className="form-group">
                                    <label>Hasło</label>
                                        <input id="password"
                                               type="password"
                                               className="form-control"
                                               value={this.state.password}
                                               onChange={this.handleChange}
                                               placeholder="Hasło"/>
                                    </div>
                                    <div className="form-check">
                                        <input id="stayLoggedIn"
                                               type="checkbox"
                                               className="form-check-input"
                                               value={this.state.stayLoggedIn}
                                               onChange={this.handleChange}/>
                                        <label className="form-check-label">Pozostań zalogowany</label>
                                    </div>
                                    <button type="submit"
                                            disabled={!this.validateForm()}
                                            className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
