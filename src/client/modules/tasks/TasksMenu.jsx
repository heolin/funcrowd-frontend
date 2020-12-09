import React from "react"
import TasksRepository from "../../logic/repositories/TasksRepository";
import TaskCard from "./TaskCard";
import MissionRepository from "../../logic/repositories/MissionRepository";
import TaskHeader from "./TasksHeader";
import L from "../../logic/locatization/LocalizationManager";
import urls from "../../Urls";
import { Link } from 'react-router-dom';

import posed  from 'react-pose';
import AchievementCard from "../achievements/AchievementCard";
import TaskProgressRepository from "../../logic/repositories/TaskProgressRepository";
import MissionProgressRepository from "../../logic/repositories/MissionProgressRepository";
import Loading from "../../components/Loading";
import AchievementsRepository from "../../logic/repositories/AchievementsRepository";
import ConfigManager from "../../logic/config/ConfigManager";
import {Footer} from "../../Footer";

const ListContainer = posed.div({
    enter: { staggerChildren: 50 },
    exit: { staggerChildren: 20, staggerDirection: -1 }
});

export default class TasksMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loadingTasks: true,
            loadingProgress: true,
            loadingTaskProgress: true,
            loadingAchievements: true,
            tasks: null,
            progress: null,
            taskProgress: null,
        }
    }

    componentDidMount() {
        this.checkState();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.mission !== prevProps.mission)
            this.checkState();
    }

    checkState() {
        if (this.props.mission === null) {
            let missionId = this.props.match.params.id;
            MissionRepository.get(missionId)
                .then((mission) => {
                    this.props.onMissionSelect(mission);
                });
        } else
            this.getTasksList();
    }

    getTasksList() {
        let mission = this.props.mission;
        MissionProgressRepository.get(this.props.mission.id)
            .then((progress) => {
                this.setState({
                    loadingProgress: false,
                    progress: progress
                });
            })
            .catch((error) => {
                this.setState({ loadingProgress: false});
                console.log(error)
            });

        TasksRepository.list(mission.id)
            .then((tasks) => {
                if (mission.metadata['autoOpenTask'] === true &&
                    tasks.length > 0) {
                    this.props.onTaskSelect(tasks[0]);
                } else {
                    this.setState({
                        loadingTasks: false,
                        tasks: tasks
                    });
                }

            })
            .catch((error) => {
                this.setState({ loadingTasks: false});
                console.log(error)
            });

        TaskProgressRepository.list(mission.id)
            .then((tasks) => {
                let taskProgress = {};
                tasks.forEach((progress) => {
                    taskProgress[progress.task] = progress;
                });
                this.setState({
                    loadingTaskProgress: false,
                    taskProgress: taskProgress
                });
            })
            .catch((error) => {
                this.setState({ loadingTaskProgress: false});
                console.log(error)
            });

        AchievementsRepository.mission(mission.id)
            .then((achievements) => {
                this.setState({
                    loadingAchievements: false,
                    achievements: achievements
                });
            }).catch((error) => {
            this.setState({ loadingAchievements: false});
                console.log(error)
            });
    }

    getCardsPanel() {
        let tasks = null;
        if (this.state.tasks !== null)
            tasks = this.state.tasks.map(
                (task, i) => <TaskCard key={i} task={task}
                                       progress={this.state.taskProgress[task.id]}
                                       onSelect={() => this.props.onTaskSelect(task)}/>);

        const lineClass = ConfigManager.profile.achievements ? "" : " noline";

        return (
            <ListContainer className={"task-cards" + lineClass}>
                {tasks}
            </ListContainer>
        );
    }

    render() {
        if (this.state.loadingTasks ||
            this.state.loadingProgress ||
            this.state.loadingTaskProgress ||
            this.state.loadingAchievements)
            return <Loading/>;

        let mainColumnClass = "col-lg-12";
        let sideColumn = null;

        if (ConfigManager.profile.achievements) {
            mainColumnClass = "col-lg-8";

            let achievements = this.state.achievements.map(
                (achievement) => (
                    <div className="col-lg-12 col-md-6 col-sm-12" key={achievement.id}>
                        <AchievementCard achievement={achievement}/>
                    </div>
                )
            );

            sideColumn = (<div className="col-lg-4 col-md-12">
                <div className="tasks-achievements-introduction">
                    <h3>{L.labels.achievements}</h3>
                    W tym dziale możesz zdobyć
                </div>
                <div className="row achievements-row">
                    {achievements}
                    <div className="col-sm-12 text-right color-blue small"
                         style={{paddingRight: "30px", paddingBottom: "30px"}}>
                        <Link className="blue-link" to="/achievements">
                            Zobacz wszystkie osiągnięcia
                        </Link>
                    </div>
                </div>
            </div>);
        }

        return (
            <div className="container-fluid base-row">
                <TaskHeader mission={this.props.mission} progress={this.state.progress}/>
                <div className="container">
                    <div className="row tasks-row" style={{marginBottom: "30px"}}>
                        <div className={"col-md-12 " + mainColumnClass}>
                            <div className="tasks-introduction">
                                <h3>{L.labels.missions}</h3>
                                {this.props.mission.instruction}
                            </div>
                            {this.getCardsPanel()}
                            <div style={{marginTop: "20px"}}>
                                <Link className="blue-link"
                                      to={urls.MISSIONS}>
                                    {L.general.backToMissions}
                                </Link>
                            </div>
                        </div>
                        {sideColumn}
                    </div>
                </div>
            </div>
        );
    }
}
