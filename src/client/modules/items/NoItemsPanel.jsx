import React from "react"
import L from "../../logic/locatization/LocalizationManager";


export default class NoItemsPanel extends React.Component {

    render() {
        return (
            <div className="col-sm-12 items-panel no-items-panel">
                <div className="card-1-static item-panel-group">
                    <h4>{L.general.noItemsHeader}</h4>
                    <p style={{marginBottom: 0}}>
                        {L.general.noItemsMessage}
                    </p>
                </div>
            </div>
        );
    }
}
