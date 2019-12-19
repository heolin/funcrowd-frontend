import React from "react"

import L from "../../logic/locatization/LocalizationManager";
import ProgressBar from "../../components/ProgressBar";
import AchievementIcon from "./AchievementIcon";


export default class AchievementCard extends React.Component {

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
        let text = metadata.text;
        if (finished)
            text = metadata.finishText;
        let value = Math.min(achievement.value, achievement.target);
        value = Math.round(value * 100) / 100;

        return (

            <div className="achievement-card">
                <div className="achievement-card-icon">
                    <AchievementIcon finished={finished} name={icon}/>
                </div>
               <div className="achievement-card-info">
                    <h5 style={{marginBottom: 0}}>{metadata.name}</h5>
                    <div className="little" style={{height: "45px"}}>
                        {text}
                    </div>
                    <div className="achievement-card-progress">
                        <div className="little text-right color-green"
                             style={{marginBottom: "4px"}}>
                            <b>+{achievement.exp} exp</b>
                        </div>
                        <ProgressBar bg="dark" fg="green" color="dark"
                                     textAlign="right" progress={achievement.progress}
                                     text={value + "/" + achievement.target + " zadań"}/>
                    </div>
               </div>
            </div>
        );
    }
}
