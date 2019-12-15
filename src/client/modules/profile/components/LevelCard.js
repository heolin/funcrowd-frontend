import React from "react"
import LevelsConfig from "../../../resources/levels";
import L from "../../../logic/locatization/LocalizationManager";
import UserManager from "../../../logic/UserManager";
import ProgressBar from "../../../components/ProgressBar";
import {Icon, SmallIcon} from "../../../components/Icons";

export default class LevelCard extends React.Component {

    render() {
        let threshold = LevelsConfig[this.props.level].threshold;
        let current = Math.min(UserManager.user.exp, threshold);
        let progress = current / threshold;
        let className = this.props.level == UserManager.level + 1 ? " level-card-current": "";
        let icon = null;
            if (parseInt(this.props.level) <= UserManager.level)
                icon = <Icon name="tick-sign-green"/>;

        return (
            <div className="col-02">
                <div className={"level-card card-2-static" + className}>
                    <div className="little">{L.levels.level + " " + this.props.level}</div>
                    <div>
                        <b>{L.levels['level'+this.props.level]}</b>
                    </div>
                    <div className="level-card-icon">
                        {icon}
                    </div>
                    <div className="level-card-exp">
                        <span className="small">{current}/{threshold}</span>
                        <SmallIcon name="experience"/>
                    </div>
                    <ProgressBar className="level-card-progress"
                                 progress={progress} fg="blue" bg="light-blue"/>

                </div>
            </div>
        );
    }
}

