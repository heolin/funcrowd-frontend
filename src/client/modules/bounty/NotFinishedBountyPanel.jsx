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

export default class NotFinishedBountyPanel extends React.Component {

    render() {
        return (
            <div className="modal-base">
                <BlackBackground className="black-background"
                                 style={{pointerEvents: this.props.isOpen ? "auto" : "none"}}
                                 pose={this.props.isOpen ? 'open' : 'closed'}/>
                <Modal className="modal-window not-finished-bounty-panel card-3-static"
                       pose={this.props.isOpen ? 'open' : 'closed'}
                       style={{pointerEvents: this.props.isOpen ? "auto" : "none"}}>
                    <h3 className="text-center" style={{marginBottom: "30px"}}>
                        Bounty not finished
                    </h3>
                    <p>
                        You cannot start new bounty before you finish the previous one.<br/>
                        Before you start the new bounty you need to:
                    </p>
                    <ol className="instruction-steps">
                        <li>
                            Finish the <b>previous bounty</b>.
                        </li>
                        <li>
                            <b>Copy the code</b> back to the mturk page to complete it.
                        </li>
                        <li>
                            Go to the next item in the mturk and <b>use the link</b> you find there to start the next bounty.
                        </li>
                    </ol>
                    <div className="text-center">
                        <button className="btn btn-primary"
                                onClick={this.props.onClose}
                                style={{width: "140px", marginTop: "20px"}}>
                            Continue
                        </button>
                    </div>
                </Modal>
            </div>
        );
    }
}

