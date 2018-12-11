import React from "react"
import axios from 'axios';
import ItemForm from "./items/ItemForm";
import SessionManager from "../logic/user/SessionManager";
import FeedbackPanel from "./feedback/FeedbackPanel";


export default class ItemPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            item: null,
            loading: true,
            feedback: null,
        };

        this.onAnnotationPost = this.onAnnotationPost.bind(this);
        this.onFeedbackAccept = this.onFeedbackAccept.bind(this);
    }

    componentDidMount() {
        this.getFirstItem();
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
        let feedback = response.data.annotation.feedback;
        if (feedback) {
            this.setState({feedback: feedback});
        } else {
            this.onFeedbackAccept();
        }
    }

    onFeedbackAccept() {
        if (this.state.feedback)
            this.setState({feedback: null});
        this.getNextItem();
    }



    render() {
        if (this.state.loading) {
            return (
                <div>Loading</div>
            );
        }

        let feedback = null;
        if (this.state.feedback)
            feedback = <FeedbackPanel feedback={this.state.feedback} onAccept={this.onFeedbackAccept}/>;

        return (
            <div className="row baserow">
                {feedback}
                <div className="col-sm-12 item-panel card-1-static">
                    <h3>Item</h3>
                    <ItemForm item={this.state.item}
                              onAnnotationPost={this.onAnnotationPost}/>
                </div>
            </div>
        );
    }
}
