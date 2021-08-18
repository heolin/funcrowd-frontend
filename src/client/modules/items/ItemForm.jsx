import React from "react"
import ComponentsFactory from "./ComponentsFactory";
import SkippingPanel from "./SkippingPanel";
import ItemRepository from "../../logic/repositories/ItemRepository";
import Loading from "../../components/Loading";
import L from "../../logic/locatization/LocalizationManager";

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
        if (this.state.item.index !== props.item.index)
            this.setItemState(props.item);
    }

    setupItem(item) {
        if (item) {
            for (let i = 0; i < item.template.fields.length; i++) {
                let field = item.template.fields[i];
                let value = JSON.stringify(this.props.currentAnnotation.data[field.name]) || "";
                this.state[field.name] = value;
            }
        }
    }

    setItemState(item) {
        let itemState = {blocked: false, loading: false};

        for (let i = 0; i < item.template.fields.length; i++) {
            let field = item.template.fields[i];
            let value = item.data[field.name];
            if (value == null) {
                value = JSON.stringify(this.props.currentAnnotation.data[field.name]) || "";
            }

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
                let value = this.state[field.name];
                if (value)
                    value = JSON.parse(value);
                if (!value) {
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
        this.setState({blocked: true, loading: true});

        ItemRepository.postAnnotation(item.id, payload)
            .then((annotationResponse) => {
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

    createGroup(item, groupFields, index) {

        let fields = [];
        groupFields.forEach((fieldName) => {
            if (fieldName in item.templateFields) {
                let field = item.templateFields[fieldName];
                let skip = !field.editable && !this.state[field.name];

                if (!skip) {
                    let component = factory.create(field.widget,
                        field.name,
                        field.label,
                        this.state[field.name],
                        item.data[field.data_source],
                        field.required,
                        this.state.blocked,
                        this.handleChange);
                    fields.push(component);
                }
            }
        });
        if (fields.length > 0) {
            let itemPanelGroupClass = this.props.itemPanelGroupClass || "item-panel-group";
            return (
                <div className={itemPanelGroupClass} key={"group-" + index}>
                    {fields}
                </div>
            );
        }
    }

    render() {
        if (this.state.loading)
            return <Loading/>;

        let SubmitButton = this.props.submitButton;
        let SkipButton = this.props.skipButton;

        let item = this.props.item;
        let metadata = this.props.metadata;

        let groups = metadata.groups ||
            [item.template.fields.map(field => field.name)];

        let allowSkip = metadata.allowSkip === true;
        let skipButton = null;
        if (allowSkip)
            skipButton = <SkipButton onClick={this.skipItem}
                                     style={{ width: "80px"}}>{L.labels.skip}</SkipButton>;

        let fieldGroups = groups.map((groupFields, index) =>
            this.createGroup(item, groupFields, index)
        );

        let skipping = null;
        if (this.state.skipping)
            skipping = <SkippingPanel onAccept={this.onSkipAccept}
                                      onCancel={this.onSkipCancel}/>;

        return (
            <form className="item-form" onSubmit={this.handleSubmit}>
                {skipping}
                {fieldGroups}
                <div className="item-form-buttons">
                    {skipButton}
                    <SubmitButton type="submit"
                            disabled={!this.validateForm()}
                            style={{width: "160px"}}>{L.labels.submit}</SubmitButton>
                </div>
            </form>
        );
    }
}
