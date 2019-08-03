import React from "react"

import L from "../../logic/locatization/LocalizationManager";
import ProgressBar from "../components/ProgressBar";
import {AchievementIcon} from "../components/Icons";


export default class AchievementCard extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="achievement-card">
                <div className="achievement-card-icon">
                    <AchievementIcon finished={false} name="unknown"/>
                </div>
               <div className="achievement-card-info">
                    <h5 style={{marginBottom: 0}}>Jak w domu</h5>
                    <div className="little" style={{height: "45px"}}>
                        Rozwiąż 5 zadań z działu Reguły i funckje - Raguly arytmetyczne
                    </div>
                    <div className="achievement-card-progress">
                        <div className="little text-right color-green"
                             style={{marginBottom: "4px"}}>
                            <b>+50 xp</b>
                        </div>
                        <ProgressBar bg="dark" fg="green" color="dark"
                                     textAlign="right" progress={0.54}/>
                    </div>
               </div>
            </div>
        );
    }
}
