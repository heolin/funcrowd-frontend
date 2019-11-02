import React from "react"
import posed from 'react-pose';
import { Icon } from 'react-icons-kit'
import {close} from 'react-icons-kit/fa/close'
import BlackBackground from "../../components/BlackBackground";


const Modal = posed.div({
    open: {
        opacity: 1.0,
        x: "-50%",
        y: "-45%"
    },
    closed: {
        opacity: 0,
        x: "-50%",
        y: "-35%"
    }
});

export default class RewardCodesListPanel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            bounty: null
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.bounty !== state.bounty ||
            (
                props.bounty && state.bounty &&
                props.bounty.userBounty && state.bounty.userBounty &&
                props.bounty.userBounty.rewardsList.length !== state.bounty.userBounty.rewardsList.length
            )) {
            return {
                bounty: props.bounty,
            };
        }

        return null;
    }

    render() {
        let codes = null;
        if (this.state.bounty && this.state.bounty.userBounty && this.state.bounty.userBounty.rewardsList.length > 0) {
            codes = this.state.bounty.userBounty.rewardsList.map((code) =>
                <li key={code}>
                    <span className="badge badge-green" style={{fontSize: "14px"}}>{code}</span>
                </li>
            );
        }

        return (
            <div className="modal-base">
                <BlackBackground className="black-background"
                                 style={{pointerEvents: this.props.isOpen ? "auto" : "none"}}
                                 pose={this.props.isOpen ? 'open' : 'closed'}
                                 onClick={this.props.onClose}/>
                <Modal className="modal-window bounty-rewards-codes-panel card-3-static"
                       pose={this.props.isOpen ? 'open' : 'closed'}
                       style={{pointerEvents: this.props.isOpen ? "auto" : "none"}}>
                    <button className="btn btn-default"
                            style={{width: "40px",float: "right", padding: "0px 8px 5px 10px"}} onClick={this.props.onClose}>
                        <Icon icon={close} size={24} style={{marginLeft: "-5px"}}/>
                    </button>
                    <h3 style={{marginBottom: "40px"}}>Rewards codes</h3>
                    <ol>
                        {codes}
                    </ol>
                </Modal>
            </div>
        );
    }
}

