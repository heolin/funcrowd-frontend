import React from "react"
import Slider from "react-slick";
import Image from "./Image";
import ImageModal from "./ImageModal";
import ScreenBreakpoints from "../../../../utils/SceenBreakpoints";



let dragging = false;
export default class ImagesGallery extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedImage: null
        };

        this.settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            beforeChange: () => dragging = true,
            afterChange: () => dragging = false,
            responsive: [
                {
                    breakpoint: ScreenBreakpoints.xl,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: ScreenBreakpoints.lg,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                }
            ]
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

        let label;
        if (this.props.label)
            label = <label><strong>{this.props.label}</strong></label>;

        return (
            <div className="form-group">
                <ImageModal image={this.state.selectedImage}
                            onClose={this.onImageModalClose}/>
                {label}
                <div>
                    <Slider {...this.settings}>
                        {items}
                    </Slider>
                </div>
            </div>
        );
    }
}
