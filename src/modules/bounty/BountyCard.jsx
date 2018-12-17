import React from "react";
import { Icon } from 'react-icons-kit'
import {lock} from 'react-icons-kit/fa/lock'
import {unlock} from 'react-icons-kit/fa/unlock'
import {trophy} from 'react-icons-kit/fa/trophy'


export default class BountyCard extends React.Component {

    render() {
        let bounty = this.props.bounty;
        let task = bounty.task;
        let userBounty = bounty.userBounty;

        if (userBounty) {
            let progress =  Math.min(userBounty.progress * 100, 100);
            let annotationsDone = Math.min(userBounty.annotationsDone, bounty.annotationsTarget);
            if (userBounty.status === "NEW" || userBounty.status === "IN_PROGRESS") {
                return (
                    <div className="col-md-4" style={{marginBottom: "40px"}}>
                        <div className="bounty-card card-2" onClick={this.props.onSelect}>
                            <div className="bounty-card-header">
                                <h6>Bounty in progress</h6>
                                <h6 className="bounty-card-id">#{bounty.id}</h6>
                            </div>
                            <div className="bounty-card-title-base">
                                <div className="bounty-card-icon">
                                    <Icon icon={unlock} size={32}/>
                                </div>

                                <div className="bounty-card-title">
                                    <h4>{task.name}</h4>
                                </div>
                            </div>

                            <div className="card-progress-bar">
                                <div className="progress mission-progress">
                                    <div className="progress-bar bounty-progress-bar" style={{width: progress+"%"}}></div>
                                </div>
                                <p className="bounty-progress-stats">{annotationsDone} / {bounty.annotationsTarget} done</p>
                            </div>
                        </div>
                    </div>
                );
            } else {
                return (
                    <div className="col-md-4" style={{marginBottom: "40px"}}>
                        <div className="bounty-card finished-card card-2-static">
                            <div className="bounty-card-header">
                                <h6>Bounty finished</h6>
                                <h6 className="bounty-card-id">#{bounty.id}</h6>
                            </div>
                            <div className="bounty-card-title-base">
                                <div className="bounty-card-icon">
                                    <Icon icon={trophy} size={32}/>
                                </div>

                                <div className="bounty-card-title">
                                    <h4>{task.name}</h4>
                                </div>
                            </div>

                            <div className="card-progress-bar">
                                <div className="progress mission-progress">
                                    <div className="progress-bar bounty-progress-bar" style={{width: progress+"%"}}></div>
                                </div>
                                <p className="bounty-progress-stats">
                                    {annotationsDone} / {bounty.annotationsTarget} done
                                </p>
                            </div>
                        </div>
                    </div>
                );
            }
        } else {
            return (
                <div className="col-md-4" style={{marginBottom: "40px"}}>
                    <div className="bounty-card closed-card card-2-static">
                        <div className="bounty-card-header">
                            <h6>Bounty closed</h6>
                            <h6 className="bounty-card-id">#{bounty.id}</h6>
                        </div>
                        <div className="bounty-card-title-base">
                            <div className="bounty-card-icon">
                                <Icon icon={lock} size={32}/>
                            </div>

                            <div className="bounty-card-title">
                                <h4>#{task.name}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
