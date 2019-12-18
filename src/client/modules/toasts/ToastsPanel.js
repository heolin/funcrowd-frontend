import React from "react"
import Toast from "./Toast";
import ToastManager from "../../logic/ToastsManager";
import { PoseGroup } from 'react-pose';
import ListContainer from "../../components/animated/ListContainer"


export default class ToastsPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            toasts: []
        };
        this.onUpdate = this.onUpdate.bind(this);
    }

    componentDidMount() {
        ToastManager.addToastsChangeHandler(this.onUpdate);
    }

    componentWillUnmount() {
        ToastManager.removeToastsChangeHandler(this.onUpdate);
    }

    onUpdate() {
        this.setState({
            toasts: ToastManager.toasts
        });
    }

    render() {
        let toasts = this.state.toasts.map((toast) =>
           <Toast key={toast.index}
                  type={toast.type}
                  message={toast.message}
                  onClose={() => ToastManager.removeToast(toast.index)}/>
        );
        return (
            <PoseGroup>
                <ListContainer className="toasts-panel" key='list'>
                    {toasts}
                </ListContainer>
            </PoseGroup>
        );
    }
}
