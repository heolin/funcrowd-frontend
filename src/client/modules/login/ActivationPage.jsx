import React from "react"
import {close} from 'react-icons-kit/fa/close'
import Loading from "../../components/Loading";
import queryString from 'query-string';
import L from "../../logic/locatization/LocalizationManager";
import { Link } from 'react-router-dom';
import urls from "../../Urls"
import UserRepository from "../../logic/repositories/UserRepository";
import ActivationEmailSentPanel from "./ActivationEmailSentPanel";


let ActivationStates = {
    LOADING: 0,
    NO_TOKEN: 1,
    TOKEN_EXPIRED: 2,
    TOKEN_WRONG: 3,
    TOKEN_USED: 4,
    RESEND_TOKEN: 5
};


export default class ActivationPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            state: ActivationStates.LOADING,
            token: null
        };

        this.resendLink = this.resendLink.bind(this);
    }

    componentDidMount() {
        this.checkUrlParams();
        window.scrollTo(0, 0);
    }

    resendLink() {
        this.setState({
            state: ActivationStates.LOADING,
        });

        UserRepository.renewToken(this.state.token).then((user) => {
            this.setState({
               state: ActivationStates.RESEND_TOKEN
            });
        })
    }

    checkUrlParams() {
        if (this.props.location.search) {
            let params = queryString.parse(this.props.location.search);
            if ("activationToken" in params) {
                UserRepository.activate(params['activationToken']).then((user) => {
                    this.props.onSuccess(user, true);
                }).catch((error) => {
                    let responseError = error.response.data['detail'];
                    console.log(responseError);

                    if (responseError === 'Activation token is incorrect')
                        this.setState({ state: ActivationStates.TOKEN_WRONG });
                    else if (responseError === 'Activation token has expired')
                        this.setState({
                            state: ActivationStates.TOKEN_EXPIRED,
                            token: params['activationToken']
                        });
                    else if (responseError === 'Activation token is already used')
                        this.setState({ state: ActivationStates.TOKEN_USED });
                });
            } else {
                this.setState({ state: ActivationStates.NO_TOKEN });
            }

        } else {
            this.setState({ state: ActivationStates.NO_TOKEN });
        }
    }

    render() {
        if (this.state.state === ActivationStates.LOADING)
            return <Loading/>;

        if (this.state.state === ActivationStates.RESEND_TOKEN)
            return <ActivationEmailSentPanel/>;

        let header = "";
        let message = "";

        let buttons = (
            <div className="text-center">
                <Link to={urls.LOGIN}>
                    <button className="btn btn-orange-primary"
                        style={{width: "140px", marginTop: "20px"}}>
                        {L.login.back}
                    </button>
                </Link>
            </div>
        );

        if (this.state.state === ActivationStates.NO_TOKEN) {
            header = L.login.activationTokenMissingHeader;
            message = L.login.activationTokenMissingMessage;
        } else if (this.state.state === ActivationStates.TOKEN_EXPIRED) {
            header = L.login.activationTokenExpiredHeader;
            message = L.login.activationTokenExpiredMessage;

            buttons = (
                <div className="text-center">
                    <Link to={urls.LOGIN}>
                        <button className="btn btn-default"
                                style={{width: "140px", marginTop: "20px"}}>
                            {L.login.back}
                        </button>
                    </Link>

                    <button className="btn btn-orange-primary" onClick={this.resendLink}
                            style={{width: "140px", marginTop: "20px", marginLeft: "50px"}}>
                        {L.login.send}
                    </button>
                </div>
            );
        } else if (this.state.state === ActivationStates.TOKEN_WRONG) {
            header = L.login.activationTokenWrongHeader;
            message = L.login.activationTokenWrongMessage;
        } else if (this.state.state === ActivationStates.TOKEN_USED) {
            header = L.login.activationTokenUsedHeader;
            message = L.login.activationTokenUsedMessage;
        }

        return (
            <div className="container-fluid base-row">
                <div className="container">
                    <div className="row">
                        <div className="activation-email-panel col-lg-6 col-md-10 col-12 card-3-static">
                            <h3 className="text-center" style={{marginBottom: "30px"}}>
                                {header}
                            </h3>
                            <p className="small text-center" dangerouslySetInnerHTML={{__html: message}}/>
                            {buttons}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

