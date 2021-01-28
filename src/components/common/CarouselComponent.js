import React from "react";
import { Carousel } from "react-bootstrap";

function CarouselComponent({
  photoOne,
  photoTwo,
  photoThree,
  textOne,
  textTwo,
  textThree,
}) {
  return (
    <Carousel className="carousel" prevIcon={false} nextIcon={false}>
      <Carousel.Item className="carousel-details">
        <div
          className="carousel-div shadow"
          style={{
            backgroundImage: "url('" + photoOne + "')",
          }}
        >
          <div className="carousel-overlay">
            <h4>{textOne}</h4>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="carousel-details">
        <div
          className="carousel-div shadow"
          style={{
            backgroundImage: "url('" + photoTwo + "')",
          }}
        >
          <div className="carousel-overlay">
            <h4>{textTwo}</h4>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="carousel-details">
        <div
          className="carousel-div shadow"
          style={{
            backgroundImage: "url('" + photoThree + "')",
          }}
        >
          <div className="carousel-overlay">
            <h4>{textThree}</h4>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;