import React from "react"
import TasksRepository from "../../logic/repositories/TasksRepository";
import TaskCard from "./TaskCard";
import MissionRepository from "../../logic/repositories/MissionRepository";
import TaskHeader from "./TasksHeader";
import L from "../../logic/locatization/LocalizationManager";
import { Link } from 'react-router-dom';

import posed  from 'react-pose';
import AchievementCard from "../achievements/AchievementCard";
import TaskProgressRepository from "../../logic/repositories/TaskProgressRepository";
import MissionProgressRepository from "../../logic/repositories/MissionProgressRepository";
import Loading from "../../components/Loading";

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
                this.setState({
                    loadingTasks: false,
                    tasks: tasks
                });
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
    }

    getCardsPanel() {
        let tasks = null;
        if (this.state.tasks !== null)
            tasks = this.state.tasks.map(
                (task, i) => <TaskCard key={i} task={task}
                                       progress={this.state.taskProgress[task.id]}
                                       onSelect={() => this.props.onTaskSelect(task)}/>);

        return (
            <ListContainer className="task-cards">
                {tasks}
            </ListContainer>
        );
    }

    render() {
        if (this.state.loadingTasks || this.state.loadingProgress || this.state.loadingTaskProgress)
            return <Loading/>;

        return (
            <div className="container base-row">
                <TaskHeader mission={this.props.mission} progress={this.state.progress}/>
                <div className="row tasks-row">
                    <div className="col-md-12 col-lg-8">
                        <div className="tasks-introduction">
                            <h3>{L.labels.missions}</h3>
                            Lorem ipsum
                        </div>
                        {this.getCardsPanel()}
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="tasks-achievements-introduction">
                            <h3>{L.labels.achievements}</h3>
                            W tym dzile IPSUM
                        </div>
                        <div className="row achievements-row">
                            <div className="col-lg-12 col-md-6 col-sm-12">
                                <AchievementCard/>
                            </div>
                            <div className="col-lg-12 col-md-6 col-sm-12">
                                <AchievementCard/>
                            </div>
                            <div className="col-lg-12 col-md-6 col-sm-12">
                                <AchievementCard/>
                            </div>
                            <div className="col-sm-12 text-right color-blue small"
                                 style={{paddingRight: "30px"}}>
                                <Link to="/achievements">
                                    Zobacz wszystkie czalendze
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
