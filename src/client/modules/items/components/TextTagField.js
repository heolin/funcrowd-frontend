import React from "react"
import ReactTooltip from 'react-tooltip'


class Tag {
    constructor(start, end, tag, text, tokens) {
        this.start = start;
        this.end = end;
        this.tag = tag;
        this.text = text;
        this.tokens = tokens
    }
}


export default class TextTagField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            selectedTokens: []
        };

        this.onTagButtonClick = this.onTagButtonClick.bind(this);
        this.onTagSelect = this.onTagSelect.bind(this);
        this.onChange = this.onChange.bind(this);
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

    getTagFromToken(tokenId) {
        for (let i = 0; i < this.state.tags.length; i++) {
            let tag = this.state.tags[i];
            if (tag.tokens.indexOf(tokenId) >= 0) {
                return tag;
            }
        }
        return null;
    }

    getText() {
        let tokens = this.props.source.text.split(" ");

        let elements = [];
        for (let index = 0; index < tokens.length; index++) {
            let className = "";
            let text = "";

            let tag = this.getTagFromToken(index);
            if (tag) {
                let colorIndex = this.props.source.tags.indexOf(tag.tag) + 1;
                className = " tag-color-" + colorIndex;
                text = tag.text;
                index += tag.tokens.length-1;
            } else {
                if (this.state.selectedTokens.indexOf(index) > -1)
                    className = " tag-selected";
                text = tokens[index];
            }

            elements.push(
                <span key={elements.length}
                      className={"tagger-tag" + className}
                      id={index}
                      onClick={() => this.onTagSelect(index)}>
                    {text}
                </span>
            );
            elements.push(" ");
        }
        return elements;
    }

    onTagSelect(tagIndex) {
        let tag = this.getTagFromToken(tagIndex);
        if (tag) {
            let tags = this.state.tags;
            let index = tags.indexOf(tag);
            if (index > -1)
                tags.splice(index, 1);

            this.setState({
               tags: tags
            }, this.onChange);

        } else {
            let tags = this.state.selectedTokens;
            let index = tags.indexOf(tagIndex);
            if (index > -1) {
                if (tags.indexOf(tagIndex - 1) < 0 || tags.indexOf(tagIndex + 1) < 0) {
                    tags.splice(index, 1);
                }
            } else {
                if (tags.length > 0) {
                    if (tags.indexOf(tagIndex - 1) > -1 || tags.indexOf(tagIndex + 1) > -1) {
                        tags.push(tagIndex);
                    }
                } else {
                    tags.push(tagIndex);
                }
            }

            this.setState({
                selectedTokens: tags
            }, this.onChange);
        }
    }

    onTagButtonClick(tag) {
        let sourceText = this.props.source.text;
        let tokens = sourceText.split(" ");

        if (this.state.selectedTokens.length === 0)
            return;

        let tags = this.state.tags;

        let selectedTokens = this.state.selectedTokens.sort();
        let start = 0;

        for (let i = 0; i < selectedTokens[0]; i++)
            start += tokens[i].length;
        start += selectedTokens[0];

        let end = start;
        for (let i = 0; i < selectedTokens.length; i++)
            end += tokens[selectedTokens[i]].length;
        end += selectedTokens.length - 1;

        let text = sourceText.substr(start, end-start);
        tags.push(new Tag(start, end, tag, text, selectedTokens));

        this.setState({
            tags: tags,
            selectedTokens: []
        }, this.onChange);
    }

    render() {
        let label;
        if (this.props.label)
            label = <label><strong>{this.props.label}</strong></label>;

        let tagsButtons = this.props.source.tags.map((tag) => {
            let colorIndex = this.props.source.tags.indexOf(tag) + 1;

            let example = null;
            if ('examples' in this.props.source)
                example = "e.g. " + this.props.source.examples[tag];

            return (
                <div key={tag}
                     className={"btn tagger-button tagger-button-" + colorIndex}
                     data-tip={example}
                     onClick={() => this.onTagButtonClick(tag)}>
                    {tag}
                </div>
            );
        });

        return (
            <div className="form-group">
                {label}
                <div id={this.props.name+"_text"} className="tagger-text noselect">
                    {this.getText()}
                </div>
                <div className="tagger-buttons">
                    {tagsButtons}
                </div>
                <ReactTooltip />
            </div>
        );
    }
}
