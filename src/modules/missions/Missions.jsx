import React from "react"
import axios from 'axios';
import SessionManager from "../../logic/user/SessionManager";
import MissionCard from "./MissionCard";


export default class Missions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            missions: null,
            loading: true,
        }
    }

    componentDidMount() {
        axios.get(process.env.REACT_APP_BACKEND_URL+'/api/v1/missions', SessionManager.config)
            .then((response) => {
                this.setState({
                    loading: false,
                    missions: response.data
                });
            })
            .catch((error) => {
                this.setState({ loading: false});
                console.log(error)
            });
    }

    onSelect() {
    }

    render() {
        if (this.state.loading) {
            return (
                <div>Loading</div>
            )
        }
        let missions = this.state.missions.map(
            (mission, i) => <MissionCard key={i} mission={mission}
                                         onSelect={() => this.props.onSelect(mission)}/>);

        return (
            <div className="row">
                {missions}
            </div>
        );
    }
}
