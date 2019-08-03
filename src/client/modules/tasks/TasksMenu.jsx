import React from "react"
import TasksRepository from "../../logic/repositories/TasksRepository";
import TaskCard from "./TaskCard";
import MissionRepository from "../../logic/repositories/MissionRepository";
import TasksMenuHeader from "./TasksMenuHeader";
import L from "../../logic/locatization/LocalizationManager";
import { Link } from 'react-router-dom';

import posed  from 'react-pose';
import AchievementCard from "../achievements/AchievementCard";

const ListContainer = posed.ul({
    enter: { staggerChildren: 50 },
    exit: { staggerChildren: 20, staggerDirection: -1 }
});

export default class TasksMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            tasks: null
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
        console.log("getting tasks list");
        let mission = this.props.mission;
        TasksRepository.list(mission.id)
            .then((tasks) => {
                this.setState({
                    loading: false,
                    tasks: tasks
                });
            })
            .catch((error) => {
                this.setState({ loading: false});
                console.log(error)
            });

    }

    getCardsPanel() {
        if (this.state.loading) {
            return (
                <div>Loading</div>
            )
        }

        let tasks = null;
        if (this.state.tasks !== null)
            tasks = this.state.tasks.map(
                (task, i) => <TaskCard key={i} task={task}
                                   onSelect={() => this.props.onTaskSelect(task)}/>);

        return (
            <ListContainer>
                {tasks}
            </ListContainer>
        );
    }

    render() {

        return (
            <div className="base-row">
                <TasksMenuHeader mission={this.props.mission}/>
                <div className="row tasks-row">
                    <div className="col-md-8">
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
                            <div className="text-right">
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
