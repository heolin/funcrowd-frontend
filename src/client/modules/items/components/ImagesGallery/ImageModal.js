import React from "react"
import posed from 'react-pose';
import { Icon } from 'react-icons-kit'
import {close} from 'react-icons-kit/fa/close'
import BlackBackground from "../../../../components/BlackBackground";


const Modal = posed.div({
    open: {
        opacity: 1.0,
        scale: 1.0,
        x: "-50%",
        y: "-50%"
    },
    closed: {
        opacity: 0,
        scale: 0.0,
        x: "-50%",
        y: "-50%"
    }
});


export default class ImageModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            image: null
        };

        this.onClose = this.onClose.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.image !== state.image && props.image) {
            return {
                image: props.image,
            };
        }
        return null;
    }

    onClose() {
        this.props.onClose();
    }

    render() {
        console.log(this.props);
        return (
            <div className="modal-base">
                <BlackBackground className="black-background"
                                 style={{pointerEvents: this.props.image ? "auto" : "none"}}
                                 pose={this.props.image ? 'open' : 'closed'}
                                 onClick={this.onClose}/>
                <Modal className="gallery-image-modal card-3-static"
                       style={{pointerEvents: this.props.image ? "auto" : "none"}}
                       pose={this.props.image ? 'open' : 'closed'}>

                    <img src={this.state.image} style={{maxHeight: "75vh", maxWidth: "90vw"}}/>
                    <div style={{position: "absolute", top: "-40px", right: "-50px", width: "40px"}}
                            onClick={this.onClose}>
                        <Icon icon={close} size={32} style={{marginLeft: "-5px", color: "white"}}/>
                    </div>
                </Modal>
            </div>

        );
    }
}
