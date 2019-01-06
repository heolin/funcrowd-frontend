import React from "react"
import ComponentsFactory from "./ComponentsFactory";
import SkippingPanel from "./SkippingPanel";
import axios from 'axios';
import SessionManager from "../../logic/SessionManager";
import ItemRepository from "../../logic/repositories/ItemRepository";

let factory = new ComponentsFactory();

export default class ItemForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            blocked: false,
            skipping: false
        };

        this.setupItem(props.item);

        this.validateForm = this.validateForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.skipItem = this.skipItem.bind(this);
        this.onSkipAccept = this.onSkipAccept.bind(this);
        this.onSkipCancel = this.onSkipCancel.bind(this);
    }

    componentDidMount() {
        this.setItemState(this.props.item);
    }

    componentWillReceiveProps(props) {
        this.setItemState(props.item);
    }

    setupItem(item) {
        if (item) {
            for (let i = 0; i < item.template.fields.length; i++) {
                let field = item.template.fields[i];
                this.state[field.name] = "";
            }
        }
    }

    setItemState(item) {
        let itemState = {blocked: false, loading: false};

        for (let i = 0; i < item.template.fields.length; i++) {
            let field = item.template.fields[i];
            let value = item.data[field.name];
            if (value == null)
                value = "";
            itemState[field.name] = value;
        }
        itemState['item'] = item;
        this.setState(itemState);
    }


    validateForm() {
        let blocked = this.state.blocked;
        let item = this.props.item;
        for (let i = 0; i < item.template.fields.length; i++) {
            let field = item.template.fields[i];
            if (field.required && field.editable) {
                if (!this.state[field.name]) {
                    return false
                }
            }
        }
        return !blocked;
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    getAnnotationData() {
        let item = this.props.item;
        let result = {};
        for (let i = 0; i < item.template.fields.length; i++) {
            let field = item.template.fields[i];
            if (field.editable) {
                if (this.state[field.name])
                    result[field.name] = this.state[field.name];
                else
                    result[field.name] = "";
            }
        }
        return result;
    }

    handleSubmit(event, skip=false) {
        if (event)
            event.preventDefault();

        let item = this.props.item;
        let payload = {data: this.getAnnotationData(), skipped: skip};

        ItemRepository.postAnnotation(item.id, payload)
            .then((annotationResponse) => {
                this.setState({blocked: true, loading: true});
                this.props.onAnnotationPost(annotationResponse);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    skipItem(event) {
        event.preventDefault();
        this.setState({skipping: true});
    }

    onSkipAccept() {
        this.setState({skipping: false});
        this.handleSubmit(null, true);
    }

    onSkipCancel() {
        this.setState({skipping: false});
    }


    render() {
        if (this.state.loading) {
            return (
                <div>Loading</div>
            );
        }

        let item = this.props.item;
        let fields = item.template.fields.map((field) =>
            factory.create(field.widget,
                field.name,
                this.state[field.name],
                item.data[field.data_source],
                field.required,
                this.state.blocked,
                this.handleChange));

        let skipping = null;
        if (this.state.skipping)
            skipping = <SkippingPanel onAccept={this.onSkipAccept}
                                      onCancel={this.onSkipCancel}/>;

        return (
            <form onSubmit={this.handleSubmit}>
                {skipping}
                {fields}
                <div style={{textAlign: "right"}}>
                    <button onClick={this.skipItem}
                            style={{marginRight: "10px", width: "80px"}}
                            className="btn btn-default">Skip</button>
                    <button type="submit"
                            disabled={!this.validateForm()}
                            style={{width: "120px"}}
                            className="btn btn-green">Submit</button>
                </div>
            </form>
        );
    }
}
