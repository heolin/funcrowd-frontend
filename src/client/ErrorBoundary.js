import React from "react"


export default class ErrorBoundary extends React.Component {
    constructor(props) {
    super(props);
        this.state = {
            hasError: false,
            error: null
        };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true,
            error: error,
        });
    }

    render() {
        if (this.state.hasError) {
            let message = "UNKNOWN ERROR";
            if (this.state.error.customError)
                message = this.state.error.message;

            return (
                <div className="loading-panel font-header">
                    <div className="error-panel-body">
                        <div>
                            <img className="error-panel-icon" src="/static/assets/icons/error.png"/>
                        </div>
                        <div style={{fontSize: "40px"}}>
                            OH NO!
                        </div>
                        <div className="font-very-big">
                            SOMETHING WENT WRONG
                        </div>
                        <div>
                            {message}
                        </div>
                    </div>
                </div>
            )
        }

        return this.props.children;
    }
}
