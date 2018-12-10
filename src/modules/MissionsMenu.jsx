import React from "react"
import Missions from "./missions/Missions";


export default class MissionsMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {

    }


    render() {
        return (
            <div className="row baserow">
                <div className="col-sm-12 missions-header-bar">
                    <h3>A witojcie w Excelu tutorial</h3>
                    <p>Najlepszy lorem ipsum tutorial do excela, wszystkiego sie tu nauczycie.</p>
                </div>
                <div className="col-sm-12">
                    <Missions onSelect={this.props.onMissionSelect}/>
                </div>
            </div>
        );
    }
}
