import React from "react"
import queryString from 'query-string';
import ItemForm from "../items/ItemForm";
import FeedbackPanel from "../feedback/FeedbackPanel";
import InstructionPanel from "../instruction/InstructionPanel";
import BountyRepository from "../../logic/repositories/BountyRepository";
import BountyStatus from "../bounty/BountyStatus";
import { Icon } from 'react-icons-kit'
import {info} from 'react-icons-kit/fa/info'
import ConfigManager from "../../logic/config/ConfigManager";
import ItemRepository from "../../logic/repositories/ItemRepository";
import NoItemsPanel from "../items/NoItemsPanel";
import SkipButton from "../items/components/SkipButton";
import SubmitButton from "../items/components/SubmitButton";
import BountyHeader from "../bounty/BountyHeader";
import Loading from "../../components/Loading";
import UserManager from "../../logic/UserManager";
import StartBountyPanel from "./StartBountyPanel";
import bounty from "../../resources/texts/bounty";
import ItemPanel from "../items/ItemPanel";
import RestartBountyPanel from "./RestartBountyPanel";
import NotFinishedBountyPanel from "./NotFinishedBountyPanel";
import RewardCodesListPanel from "./RewardCodesListPanel";
import {Footer} from "../../Footer";
import SessionManager from "../../logic/SessionManager";


export default class BountyItemPanel extends ItemPanel {

    constructor(props) {
        super(props);
        this.state = {
            item: null,
            task: null,
            bounty: null,
            loading: true,
            loadingStart: false,
            feedback: null,
            annotation: null,
            instruction: false,
            confirmation: false,
            startPanel: false,
            restartPanel: false,
            notFinishedPanel: false,
            previousCodesPanel: false,
        };

        this.onAnnotationPost = this.onAnnotationPost.bind(this);
        this.onFeedbackAccept = this.onFeedbackAccept.bind(this);
        this.showInstruction = this.showInstruction.bind(this);
        this.onInstructionClose = this.onInstructionClose.bind(this);
        this.onBountyFinished = this.onBountyFinished.bind(this);
        this.startBounty = this.startBounty.bind(this);
        this.closeNotFinishedPanel = this.closeNotFinishedPanel.bind(this);
        this.showPreviousCodes = this.showPreviousCodes.bind(this);
        this.closePreviousCodes = this.closePreviousCodes.bind(this);
        this.onUpdateStatus = this.onUpdateStatus.bind(this);
    }

    componentDidMount() {
        this.checkState();
    }

    static getDerivedStateFromProps(props, state) {
        if (props.task !== state.task || props.task !== state.bounty) {
            return {
                task: props.task,
                bounty: props.bounty,
            };
        }

        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.bounty !== prevState.bounty ||
            this.state.startPanel !== prevState.startPanel) {
            this.checkState();
            this.checkInstruction();
        }
    }

    checkState() {
        if (this.props.bounty == null) {
            if (this.props.match.path === "/bounty/:id") {
                let bountyId = this.props.match.params.id;
                BountyRepository.get(bountyId).then((bounty) => {
                    this.props.onBountySelect(bounty);
                });
            }
        } else {
            if (this.state.bounty) {
                if (this.state.bounty.userBounty) {
                    this.getFirstItem();
                    this.checkInstruction();
                    this.checkRestartBounty();
                } else if (!this.state.loadingStart) {
                    SessionManager.cache['action'] = null;
                    this.setState({
                        loading: false,
                        startPanel: true
                    });
                }
            } else {
                this.setState({
                    bounty: this.props.bounty
                });
            }
        }
    }

    startBounty() {
        let bountyId = this.props.match.params.id;
        this.setState({
            loading: true,
            startPanel: false,
            loadingStart: true,
            restartPanel: false,
            notFinishedPanel: false
        });
        BountyRepository.start(bountyId).then((bounty) => {
            this.setState({
                loadingStart: false
            });
            this.props.onBountySelect(bounty);
        });
    }

    onBountyFinished() {
        let bounty = this.state.bounty;
        if (bounty) {
            bounty.userBounty.status = "FINISHED";
            this.setState({bounty: bounty});
        }
    }

    closeNotFinishedPanel() {
        this.setState({
            notFinishedPanel: false,
        })
    }

    checkRestartBounty() {
        let action = SessionManager.cache['action'];
        if (action) {
            if (action === 'startBounty') {
                if (this.state.bounty.userBounty.status === "FINISHED") {
                    this.setState({
                        restartPanel: true
                    })
                } else {
                    this.setState({
                        notFinishedPanel: true,
                    });
                }
                SessionManager.cache['action'] = null;
            }
        }
    }

    showPreviousCodes() {
        this.setState({
            previousCodesPanel: true
        });
    }

    closePreviousCodes() {
        this.setState({
            previousCodesPanel: false
        });
    }

    onUpdateStatus(userBounty) {
        let bounty = this.state.bounty;
        bounty.userBounty = userBounty;
        this.setState({
            bounty: bounty
        });
    }

    render() {
        if (this.state.loading)
            return <Loading/>;

        let itemForm = null;
        let bounty = null;
        let itemId = null;
        let noitems = null;

        if (!this.state.bounty.closed) {
            if (this.state.bounty.userBounty && !this.state.bounty.userBounty.isClosed) {
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
            }
        }

        let bountyHeader = null;

        if (this.state.bounty.userBounty)
            bountyHeader =  <BountyHeader bounty={this.state.bounty}
                                          itemId={itemId}
                                          onUpdateStatus={this.onUpdateStatus}
                                          showPreviousCodes={this.showPreviousCodes}
                                          onBountyFinished={this.onBountyFinished}/>;


        return (
            <div className="container-fluid base-row">
                {bountyHeader}

                <InstructionPanel isOpen={this.state.item && this.state.instruction}
                                  task={this.props.task}
                                  onClose={this.onInstructionClose}/>

                <FeedbackPanel isOpen={this.state.item && this.state.confirmation}
                               onAccept={this.onFeedbackAccept}
                               annotation={this.state.annotation}/>

                <StartBountyPanel bounty={this.props.bounty}
                                  isOpen={this.state.startPanel}
                                  startBounty={this.startBounty}/>

                <RestartBountyPanel bounty={this.props.bounty}
                                    isOpen={this.state.restartPanel}
                                    startBounty={this.startBounty}/>

                <NotFinishedBountyPanel bounty={this.props.bounty}
                                        isOpen={this.state.notFinishedPanel}
                                        onClose={this.closeNotFinishedPanel}/>

                <RewardCodesListPanel bounty={this.state.bounty}
                                      isOpen={this.state.previousCodesPanel}
                                      onClose={this.closePreviousCodes}/>
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
