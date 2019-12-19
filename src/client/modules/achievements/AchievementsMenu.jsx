import React from "react"

import posed  from 'react-pose';
import AchievementCard from "./AchievementCard";
import AchievementsRepository from "../../logic/repositories/AchievementsRepository";
import Loading from "../../components/Loading";
import AchievementsManager from "../../logic/AchievementsManager";
import {Footer} from "../../Footer";


const ListContainer = posed.ul({
    enter: { staggerChildren: 50 },
    exit: { staggerChildren: 20, staggerDirection: -1 }
});


export default class AchievementsMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            finishedAchievements: null,
            unfinishedAchievements: null,
            loading: true
        };

        this.onUpdate = this.onUpdate.bind(this);
    }

    componentDidMount() {
        AchievementsManager.addAchievementsChangeHandler(this.onUpdate);
        AchievementsManager.update();
    }

    componentWillUnmount() {
        AchievementsManager.removeAchievementsChangeHandler(this.onUpdate);
    }

    onUpdate() {
        this.setState({
            loading: false,
            finishedAchievements: AchievementsManager.finishedAchievements,
            unfinishedAchievements: AchievementsManager.unfinishedAchievements
        });
    }

    render() {
        if (this.state.loading)
            return <Loading/>;

        let finishedAchievements = this.state.finishedAchievements.map(
            (achievement) => (
                <div className="col-md-6 col-lg-4 col-sm-12" key={achievement.id}>
                    <AchievementCard achievement={achievement}/>
                </div>
            )
        );
        if (finishedAchievements.length === 0)
            finishedAchievements = (
                <p style={{marginLeft: "30px"}}>
                    <i>Nie zdobyłeś jeszcze żadnych osiągnięć :(</i>
                </p>
            );

        let unfinishedAchievements = this.state.unfinishedAchievements.map(
            (achievement) => (
                <div className="col-md-6 col-lg-4 col-sm-12" key={achievement.id}>
                    <AchievementCard achievement={achievement}/>
                </div>
            )
        );

        return (
            <div className="container-fluid base-row-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12 achivements-earned">
                            <h3>Zdobyte</h3>
                            <p>
                                Twoja kolekcja odznak
                            </p>
                            <div className="row achievements-row">
                                {finishedAchievements}
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{marginTop: "40px"}}>
                        <div className="col-12 achivements-to-earn">
                            <h3>Do zdobycia</h3>
                            <p>
                                Wykonuj zadania, aby odblować nowe osiągniecia!
                            </p>
                            <div className="row achievements-row">
                                {unfinishedAchievements}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
