import React from "react"

export default class NoItemsPanel extends React.Component {

    render() {
        return (
            <div className="col-sm-12 card-1-static no-items-panel">
                <h4>No items left</h4>
                <p>
                    You have finished tagging all items from this task.
                </p>
            </div>
        );
    }
}
