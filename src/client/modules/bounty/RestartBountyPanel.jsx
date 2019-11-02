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

export default class RestartBountyPanel extends React.Component {

    render() {
        return (
            <div className="modal-base">
                <BlackBackground className="black-background"
                                 style={{pointerEvents: this.props.isOpen ? "auto" : "none"}}
                                 pose={this.props.isOpen ? 'open' : 'closed'}/>
                <Modal className="modal-window restart-bounty-panel card-3-static"
                       pose={this.props.isOpen ? 'open' : 'closed'}
                       style={{pointerEvents: this.props.isOpen ? "auto" : "none"}}>
                    <h3 className="text-center" style={{marginBottom: "30px"}}>
                         Start next bounty
                    </h3>
                    <p>
                        You are about to start a next bounty.
                    </p>
                    <ul className="instruction-steps">
                        <li>
                            Your <b>progress bar will reset</b> but you will still have access to all your <b>previous reward codes</b>.
                        </li>
                        <li>
                            After you finish you will received <b>next reward code</b>.
                        </li>
                        <li>
                            <b>Copy the code</b> back to the mturk page to complete the task.
                        </li>
                    </ul>
                    <div className="text-center">
                        <button className="btn btn-primary"
                                onClick={this.props.startBounty}
                                style={{width: "140px", marginTop: "20px"}}>
                            Start
                        </button>
                    </div>
                </Modal>
            </div>
        );
    }
}

