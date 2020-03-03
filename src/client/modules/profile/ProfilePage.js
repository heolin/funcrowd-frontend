import React from "react"
import ProfilePageHeader from "./ProfilePageHeader";
import LevelsConfig from "../../resources/levels";
import LevelCard from "./components/LevelCard";
import UserManager from "../../logic/UserManager";
import { Link } from 'react-router-dom';
import RankingRepository from "../../logic/repositories/RankingRepository";
import {Footer} from "../../Footer";
import TaskProgressRepository from "../../logic/repositories/TaskProgressRepository";
import Loading from "../../components/Loading";
import TestCard from "./components/TestCard";
import ConfigManager from "../../logic/config/ConfigManager";
import UserRepository from "../../logic/repositories/UserRepository";


export default class ProfilePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            exp: null,
            loadingUserRanking: true,
            ranking: null,
            tasksDone: null
        };

        this.testsIds = [52, 53, 54];

        this.testsIds.forEach((testId) => {
            this.state["test" + testId] = null;
            this.state["loadingTest" + testId] = true;
        });

        this.onUpdate = this.onUpdate.bind(this);
    }

    componentWillMount() {
        UserManager.addExperienceChangeHandler(this.onUpdate);

        let state = {};
        this.testsIds.forEach((testId) => {
            state["loadingTest" + testId] = true;

            TaskProgressRepository.get(testId)
                .then((progress) => {
                    let state = {};
                    state["test" + testId] = progress;
                    state["loadingTest" + testId] = false;
                    this.setState(state);
                })
                .catch((error) => {
                    let state = {};
                    state["loadingTest" + testId] = false;
                    this.setState(state);
                    console.log(error)
                });
        });

        RankingRepository.user(UserManager.user.id)
            .then((row) => {
                this.setState({
                    ranking: row,
                    loadingUserRanking: false
                });
            })
            .catch((error) => {
                this.setState({loadingUserRanking: false});
                console.log(error)
            });

        UserRepository.stats(UserManager.user.id)
            .then((stats) => {
                this.setState({
                    tasksDone: stats.annotatedTasks
                });
            })
            .catch((error) => {
                console.log(error)
            });

        this.setState(state);
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
        if (UserManager.user === null)
            return <Loading/>;

        for (const testId of this.testsIds) {
            if (this.state["loadingTest" + testId])
                return <Loading/>;
        }

        if (this.state.loadingUserRanking)
            return <Loading/>;


        let levelCards = [];
        Object.keys(LevelsConfig).forEach((level) => {
            if (level > 1)
                levelCards.push(<LevelCard key={level} level={level}/>);
        });

        let testCards = [];
        this.testsIds.forEach((testId) => {
            testCards.push(<TestCard name={"Test " + (testCards.length + 1)}
                                     progress={this.state['test' + testId]}/>);
        });


        let levelsHeader = null;
        let levelsPanel = null;
        if (ConfigManager.profile.exp) {
            levelsHeader = (
                <div className="col-sm-12" style={{marginBottom: "50px"}}>
                    <h3>Twój poziom</h3>
                    <p>Za rozwiązywanie zadań otrzymujesz gwiazdki. Im więcej gwiazdek, tym wyższy poziom doświadczenia!</p>
                    <div className="text-center">
                        <h5>Rozwiązałeś/łaś</h5>
                        <h3>{this.state.tasksDone} zadań</h3>
                    </div>
                </div>

            );

            levelsPanel = (
                <div className="col-sm-12" style={{marginBottom: "60px"}}>
                    <div className="row">
                            {levelCards}
                    </div>
                </div>
            );
        }

        let rankingHeader = null;
        let rankingPanel = null;
        if (ConfigManager.profile.ranking) {
            rankingHeader = (
                <div className="col-12">
                    <h3>Twoje miejsce w rankingu</h3>
                    <p>Sprawdź swoje miejsce</p>
                </div>
            );

            rankingPanel = (
                <div className="col-md-8 offset-md-2 col-12 small" style={{marginBottom: "60px"}}>
                    <div className="ranking-panel card-2-static">
                        <table class="ranking-table table table-borderless text-center">
                            <thead>
                            <tr className="color-blue">
                                <th scope="col"><b>Miejsce</b></th>
                                <th scope="col"><b>Gracz</b></th>
                                <th scope="col"><b>Doświadczenie</b></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="ranking-table-row-current">
                                <td>{this.state.ranking.position}</td>
                                <td>{this.state.ranking.username}</td>
                                <td><b>{this.state.ranking.value}</b> pkt</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="text-right" style={{paddingTop: "20px"}}>
                        <Link className="blue-link" to="/ranking">
                            <div className="normal">Zobacz cały ranking</div>
                        </Link>
                    </div>
                </div>
            )
        }

        return (
            <div className="container-fluid base-row">
                <ProfilePageHeader/>
                <div className="container">
                    <div className="row tasks-row" style={{paddingTop: "80px", minHeight: "650px"}}>
                        <div className="col-sm-12" style={{marginBottom: "50px"}}>
                            <h3>Wyniki testów</h3>
                            <p>
                                Zobacz jakie wyniki uzyskałeś/łaś w kolejnych testach wiedzy i umiejętności obsługi arkuszy kalkulacyjnych.
                            </p>
                            <div className="test-cards text-center" style={{paddingTop: "20px"}}>
                                {testCards}
                            </div>
                        </div>

                        {levelsHeader}
                        {levelsPanel}

                        {rankingHeader}
                        {rankingPanel}

                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
