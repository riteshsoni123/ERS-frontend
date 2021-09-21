import Carousel from "react-elastic-carousel";
import React, { Component } from "react";
import "./Gallery.scss";
class Gallery extends Component {
  state = {
    items: [
      {
        id: 1,
        url: "https://somya51p.github.io/ERS-society/images/gallery/21.jpg",
      },
      {
        id: 2,
        url: "https://somya51p.github.io/ERS-society/images/gallery/2.jpg",
      },
      {
        id: 3,
        url: "https://somya51p.github.io/ERS-society/images/gallery/3.jpg",
      },
      {
        id: 4,
        url: "https://somya51p.github.io/ERS-society/images/gallery/4.jpg",
      },
      {
        id: 5,
        url: "https://somya51p.github.io/ERS-society/images/gallery/5.jpg",
      },
      {
        id: 6,
        url: "https://somya51p.github.io/ERS-society/images/gallery/6.jpg",
      },
      {
        id: 7,
        url: "https://somya51p.github.io/ERS-society/images/gallery/7.jpg",
      },
      {
        id: 8,
        url: "https://somya51p.github.io/ERS-society/images/gallery/8.jpg",
      },
      {
        id: 9,
        url: "https://somya51p.github.io/ERS-society/images/gallery/9.jpg",
      },
      {
        id: 10,
        url: "https://somya51p.github.io/ERS-society/images/gallery/20.jpg",
      },
      {
        id: 11,
        url: "https://somya51p.github.io/ERS-society/images/gallery/22.jpg",
      },
      {
        id: 12,
        url: "https://somya51p.github.io/ERS-society/images/gallery/1.jpg",
      },
    ],
  };
  render() {
    const { items } = this.state;
    return (
      <div>
        <h4>Glimpse of the events and memories of ERS club</h4>
        <Carousel>
          {items.map((item) => (
            <div className="container" id="gallery">
              <img className="galleryimage" src={item.url} key={item.id} />
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}
export default Gallery;
