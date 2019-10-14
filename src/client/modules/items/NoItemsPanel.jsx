import React from "react"

export default class NoItemsPanel extends React.Component {

    render() {
        return (
            <div className="col-sm-12 items-panel no-items-panel">
                <div className="card-1-static item-panel-group">
                    <h4>No items left</h4>
                    <p style={{marginBottom: 0}}>
                        You have finished tagging all items from this task.
                    </p>
                </div>
            </div>
        );
    }
}
