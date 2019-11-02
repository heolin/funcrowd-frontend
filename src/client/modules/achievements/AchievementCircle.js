import React from "react"

import L from "../../logic/locatization/LocalizationManager";
import AchievementIcon from "./AchievementIcon";


export default class AchievementCircle extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        let achievement = this.props.achievement;
        let metadata = achievement.metadata;
        let finished = achievement.status == "FINISHED" || achievement.status == "DONE";
        let icon = "achievements/unknown";
        if (finished)
            icon = "achievements/" + metadata.icon;

        return (

            <div className="achievement-circle d-inline-block col-4">
                <div>
                    <AchievementIcon className="achievement-circle-icon" finished={true} name={icon}/>
                </div>
               <div className="achievement-circle-info little">
                   {metadata.name}
               </div>
            </div>
        );
    }
}
