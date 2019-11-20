import React from "react"
import {close} from 'react-icons-kit/fa/close'
import Loading from "../../components/Loading";
import queryString from 'query-string';
import UserRepository from "../../logic/repositories/UserRepository";


export default class ActivationPage extends React.Component {

    componentDidMount() {
        this.checkUrlParams();
    }

    checkUrlParams() {
        if (this.props.location.search) {
            let params = queryString.parse(this.props.location.search);
            if ("activationToken" in params) {
                UserRepository.activate(params['activationToken']).then((user) => {
                    this.props.onSuccess(user, true);
                });
            }
        }
    }

    render() {
        return <Loading/>;
    }
}

