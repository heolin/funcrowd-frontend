import React from "react"

import posed  from 'react-pose';
import AchievementCard from "./AchievementCard";
import AchievementsRepository from "../../logic/repositories/AchievementsRepository";
import Loading from "../../components/Loading";

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
    }

    componentDidMount() {
        AchievementsRepository.all()
            .then((achievements) => {
                let finishAchievements = [];
                let unfinishedAchievements = [];
                achievements.forEach((achievement) => {
                   if (achievement.status == "FINISHED" || achievement.status == "DONE")
                       finishAchievements.push(achievement);
                   else
                       unfinishedAchievements.push(achievement);
                });

                this.setState({
                    loading: false,
                    unfinishedAchievements: unfinishedAchievements,
                    finishedAchievements: finishAchievements
                });
            }).catch((error) => {
                this.setState({ loading: false});
                console.log(error)
            });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
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
        let unfinishedAchievements = this.state.unfinishedAchievements.map(
            (achievement) => (
                <div className="col-md-6 col-lg-4 col-sm-12" key={achievement.id}>
                    <AchievementCard achievement={achievement}/>
                </div>
            )
        );

        return (
            <div className="container base-row">
                <div>
                    <div className="badges-earned">
                        <h3>Zdobyte</h3>
                        534543
                    </div>
                    <div className="row achievements-row">
                        {finishedAchievements}
                    </div>
                </div>
                <div>
                    <div className="badges-to-earn">
                        <h3>Do zdobycia</h3>
                        534543
                    </div>
                    <div className="row achievements-row">
                        {unfinishedAchievements}
                    </div>
                </div>
            </div>
        );
    }
}
