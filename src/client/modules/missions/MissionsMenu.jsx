import React from "react"
import MissionCard from "./MissionCard";
import MissionRepository from "../../logic/repositories/MissionRepository";

import posed  from 'react-pose';

const ListContainer = posed.div({
    enter: { staggerChildren: 50 },
    exit: { staggerChildren: 20, staggerDirection: -1 }
});


export default class MissionsMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            missions: null,
            loading: true
        }
    }

    componentDidMount() {
        MissionRepository.all()
            .then((missions) => {
                this.setState({
                    loading: false,
                    missions: missions
                });
            })
            .catch((error) => {
                this.setState({ loading: false});
                console.log(error)
            });
    }

    getCardsPanel() {
        let panel = <div>Loading</div>;
        if (!this.state.loading) {
            let missions = this.state.missions.map(
                (mission, i) => <MissionCard key={i} mission={mission}
                                             onSelect={() => this.props.onMissionSelect(mission)}/>);

            panel = (
                <ListContainer className="row missions-row" key='list'>
                    {missions}
                </ListContainer>
            );
        }
        return panel;
    }

    render() {

        return (
            <div className="base-row">
                <div className="row">
                    <div className="col-sm-12 missions-introduction">
                        <h3>A witojcie w Excelu tutorial</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sem tellus, malesuada eget egestas nec, laoreet id orci. Morbi tristique dui non accumsan egestas. Fusce convallis est et eleifend pellentesque. Vivamus bibendum mi at purus sagittis, id malesuada nisi ornare. Nullam dictum vestibulum ante.</p>
                    </div>
                </div>
                {this.getCardsPanel()}
            </div>
        );
    }
}
