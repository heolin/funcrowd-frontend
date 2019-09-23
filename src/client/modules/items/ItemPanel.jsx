import React from "react"
import ItemForm from "./ItemForm";
import FeedbackPanel from "../feedback/FeedbackPanel";
import InstructionPanel from "../instruction/InstructionPanel";
import TasksRepository from "../../logic/repositories/TasksRepository";
import BountyRepository from "../../logic/repositories/BountyRepository";
import BountyStatus from "../bounty/BountyStatus";
import { Icon } from 'react-icons-kit'
import {info} from 'react-icons-kit/fa/info'
import ConfirmationPanel from "./ConfirmationPanel";
import ConfigManager from "../../logic/config/ConfigManager";
import ItemRepository from "../../logic/repositories/ItemRepository";
import NoItemsPanel from "./NoItemsPanel";
import SkipButton from "./components/SkipButton";
import SubmitButton from "./components/SubmitButton";
import ItemHeader from "./ItemHeader";

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
                default:
                    break;
            }
        } else {
            this.getFirstItem();
            this.checkInstruction();
        }
    }

    getFirstItem() {
        let task = this.props.task;
        ItemRepository.getFirstItem(task.id)
            .then((item) => {
                this.setState({
                    loading: false,
                    item: item
                });
            })
            .catch((error) => {
                this.setState({ loading: false});
                console.log(error)
            });
    }

    getNextItem() {
        let item = this.state.item;
        ItemRepository.getNextItem(item.id)
            .then((item) => {
                this.setState({
                    loading: false,
                    item: item
                });
            })
            .catch((error) => {
                this.setState({ loading: false});
                console.log(error)
            });
    }

    onAnnotationPost(annotationResponse) {
        let feedback = null;
        if (ConfigManager.config.showFeedback) {
            feedback = annotationResponse.annotation.feedback;
        }

        if (feedback) {
            this.setState({
                annotation: annotationResponse.annotation,
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

        console.log("no witam");
        let itemForm = null;
        let feedback = null;
        let confirmation = null;
        let bounty = null;
        let itemId = null;
        let noitems = null;

        if (this.state.item) {
            itemId = this.state.item.id;

            itemForm = (
                <div className="col-sm-12 item-panel">
                    <h3 style={{display: "inline-block"}}>Item #{this.state.item.id}</h3>
                    <button className="btn btn-default info-button"
                            onClick={this.showInstruction}>
                        <Icon icon={info} size={24}/>
                    </button>

                    <ItemForm task={this.props.task}
                              item={this.state.item}
                              onAnnotationPost={this.onAnnotationPost}
                              submitButton={SubmitButton}
                              skipButton={SkipButton}/>
                </div>
            );

            if (this.state.feedback)
                feedback = <FeedbackPanel feedback={this.state.feedback}
                                          onAccept={this.onFeedbackAccept}
                                          annotation={this.state.annotation}/>;

            if (this.state.confirmation)
                confirmation = <ConfirmationPanel onClose={this.onConfirmationClose}/>;
        } else {
            noitems = <NoItemsPanel/>;
        }

        if (this.state.bounty) {
            bounty = <BountyStatus itemId={itemId}
                                   onBountyFinished={this.onBountyFinished}
                                   bountyId={this.state.bounty.id}/>;

            if (this.state.bounty.userBounty == null)
                itemForm = null;
            if (this.state.bounty.userBounty && this.state.bounty.userBounty.is_closed)
                itemForm = null;
        }

        return (
            <div className="container base-row">
                <ItemHeader task={this.state.task}/>
                <InstructionPanel isOpen={this.state.item && this.state.instruction}
                                  task={this.props.task}
                                  onClose={this.onInstructionClose}/>
                <div className="row">
                    {confirmation}
                    {feedback}
                    {bounty}
                    {itemForm}
                    {noitems}
                </div>
            </div>
        );
    }
}
