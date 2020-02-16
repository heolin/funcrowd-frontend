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
import UserManager from "../../logic/UserManager";
import {Footer} from "../../Footer";
import AchievementsManager from "../../logic/AchievementsManager";

export default class ItemPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            exp: null,
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
        window.scrollTo(0, 0);
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
            window.scrollTo(0, 0);
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

    startNextBounty() {
        let bountyId = this.props.match.params.id;
        this.setState({
            loading: true
        });
        BountyRepository.start(bountyId).then((bounty) => {
            this.props.onBountySelect(bounty);
        });
    }

    onNoItems() {
        let metadata = this.state.task.metadata;
        if (metadata.redirectOnNoItems === true)
            this.props.history.push('/mission/'+this.state.task.mission_id+'/tasks');
    }

    getFirstItem() {
        let task = this.props.task;
        ItemRepository.getFirstItem(task.id)
            .then((item) => {
                if (item == null)
                    this.onNoItems();

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
                console.log('get next');
                console.log(item);
                console.log(this.state.item);
                if (item == null)
                    this.onNoItems();

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
        UserManager.update();
        AchievementsManager.checkToasts();

        const lastPageOnlyFeedback =
            this.state.task.metadata.lastPageOnlyFeedback === true;

        if (lastPageOnlyFeedback === false ||
            annotationResponse.isLastItem) {

            let feedback = null;
            if (ConfigManager.config.showFeedback) {
                feedback = annotationResponse.annotation.feedback;
            }
            this.setState({
                annotation: annotationResponse.annotation,
                exp: annotationResponse.exp,
                feedback: feedback,
                confirmation: true
            });
        } else {
            this.onFeedbackAccept();
        }

        window.scrollTo(0, 0);
    }

    onFeedbackAccept() {
        const result = { confirmation: false };
        if (this.state.feedback)
            result['feedback'] = null;

        this.setState(result);
        this.getNextItem();
    }

    checkInstruction() {
        if (localStorage.getItem("FUNCROWD_INSTRUCTION_TASK"+this.state.task.id) !== "true")
            this.showInstruction();
    }

    showInstruction() {
        if (this.state.task.instruction) {
            this.setState({instruction: true});
            localStorage.setItem("FUNCROWD_INSTRUCTION_TASK"+this.state.task.id, "true");
        }
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
            let instructionButton = null;

            if (this.state.task.instruction)
                instructionButton = (
                    <div style={{marginBottom: "35px"}}>
                        <button className="btn btn-default info-button"
                            onClick={this.showInstruction}>
                            <Icon icon={info} size={24}/>
                        </button>
                    </div>
                );

            itemForm = (
                <div className="col-sm-12 item-panel">
                        {instructionButton}

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
            <div className="container-fluid base-row">
                {header}
                <InstructionPanel isOpen={this.state.item && this.state.instruction}
                                  task={this.props.task}
                                  onClose={this.onInstructionClose}/>

                <FeedbackPanel isOpen={this.state.item && this.state.confirmation}
                               onAccept={this.onFeedbackAccept}
                               exp={this.state.exp}
                               task={this.state.task}
                               annotation={this.state.annotation}/>

                <div className="container">
                    <div className="row">
                        {bounty}
                        {itemForm}
                        {noitems}
                    </div>
                </div>
            </div>
        );
    }
}
