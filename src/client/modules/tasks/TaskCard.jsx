import React from "react"
import posed from 'react-pose';
import {Icon, SmallIcon} from "../../components/Icons";


const Card = posed.div({
    enter: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 }
});


export default class TaskCard extends React.Component {

    render() {
        return (
            <Card className="col-12 task-card blocked" onClick={this.props.onSelect}>
                <div className="row">
                    <div className="col-1">
                        <SmallIcon name="excel" color="orange"/>
                    </div>
                    <div className="col-6">
                        {this.props.task.name}
                    </div>
                    <div className="col-2">
                        exp
                    </div>
                    <div className="col-1">
                        <Icon className="very-small-icon" name="go-sign" color="orange"/>
                    </div>
                </div>
            </Card>
        );
    }
}
