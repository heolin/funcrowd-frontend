import React from "react"

export class Footer extends React.Component {
    render() {
        let className = this.props.className || "";
        return (
            <div className={"footer row bg-black-blue " + className}>
                <div className="container">
                    Hehe jestem dagmarka
                </div>
            </div>
        );
    }
}
