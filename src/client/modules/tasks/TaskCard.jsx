import React from "react"
import posed from 'react-pose';

const Card = posed.div({
    enter: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 }
});


export default class TaskCard extends React.Component {

    render() {
        return (
            <Card className="col-md-4">
                <div className="task-card card-2" onClick={this.props.onSelect}>
                    <h4>{this.props.task.name}</h4>
                    <p>0/0 ukończone</p>
                </div>
            </Card>
        );
    }
}
