import React from "react"
import posed from 'react-pose';
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

export default class MobileWarningPanel extends React.Component {

    render() {
        return (
            <div className="modal-base">
                <BlackBackground className="black-background"
                                 style={{pointerEvents: this.props.isOpen ? "auto" : "none"}}
                                 pose={this.props.isOpen ? 'open' : 'closed'}
                                 onClick={this.props.onClose}/>
                <Modal className="modal-window mobile-warning-panel card-3-static"
                       pose={this.props.isOpen ? 'open' : 'closed'}
                       style={{pointerEvents: this.props.isOpen ? "auto" : "none"}}>
                    <h3 className="text-center">
                        Łatwiej będzie na komputerze
                    </h3>
                    <div>
                        <p>
                            Cześć!
                        </p>
                        <p>
                            Wygląda na to, że chcesz rozwiązać to zadanie, ale przeglądasz je na smartfonie. Nasz kurs wygodniej rozwiązywać na większym ekranie. Nasza rada? Przesiądź się na laptop lub komputer.
                        </p>
                        <p>
                            Pamiętaj, do rozwiązywania zadań potrzebujesz programu Excel. Łatwiej i szybciej obsłużysz go na komputerze.
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="btn btn-primary feedback-button"
                             style={{marginTop: "20px"}}
                             onClick={this.props.onClose}>
                            Ok, dzięki
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

