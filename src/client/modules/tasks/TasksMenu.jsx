import React from "react"
import TasksRepository from "../../logic/repositories/TasksRepository";
import TaskCard from "./TaskCard";
import MissionRepository from "../../logic/repositories/MissionRepository";


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
            <div className="row">
                {tasks}
            </div>
        );
    }

    render() {
        return (
            <div className="row base-row">
                <div className="col-sm-12 tasks-header-bar">
                    <h3>Taski</h3>
                </div>
                <div className="col-sm-12">
                    {this.getCardsPanel()}
                </div>
            </div>
        );
    }
}
