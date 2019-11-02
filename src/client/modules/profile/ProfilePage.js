import React from "react"
import ProfilePageHeader from "./ProfilePageHeader";
import LevelsConfig from "../../resources/levels";
import LevelCard from "./LevelCard";
import UserManager from "../../logic/UserManager";


export default class ProfilePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            exp: null
        };

        this.onUpdate = this.onUpdate.bind(this);
    }

    componentWillMount() {
        UserManager.addExperienceChangeHandler(this.onUpdate);
    }

    componentWillUnmount() {
        UserManager.removeExperienceChangeHandler(this.onUpdate);
    }

    onUpdate() {
        if (UserManager.user) {
            this.setState({
                exp: UserManager.user.exp
            });
        }
    }

    render() {

        let levelCards = [];
        Object.keys(LevelsConfig).forEach((level) => {
            if (level > 1)
                levelCards.push(<LevelCard key={level} level={level}/>);
        });

        return (
            <div className="container base-row">
                <ProfilePageHeader/>
                <div className="row tasks-row" style={{paddingTop: "60px"}}>
                    <div className="col-sm-12">
                        <h3>Twój poziom</h3>
                        <p>Za rozwiązywanie zadań otrzymujesz gwiazdki. Im więcej gwiazdek, tym wyższy poziom doświadczenia!</p>
                        <div className="text-center">
                            <h5>Rozwiązałeś/łaś</h5>
                            <h3>14 z 30 zadań</h3>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="row">
                            {levelCards}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
