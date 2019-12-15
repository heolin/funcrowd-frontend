import React from "react"
import avatar from "./static/img/pictures/undraw_female_avatar.svg"

export class Footer extends React.Component {
    render() {
        let style = this.props.style || {};
        let className = this.props.className || "";
        return (
            <div className={"footer row bg-black-blue color-white " + className}
                 style={style}>
                <div className="container">
                    <div className="row">
                        <div className="col-3 col-lg-2" style={{paddingTop: "10px"}}>
                            <img src={avatar} style={{width: "80%"}}/>
                        </div>
                        <div className="col-12 col-md-6" style={{paddingTop: "20px"}}>
                            <p>
                                Masz pytania? Chcesz wiedziec więcej?<br/>Skontaktuj się ze mną:
                            </p>
                            <p>
                                <a className="light-blue-link" href="mailto: funcrowd.service@gmail.com">funcrowd.service@gmail.com</a>
                            </p>
                        </div>
                        <div className="col-md-3 col-12" style={{paddingTop: "20px", textAlign: "right"}}>
                            <p>
                                Przydatne linki:<br/>
                                <a className="light-blue-link" target="_blank" href="https://funcrowd-s3.s3.eu-central-1.amazonaws.com/Files/Space+Calc+-+Regulamin+serwisu.pdf">Regulamin strony</a>
                                <br/>
                                <a className="light-blue-link" target="_blank" href="https://funcrowd-s3.s3.eu-central-1.amazonaws.com/Files/Space+Calc+-+Polityka+Prywatno%C5%9Bci.pdf">Polityka Prywatności</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
