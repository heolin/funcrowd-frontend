import React from "react"
import ImageModal from "./ImagesGallery/ImageModal";


export default class ImageField extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedImage: null
        };

        this.onImageClick = this.onImageClick.bind(this);
        this.onImageModalClose = this.onImageModalClose.bind(this);
    }

    onImageClick() {
        this.setState({
            selectedImage: this.props.value
        });
    }

    onImageModalClose() {
        this.setState({
            selectedImage: null
        });
    }

    render() {
        let label;
        if (this.props.label)
            label = <label><strong>{this.props.label}</strong></label>;

        return (
            <div className="form-group">
                <ImageModal image={this.state.selectedImage}
                            onClose={this.onImageModalClose}/>
                {label}
                <div>
                    <img className="image-field"
                         onClick={this.onImageClick}
                         src={this.props.value}/>
                </div>
            </div>
        );
    }
}

