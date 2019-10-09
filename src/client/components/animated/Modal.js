import React from "react"
import posed from 'react-pose';


const Modal = posed.div({
    open: {
        opacity: 1.0,
        x: "-50%",
        y: "-50%"
    },
    closed: {
        opacity: 0,
        x: "-50%",
        y: "-40%"
    }
});

export default Modal;
