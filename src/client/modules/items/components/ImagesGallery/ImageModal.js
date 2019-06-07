import React from "react"
import { Icon } from 'react-icons-kit'
import {close} from 'react-icons-kit/fa/close'


export default class ImageModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };

        this.onClose = this.onClose.bind(this);
    }

    onClose() {
        this.props.onClose();
    }

    render() {
        return (
            <div className="modal-base">
                <div className="shadow" onClick={this.onClose}/>
                <div className="gallery-image-modal card-3-static">
                    <img src={this.props.image} style={{maxWidth: "90vw"}}/>
                    <button className="btn btn-default"
                            style={{position: "absolute", top: "-2px", right: "-5px", width: "40px"}}
                            onClick={this.onClose}>
                        <Icon icon={close} size={24} style={{marginLeft: "-5px"}}/>
                    </button>
                </div>
            </div>

        );
    }
}
