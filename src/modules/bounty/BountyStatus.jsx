import React from "react"
import BountyRepository from "../../logic/repositories/BountyRepository";


let StatusMap = {
    "NEW": <span className="badge badge-warning" style={{fontSize: "14px"}}>Started</span>,
    "IN_PROGRESS": <span className="badge badge-warning" style={{fontSize: "14px"}}>In progress</span>,
    "FINISHED": <span className="badge badge-success" style={{fontSize: "14px"}}>Finished</span>,
    "CLOSED": <span className="badge badge-secondary" style={{fontSize: "14px"}}>Closed</span>
};

export default class BountyStatus extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            userBounty: null,
            previousStatus: null
        };
    }

    componentDidMount() {
        this.updateStatus();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.itemId !== prevProps.itemId) {
           this.updateStatus();
        }
    }


    updateStatus() {
        if (this.props.bounty !== null) {
            BountyRepository.getStatus(this.props.bountyId).then((userBounty) => {
                let newStatus = null;
                if (userBounty) {
                    newStatus = userBounty.status;
                    if (newStatus != this.state.previousStatus && newStatus === "FINISHED")
                        this.props.onBountyFinished();
                }
                this.setState({
                    userBounty: userBounty,
                    previousStatus: newStatus,
                    loading: false
                });
            });
        }
    }

    render() {
        let status = null;
        let bountyStatus = "CLOSED";
        if (this.state.userBounty) {
            let userBounty = this.state.userBounty;
            bountyStatus = userBounty.status;

            let progress = userBounty.progress * 100;
            let reward = <span className="badge badge-secondary" style={{fontSize: "14px"}}>Bounty not finished</span>;
            if (userBounty.reward)
                reward = <span className="badge badge-success" style={{fontSize: "14px"}}>{userBounty.reward}</span>;

            status = (
                <div>
                    <div className="progress mission-progress">
                        <div className="progress-bar bounty-progress-bar" style={{width: progress+"%"}}></div>
                    </div>
                    <p className="bounty-progress-stats">{userBounty.annotationsDone} / {userBounty.annotationsTarget} done</p>
                    <p><b>Reward code:</b> {reward}</p>
                </div>);
        }

        return (
            <div className="col-sm-12 card-1-static bounty-status">
                <h4>Bounty status</h4>
                <p><b>State:</b> {StatusMap[bountyStatus]}</p>
                {status}
            </div>
        );
    }
}
