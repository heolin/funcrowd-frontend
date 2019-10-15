import React from "react"
import ReactTooltip from 'react-tooltip'
import Selection from "../../../utils/Selection";


class Tag {
    constructor(start, end, tag, text) {
        this.start = start;
        this.end = end;
        this.tag = tag;
        this.text = text;
        this._clean();
    }

    _clean() {
        let leftOffset = this.text.length;
        let rightOffset = 0;
        for (let i = 0; i < this.text.length; i++)
            if (this.text[i] !== " ") {
                if (i < leftOffset)
                    leftOffset = i;
                if (i > leftOffset && i > rightOffset)
                    rightOffset = i;
            }
        rightOffset = this.text.length - rightOffset - 1;
        this.start = this.start + leftOffset;
        this.end = this.end - rightOffset;
        this.text = this.text.substr(leftOffset, this.text.length - (leftOffset + rightOffset))
    }
}



function onSelect() {
    alert("SELECT")
}


export default class TextTagField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTag: null,
            tags: [],
        };

        this.onTagClick = this.onTagClick.bind(this);
        this.onTagButtonClick = this.onTagButtonClick.bind(this);
    }

    onTagClick(index) {
        let tags = this.state.tags;
        tags.splice(index, 1);
        this.setState({
            tags: tags
        });
    }

    getSelectionText(start, end) {
        return this.props.source.text.substring(start, end);
    }

    onTagButtonClick(tag) {
        let element = document.getElementById(this.props.name+"_text");
        let selection = Selection.getRange(element);

        if (selection == null)
            return;

        let selectionText = this.getSelectionText(selection.start, selection.end);

        if (selectionText === "")
            return;

        if (this.checkTagsCollision(selection.start, selection.end))
            return;

        let tagElement = new Tag(selection.start, selection.end, tag, selectionText);

        this.addTag(tagElement);
    }

    checkTagsCollision(start, end) {
        let collision = false;
        this.state.tags.forEach((tag) => {
            if (tag.start <= end && tag.end >= start)
                collision = true;
        });
        return collision;
    }

    addTag(tag) {
        let tags = this.state.tags;

        let index = tags.length;
        for (let i = 0; i < tags.length; i++)
            if (tag.start < tags[i].start) {
                index = i;
                break;
            }

        tags.splice(index, 0, tag);
        this.setState({
            tags: tags
        });

        this.onChange();
    }

    onChange() {
        let event = {
            target: {
                id: this.props.name,
                value: JSON.stringify(this.state.tags)
            }
        };
        this.props.onChange(event);
    }

    getText() {
        let text = this.props.source.text;
        let elements = [];
        let lastIndex = 0;

        for (let i = 0; i < this.state.tags.length; i++) {
            let tag = this.state.tags[i];
            let colorIndex = this.props.source.tags.indexOf(tag.tag) + 1;

            if (lastIndex < tag.start)
                elements.push(
                    <span key={elements.length}>{text.substr(lastIndex, tag.start-lastIndex)}</span>
                );

            elements.push(
                <span key={elements.length}
                      className={"tagger-tag tag-color-" + colorIndex}
                      data-tip="tip"
                      id={i}
                      onClick={() => this.onTagClick(i)}>
                    {text.substr(tag.start, tag.end-tag.start)}
                </span>
            );

            lastIndex = tag.end;
        }

        if (lastIndex < text.length)
            elements.push(
                <span key={elements.length}>{text.substr(lastIndex, text.length-lastIndex)}</span>
            );

        return elements;
    }

    render() {
        let label;
        if (this.props.label)
            label = <label><strong>{this.props.label}</strong></label>;

        let tagsButtons = this.props.source.tags.map((tag) => {
            let colorIndex = this.props.source.tags.indexOf(tag) + 1;
            return (
                <div key={tag}
                     className={"btn tagger-button tagger-button-" + colorIndex}
                     onClick={() => this.onTagButtonClick(tag)}>
                    {tag}
                </div>
            );
        });

        return (
            <div className="form-group">
                {label}
                <div id={this.props.name+"_text"} onSelect={onSelect} className="tagger-text">
                    {this.getText()}
                </div>
                <div className="tagger-buttons">
                    {tagsButtons}
                </div>
            </div>
        );
    }
}
