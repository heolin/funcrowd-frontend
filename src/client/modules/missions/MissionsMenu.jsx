import React from "react"
import MissionCard from "./MissionCard";
import MissionRepository from "../../logic/repositories/MissionRepository";


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
        let panel = null;
        if (this.state.loading) {
            panel = <div>Loading</div>
        } else {
            let missions = this.state.missions.map(
                (mission, i) => <MissionCard key={i} mission={mission}
                                             onSelect={() => this.props.onMissionSelect(mission)}/>);
            panel = (
                <div className="row">
                    {missions}
                </div>
            );
        }
        return panel;
    }

    render() {

        return (
            <div className="row base-row">
                <div className="col-sm-12 missions-header-bar">
                    <h3>A witojcie w Excelu tutorial</h3>
                    <p>Najlepszy lorem ipsum tutorial do excela, wszystkiego sie tu nauczycie.</p>
                </div>
                <div className="col-sm-12">
                    {this.getCardsPanel()}
                </div>
            </div>
        );
    }
}
