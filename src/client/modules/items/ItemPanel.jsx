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
import BountyHeader from "../bounty/BountyHeader";
import Loading from "../../components/Loading";
import FeedbackTypes from "../feedback/FeedbackTypes";

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

        this.setState({
            annotation: annotationResponse.annotation,
            feedback: feedback,
            confirmation: true
        });
    }

    onFeedbackAccept() {
        if (this.state.feedback)
            this.setState({
                feedback: null,
            });
        this.setState({
            confirmation: false
        });
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
        if (this.state.loading)
            return <Loading/>;

        let itemForm = null;
        let bounty = null;
        let itemId = null;
        let noitems = null;
        let header = null;

        if (this.state.item) {
            itemId = this.state.item.id;

            itemForm = (
                <div className="col-sm-12 item-panel">
                    <div style={{marginBottom: "30px"}}>
                        <h3 style={{display: "inline-block"}}>Item #{this.state.item.id}</h3>
                        <button className="btn btn-default info-button"
                                onClick={this.showInstruction}>
                            <Icon icon={info} size={24}/>
                        </button>
                    </div>

                    <ItemForm task={this.props.task}
                              item={this.state.item}
                              onAnnotationPost={this.onAnnotationPost}
                              submitButton={SubmitButton}
                              skipButton={SkipButton}/>
                </div>
            );
        } else {
            noitems = <NoItemsPanel/>;
        }

        if (this.state.bounty) {
            if (this.state.bounty.userBounty == null)
                itemForm = null;
            if (this.state.bounty.userBounty && this.state.bounty.userBounty.is_closed)
                itemForm = null;

            header = <BountyHeader bounty={this.state.bounty}
                                   itemId={itemId}
                                   onBountyFinished={this.onBountyFinished}/>
        } else {
            header = <ItemHeader task={this.state.task}/>;
        }

        return (
            <div className="container base-row">
                {header}
                <InstructionPanel isOpen={this.state.item && this.state.instruction}
                                  task={this.props.task}
                                  onClose={this.onInstructionClose}/>

                <FeedbackPanel isOpen={this.state.item && this.state.confirmation}
                               onAccept={this.onFeedbackAccept}
                               type={FeedbackTypes.BINARY}
                               feedback={this.state.feedback}
                               annotation={this.state.annotation}/>

                <div className="row">
                    {bounty}
                    {itemForm}
                    {noitems}
                </div>
            </div>
        );
    }
}
