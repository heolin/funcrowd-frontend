import React from "react"
import ItemForm from "../items/ItemForm";
import FeedbackPanel from "../feedback/FeedbackPanel";
import InstructionPanel from "../instruction/InstructionPanel";
import BountyRepository from "../../logic/repositories/BountyRepository";
import {Icon} from 'react-icons-kit'
import {info} from 'react-icons-kit/fa/info'
import NoItemsPanel from "../items/NoItemsPanel";
import SkipButton from "../items/components/SkipButton";
import SubmitButton from "../items/components/SubmitButton";
import BountyHeader from "../bounty/BountyHeader";
import Loading from "../../components/Loading";
import ItemPanel from "../items/ItemPanel";


export default class BountyItemPanel extends ItemPanel {

    constructor(props) {
        super(props);
        this.state = {
            item: null,
            task: null,
            userBounty: null,
            loading: true,
            loadingStart: false,
            feedback: null,
            annotation: null,
            instruction: false,
            confirmation: false,
            notFinishedPanel: false,
            previousCodesPanel: false,
            metadata: {},
        };

        this.onAnnotationPost = this.onAnnotationPost.bind(this);
        this.onFeedbackAccept = this.onFeedbackAccept.bind(this);
        this.showInstruction = this.showInstruction.bind(this);
        this.onInstructionClose = this.onInstructionClose.bind(this);
        this.onBountyFinished = this.onBountyFinished.bind(this);
        this.startBounty = this.startBounty.bind(this);
        this.onUpdateStatus = this.onUpdateStatus.bind(this);
    }

    componentDidMount() {
        this.checkState();
    }

    static getDerivedStateFromProps(props, state) {
        if (props.userBounty !== state.userBounty) {
            return {
                userBounty: props.userBounty,
                metadata: props.userBounty.bounty.metadata,
            };
        }

        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.userBounty !== prevState.userBounty) {
            this.checkState();
            this.checkInstruction();
        }
    }

    checkInstruction() {
        if (localStorage.getItem("FUNCROWD_INSTRUCTION_BOUNTY"+this.state.userBounty.bounty.id) !== "true")
            this.showInstruction();
    }

    showInstruction() {
        if (this.state.userBounty.bounty.instruction) {
            this.setState({instruction: true});
            localStorage.setItem("FUNCROWD_INSTRUCTION_BOUNTY"+this.state.userBounty.bounty.id, "true");
        }
    }

    getFirstItem() {
        return this.getNextItem();
    }

    getNextItem() {
        BountyRepository.getNextItem(this.state.userBounty.bounty.id)
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

    checkState() {
        if (this.props.userBounty == null) {
            if (this.props.match.path === "/bounty/:id") {
                let bountyId = this.props.match.params.id;
                BountyRepository.get(bountyId).then((bounty) => {
                    this.props.onBountySelect(bounty);
                });
            }
        } else {
            if (this.state.userBounty) {
                this.getFirstItem();
                this.checkInstruction();
            } else {
                this.setState({
                    userBounty: this.props.userBounty
                });
            }
        }
    }

    startBounty() {
        let bountyId = this.props.match.params.id;
        this.setState({
            loading: true,
            notFinishedPanel: false
        });
        BountyRepository.start(bountyId).then((userBounty) => {
            this.setState({
                loadingStart: false
            });
            this.props.onBountySelect(userBounty);
        });
    }

    onBountyFinished() {
        let userBounty = this.state.userBounty;
        if (userBounty) {
            userBounty.status = "FINISHED";
            this.setState({userBounty: userBounty});
        }
    }

    onUpdateStatus(userBounty) {
        this.setState({
            userBounty: userBounty
        });
    }

    render() {
        if (this.state.loading)
            return <Loading/>;

        let itemForm = null;
        let bounty = null;
        let itemId = null;

        if (this.state.userBounty && !this.state.userBounty.isClosed) {
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

                        <ItemForm metadata={this.state.metadata}
                                  item={this.state.item}
                                  onAnnotationPost={this.onAnnotationPost}
                                  submitButton={SubmitButton}
                                  skipButton={SkipButton}/>
                    </div>
                );
            }
        }

        let bountyHeader = null;

        if (this.state.userBounty)
            bountyHeader =  <BountyHeader userBounty={this.state.userBounty}
                                          itemId={itemId}
                                          onUpdateStatus={this.onUpdateStatus}
                                          showPreviousCodes={this.showPreviousCodes}
                                          onBountyFinished={this.onBountyFinished}/>;

        return (
            <div className="container-fluid base-row">
                {bountyHeader}

                <InstructionPanel isOpen={this.state.item && this.state.instruction}
                                  task={this.state.userBounty.bounty}
                                  onClose={this.onInstructionClose}/>

                <FeedbackPanel isOpen={this.state.item && this.state.confirmation}
                               onAccept={this.onFeedbackAccept}
                               annotation={this.state.annotation}/>

                <div className="container">
                    <div className="row">
                        {bounty}
                        {itemForm}
                    </div>
                </div>
            </div>
        );
    }
}
