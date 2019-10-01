import React from "react"
import MissionCard from "./MissionCard";
import MissionRepository from "../../logic/repositories/MissionRepository";

import posed  from 'react-pose';
import MissionProgressRepository from "../../logic/repositories/MissionProgressRepository";
import Loading from "../../components/Loading";

const ListContainer = posed.div({
    enter: { staggerChildren: 50 },
    exit: { staggerChildren: 20, staggerDirection: -1 },
    initialPose: 'exit'
});


export default class MissionsMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            missions: null,
            progress: null,
            loadingMissions: true,
            loadingProgress: true
        }
    }

    componentDidMount() {
        MissionRepository.all()
            .then((missions) => {
                this.setState({
                    loadingMissions: false,
                    missions: missions
                });
            })
            .catch((error) => {
                this.setState({ loadingMissions: false});
                console.log(error)
            });

        MissionProgressRepository.all()
            .then((progress) => {
                let missionProgress = {};
                progress.forEach((progress) => {
                    missionProgress[progress.mission] = progress;
                });
                this.setState({
                    loadingProgress: false,
                    progress: missionProgress
                });
            })
            .catch((error) => {
                this.setState({ loadingProgress: false});
                console.log(error)
            });
    }

    render() {
        if (this.state.loadingMissions || this.state.loadingProgress)
            return <Loading/>;

        let missions = this.state.missions.map(
            (mission, i) => <MissionCard key={i} mission={mission}
                                         progress={this.state.progress[mission.id]}
                                         onSelect={() => this.props.onMissionSelect(mission)}/>);

        return (
            <div className="container base-row">
                <div className="row">
                    <div className="col-sm-12 missions-introduction">
                        <h3>A witojcie w Excelu tutorial</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sem tellus, malesuada eget egestas nec, laoreet id orci. Morbi tristique dui non accumsan egestas. Fusce convallis est et eleifend pellentesque. Vivamus bibendum mi at purus sagittis, id malesuada nisi ornare. Nullam dictum vestibulum ante.</p>
                    </div>
                </div>
                <ListContainer className="row missions-row" key='list'>
                    {missions}
                </ListContainer>
            </div>
        );
    }
}
