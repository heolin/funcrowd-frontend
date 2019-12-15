import React from "react"
import {close} from 'react-icons-kit/fa/close'
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import L from "../../logic/locatization/LocalizationManager";
import UserRepository from "../../logic/repositories/UserRepository";
import Loading from "../../components/Loading";
import urls from "../../Urls"


export default class ResetPasswordTokenPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            token: null,
            password1: "",
            password2: "",
            error: null,
            loading: false
        };

        this.validateForm = this.validateForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.checkUrlParams();
    }

    checkUrlParams() {
        if (this.props.location.search) {
            let params = queryString.parse(this.props.location.search);
            if ("resetPasswordToken" in params) {
                this.setState({
                    token: params['resetPasswordToken']
                });
            }
        }
    }

    validateForm() {
        return this.state.password1.length > 0 && this.state.password2.length > 0;
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({loading: true});
        UserRepository.changePasswordWithToken(this.state.token, this.state.password1, this.state.password2)
            .then((user) => {
                this.props.history.push(urls.LOGIN);
            })
            .catch((error) => {
                let errorMessage = error.response.data['detail'];
                switch(errorMessage) {
                    case "Password token is incorrect":
                        errorMessage = L.login.resetPasswordTokenIncorrect;
                        break;

                    case "Passwords does not match":
                        errorMessage = L.login.passwordsNotMatch;
                        break
                }
                this.setState({
                    loading: false,
                    error: errorMessage
                });
                console.log(error);
            });
    }

    render() {
        if (this.state.loading)
            return <Loading/>;

        return (
            <div className="container-fluid base-row">
                <div className="container">
                    <div className="row">
                        <div className="login-window col-lg-6 col-md-10 col-12 card-3-static">
                            <h3 className="text-center login-header">Reset password</h3>
                            <form onSubmit={this.handleSubmit}>
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
                                           placeholder={L.login.password}/>
                                </div>
                                <div className="text-center small login-error-message">
                                    {this.state.error}
                                </div>
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
