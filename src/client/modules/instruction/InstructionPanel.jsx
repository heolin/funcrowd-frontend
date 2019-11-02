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

export default class InstructionPanel extends React.Component {

    render() {
        let task = this.props.task;

        return (
            <div className="modal-base">
                <BlackBackground className="black-background"
                                 style={{pointerEvents: this.props.isOpen ? "auto" : "none"}}
                                 pose={this.props.isOpen ? 'open' : 'closed'}
                                 onClick={this.props.onClose}/>
                <Modal className="modal-window instruction-panel card-3-static"
                       pose={this.props.isOpen ? 'open' : 'closed'}
                       style={{pointerEvents: this.props.isOpen ? "auto" : "none"}}>
                    <button className="btn btn-default"
                            style={{width: "40px",float: "right", padding: "0px 8px 5px 10px"}} onClick={this.props.onClose}>
                        <Icon icon={close} size={24} style={{marginLeft: "-5px"}}/>
                    </button>
                    <h6>Instruction</h6>
                    <h4 style={{marginBottom: "20px"}}>
                    {task.name}
                    </h4>
                    <div dangerouslySetInnerHTML={{__html: task.instruction}}/>
                </Modal>
            </div>
        );
    }
}

