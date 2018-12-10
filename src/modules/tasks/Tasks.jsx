import React from "react"
import axios from 'axios';
import SessionManager from "../../logic/user/SessionManager";
import TaskCard from "./TaskCard";


export default class Tasks extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: null,
            loading: true,
        }
    }

    componentDidMount() {
        let mission = this.props.mission;
        axios.get('http://localhost:8888/api/v1/missions/' + mission.id + '/tasks', SessionManager.config)
            .then((response) => {
                this.setState({
                    loading: false,
                    tasks: response.data
                });
            })
            .catch((error) => {
                this.setState({ loading: false});
                console.log(error)
            });
    }

    onSelect() {
    }

    render() {
        if (this.state.loading) {
            return (
                <div>Loading</div>
            )
        }
        if (this.state.tasks == null)
            return null;

        let tasks = this.state.tasks.map(
            (task, i) => <TaskCard key={i} task={task}
                                   onSelect={() => this.props.onSelect(task)}/>);

        return (
            <div className="row">
                {tasks}
            </div>
        );
    }
}
