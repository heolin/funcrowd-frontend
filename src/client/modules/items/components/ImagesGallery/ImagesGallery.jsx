import React from "react"
import Slider from "react-slick";
import Image from "./Image";
import ImageModal from "./ImageModal";


let dragging = false;
export default class ImagesGallery extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedImage: null
        };

        this.settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            beforeChange: () => dragging = true,
            afterChange: () => dragging = false,
        };

        this.onImageClick = this.onImageClick.bind(this);
        this.onImageModalClose = this.onImageModalClose.bind(this);
    }

    onImageClick(url) {
        if (dragging)
            return;
        this.setState({
            selectedImage: url
        });
    }

    onImageModalClose() {
        this.setState({
           selectedImage: null
        });
    }

    render() {

        let items = [];
        if (this.props.value)
            items = this.props.value.map((url) => <Image
                key={url}
                url={url}
                onClick={() => this.onImageClick(url)}
            />);
        this.settings['slidesToShow'] = Math.min(items.length, 3);

        let selectedImage = null;
        if (this.state.selectedImage)
            selectedImage = <ImageModal image={this.state.selectedImage}
                                        onClose={this.onImageModalClose}/>;


        return (
            <div className="form-group">
                {selectedImage}
                <label><strong>{this.props.label}</strong></label>
                <div>
                    <Slider {...this.settings}>
                        {items}
                    </Slider>
                </div>
            </div>
        );
    }
}
