import React from "react"
import UserRepository from "../../logic/repositories/UserRepository";
import Loading from "../../components/Loading";
import { Link } from 'react-router-dom';


export default class ResetPasswordPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            stayLoggedIn: false,
            error: null,
            loading: false
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
            .then((user) => {
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
                        <h3 className="text-center login-header">Zresetuj haslo</h3>
                        <p style={{marginBottom: "30px"}}>Podaj swój e-mail, a my wyślemy na niego link do zmiany hasła</p>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input id="email"
                                       type="email"
                                       className="login-input form-control"
                                       value={this.state.email}
                                       onChange={this.handleChange}
                                       placeholder="Adres e-mail"/>
                            </div>
                            {errorMessage}
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
        );
    }
}
