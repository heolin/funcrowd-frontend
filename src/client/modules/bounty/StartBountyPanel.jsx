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

export default class StartBountyPanel extends React.Component {

    render() {
        return (
            <div className="modal-base">
                <BlackBackground className="black-background"
                                 style={{pointerEvents: this.props.isOpen ? "auto" : "none"}}
                                 pose={this.props.isOpen ? 'open' : 'closed'}/>
                <Modal className="modal-window start-bounty-panel card-3-static"
                       pose={this.props.isOpen ? 'open' : 'closed'}
                       style={{pointerEvents: this.props.isOpen ? "auto" : "none"}}>
                    <h3 className="text-center" style={{marginBottom: "30px"}}>
                        #{this.props.bounty.id} {this.props.bounty.task.name}
                    </h3>
                    <ol className="instruction-steps">
                        <li>
                            At the top of the page, you will see a blue panel with a <b>progress bar</b>.<br/>
                            The progress bar will fill after you finish each item.
                        </li>
                        <li>
                            After you finish annotating all items a Reward code will appear in the following place:<br/>
                            ​<img src="https://funcrowd-s3.s3.amazonaws.com/ImageFile_file/reward_done.png"
                                  style={{width: "200px", height: "50px"}}/>
                        </li>
                        <li>
                            <b>Copy the code</b> back to the mturk page to complete the task.
                        </li>
                        <li>
                        The <b>quality of your annotations</b> will be<strong> verified manually</strong> after you finish the task.
                        </li>
                    </ol>

                    <div className="text-center">
                        <button className="btn btn-primary"
                                onClick={this.props.startBounty}
                                style={{width: "140px", marginTop: "20px"}}>
                            Start bounty
                        </button>
                    </div>
                </Modal>
            </div>
        );
    }
}

