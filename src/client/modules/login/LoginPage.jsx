import React from "react"
import UserRepository from "../../logic/repositories/UserRepository";
import Loading from "../../components/Loading";
import CheckboxElement from "../items/components/element/CheckboxElement";
import { Link } from 'react-router-dom';
import TextTagField from "../items/components/TextTagField";


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
                        Podany login lub hasło jest niepoprawny
                    </div>
                </div>
            );
        }

        return (
            <div className="container base-row">
                <div className="row">
                    <div className="login-window col-md-6 card-3-static">
                        <h3 className="text-center login-header">Logowanie</h3>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input id="login"
                                       type="login"
                                       className="login-input form-control"
                                       value={this.state.login}
                                       onChange={this.handleChange}
                                       placeholder="Login"/>
                            </div>
                            <div className="form-group">
                                <input id="password"
                                       type="password"
                                       className="login-input form-control"
                                       value={this.state.password}
                                       onChange={this.handleChange}
                                       placeholder="Hasło"/>
                            </div>
                            <div className="from-group little" style={{position: "relative"}}>
                                <CheckboxElement className="login-checkbox"
                                                 labelClassName="login-checkbox-label"
                                                 name='stayLoggedIn'
                                                 value={this.state.stayLoggedIn}
                                                 onChange={this.handleChange}
                                                 label="Zapamiętaj mnie"/>
                                <div className="login-reset-password-link login-link">
                                    <Link to="/resetpassword">
                                        Przypomnij hasło
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
        );
    }
}
