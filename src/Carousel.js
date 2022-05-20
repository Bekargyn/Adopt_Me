import React, { Component } from "react";

export default class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = index => {
    //   console.log( event.target.dataset.index);
    this.setState({
        active: index
    })
  }

  render() {
    const { images } = this.props;
    // const images = this.props.images
    const { active } = this.state;
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            <img
              src={photo}
              alt="animal thumbnail"
              key={photo}
              className={index === active ? "active" : ""}
            //   data-index={index}
              onClick={() => this.handleIndexClick(index)}
            />
          ))}
        </div>
      </div>
    );
  }
}
