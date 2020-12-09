import React from "react"
import BlackBackground from "../../components/BlackBackground";
import posed from 'react-pose';
import TasksRepository from "../../logic/repositories/TasksRepository";
import Loading from "../../components/Loading";
import ItemRepository from "../../logic/repositories/ItemRepository";
import SubmitButton from "../items/components/SubmitButton";
import ItemForm from "../items/ItemForm";
import SurveyManager from "../../logic/SurveyManager";


const Modal = posed.div({
    open: {
        opacity: 1.0,
        x: "-50%",
        y: "-45%"
    },
    closed: {
        opacity: 0,
        x: "-50%",
        y: "-35%"
    }
});

export default class SurveyPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: null,
            taskId: null,
            task: null,
            loading: true,
            feedback: null,
            annotation: null,
            metadata: {},
            instruction: false,
            confirmation: false,
        };

        this.onClose = this.onClose.bind(this);
        this.setupTask = this.setupTask.bind(this);
        this.onAnnotationPost = this.onAnnotationPost.bind(this);
        this.onFeedbackAccept = this.onFeedbackAccept.bind(this);
    }

    setupTask(taskId) {
        this.setState({
            taskId: taskId,
        });
    }

    onClose() {
        this.setState({
            taskId: null,
            task: null,
            item: null
        });
    }

    componentDidMount() {
        this.checkState();
        SurveyManager.addSurveyChangeHandler(this.setupTask);
    }

    componentWillUnmount() {
        SurveyManager.removeSurveyChangeHandler(this.setupTask);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.taskId !== prevState.taskId ||
            this.state.task !== prevState.task) {
            this.checkState();
        }
    }

    checkState() {
        if (!this.state.taskId)
            return;

        if (this.state.task === null) {
            TasksRepository.get(this.state.taskId).then((task) => {
                this.setState({
                    task: task
                });
            });
        } else {
            this.getFirstItem();
        }
    }

    onNoItems() {
        this.onClose();
    }

    getFirstItem() {
        let task = this.state.task;
        ItemRepository.getFirstItem(task.id)
            .then((item) => {
                if (item == null)
                    this.onNoItems();
                else
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
                if (item == null)
                    this.onNoItems();
                else
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
        this.onFeedbackAccept();
    }

    onFeedbackAccept() {
        const result = { confirmation: false };
        if (this.state.feedback)
            result['feedback'] = null;

        this.setState(result);
        this.getNextItem();
    }

    render() {
        let isOpen = this.state.item !== null;

        let itemForm = null;

        if (!this.state.loading && this.state.item) {
            itemForm = <ItemForm metadata={this.state.task.metadata}
                item={this.state.item}
                onAnnotationPost={this.onAnnotationPost}
                submitButton={SubmitButton}
                itemPanelGroupClass="item-panel-group-override"
                skipButton={null}/>
        }

        return (
            <div className="modal-base">
                <BlackBackground className="black-background"
                                 style={{pointerEvents: isOpen ? "auto" : "none"}}
                                 pose={isOpen ? 'open' : 'closed'}
                                 onClick={this.onClose}/>
                <Modal className="modal-window card-3-static"
                       pose={isOpen ? 'open' : 'closed'}
                       style={{
                           pointerEvents: isOpen ? "auto" : "none",
                           padding: "40px 40px 10px 40px",
                           minWidth: "300px",
                           minHeight: "300px"
                       }}>
                    {itemForm}
                </Modal>
            </div>
        );
    }
}

