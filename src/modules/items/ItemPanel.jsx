import React from "react"
import axios from 'axios';
import ItemForm from "./ItemForm";
import SessionManager from "../../logic/SessionManager";
import FeedbackPanel from "../feedback/FeedbackPanel";
import InstructionPanel from "../instruction/InstructionPanel";
import TasksRepository from "../../logic/repositories/TasksRepository";
import BountyRepository from "../../logic/repositories/BountyRepository";
import BountyStatus from "../bounty/BountyStatus";
import { Icon } from 'react-icons-kit'
import {info} from 'react-icons-kit/fa/info'
import ConfirmationPanel from "./ConfirmationPanel";
import ConfigManager from "../../logic/config/ConfigManager";

export default class ItemPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            item: null,
            task: null,
            bounty: null,
            loading: true,
            feedback: null,
            annotation: null,
            instruction: false,
            confirmation: false,
        };

        this.onAnnotationPost = this.onAnnotationPost.bind(this);
        this.onFeedbackAccept = this.onFeedbackAccept.bind(this);
        this.showInstruction = this.showInstruction.bind(this);
        this.onInstructionClose = this.onInstructionClose.bind(this);
        this.onConfirmationClose = this.onConfirmationClose.bind(this);
        this.onBountyFinished = this.onBountyFinished.bind(this);
    }

    componentDidMount() {
        this.checkState();
    }

    static getDerivedStateFromProps(props, state) {
        if (props.task !== state.task) {
            return {
                task: props.task,
            };
        }
        if (props.bounty !== state.bounty) {
            return {
                bounty: props.bounty,
            };
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.task !== prevState.task) {
            this.checkState();
            this.checkInstruction();
        }
    }

    checkState() {
        if (this.props.task === null) {
            switch (this.props.match.path) {
                case "/task/:id":
                    let taskId = this.props.match.params.id;
                    TasksRepository.get(taskId).then((task) => {
                        this.props.onTaskSelect(task);
                    });
                    break;
                case "/bounty/:id":
                    let bountyId = this.props.match.params.id;
                    BountyRepository.get(bountyId).then((bounty) => {
                        this.props.onBountySelect(bounty);
                    });
                    break;
            }
        } else {
            this.getFirstItem();
            this.checkInstruction();
        }
    }

    getFirstItem() {
        let task = this.props.task;
        axios.get(process.env.REACT_APP_BACKEND_URL+'/api/v1/tasks/'+task.id+'/next_item', SessionManager.config)
            .then((response) => {
                this.setState({
                    loading: false,
                    item: response.data
                });
            })
            .catch((error) => {
                this.setState({ loading: false});
                console.log(error)
            });
    }

    getNextItem() {
        let item = this.state.item;
        axios.get(process.env.REACT_APP_BACKEND_URL+'/api/v1/items/'+item.id+'/next_item', SessionManager.config)
            .then((response) => {
                this.setState({
                    loading: false,
                    item: response.data
                });
            })
            .catch((error) => {
                this.setState({ loading: false});
                console.log(error)
            });
    }

    onAnnotationPost(response) {
        let feedback = null;
        if (ConfigManager.config.showFeedback) {
            feedback = response.data.annotation.feedback;
        }

        if (feedback) {
            this.setState({
                annotation: response.data.annotation,
                feedback: feedback});
        } else {
            this.showConfirmation();
        }
    }

    onFeedbackAccept() {
        if (this.state.feedback)
            this.setState({feedback: null});
        this.getNextItem();
    }

    showConfirmation() {
        this.setState({confirmation: true});
    }

    onConfirmationClose() {
        if (this.state.confirmation)
            this.setState({confirmation: false});
        this.getNextItem();
    }

    checkInstruction() {
        if (localStorage.getItem("FUNCROWD_INSTRUCTION_TASK"+this.state.task.id) !== "true")
            this.showInstruction();
    }

    showInstruction() {
        this.setState({instruction: true});
        localStorage.setItem("FUNCROWD_INSTRUCTION_TASK"+this.state.task.id, "true");
    }

    onInstructionClose() {
        this.setState({instruction: false});
    }

    onBountyFinished() {
        let bounty = this.state.bounty;
        if (bounty) {
            bounty.userBounty.status = "FINISHED";
            this.setState({bounty: bounty});
        }
    }

    render() {
        if (this.state.loading) {
            return (
                <div>Loading</div>
            );
        }

        let itemForm = (

            <div className="col-sm-12 item-panel card-1-static">
                <h3 style={{display: "inline-block"}}>Item #{this.state.item.id}</h3>
                <button className="btn btn-default info-button"
                        onClick={this.showInstruction}>
                    <Icon icon={info} size={24}/>
                </button>

                <ItemForm item={this.state.item} onAnnotationPost={this.onAnnotationPost}/>
            </div>
        );

        let feedback = null;
        if (this.state.feedback)
            feedback = <FeedbackPanel feedback={this.state.feedback}
                                      onAccept={this.onFeedbackAccept}
                                      annotation={this.state.annotation}/>;

        let confirmation = null;
        if (this.state.confirmation)
            confirmation = <ConfirmationPanel onClose={this.onConfirmationClose}/>;

        let instruction = null;
        if (this.state.instruction)
            instruction = <InstructionPanel task={this.props.task} onClose={this.onInstructionClose}/>;

        let bounty = null;
        if (this.state.bounty) {
            bounty = <BountyStatus itemId={this.state.item.id}
                                   onBountyFinished={this.onBountyFinished}
                                   bountyId={this.state.bounty.id}/>;

            if (this.state.bounty.userBounty == null)
                itemForm = null;
            if (this.state.bounty.userBounty && this.state.bounty.userBounty.is_closed)
                itemForm = null;
        }
;

        return (
            <div className="row base-row">
                {instruction}
                {confirmation}
                {feedback}
                {bounty}
                {itemForm}
            </div>
        );
    }
}
