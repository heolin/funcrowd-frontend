import React from "react"
import { Icon } from 'react-icons-kit'
import {close} from 'react-icons-kit/fa/close'


export default class InstructionPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };

        this.onClose = this.onClose.bind(this);
    }

    componentDidMount() {
    }

    onClose() {
        this.props.onClose();
    }

    render() {
        let task = this.props.task;

        return (
            <div className="modal-base">
                <div className="shadow" onClick={this.onClose}>
                </div>
                <div className="instruction-panel col-md-8 col-sm-10 card-3-static">
                    <button className="btn btn-default"
                            style={{width: "40px",float: "right", paddingTop: "4px"}} onClick={this.onClose}>
                        <Icon icon={close} size={24} style={{marginLeft: "-5px"}}/>
                    </button>
                    <h6>Instruction</h6>
                    <h4 style={{marginBottom: "20px"}}>
                    {task.name}
                    </h4>
                    <div dangerouslySetInnerHTML={{__html: task.instruction}}/>
                </div>
            </div>
        );
    }
}

