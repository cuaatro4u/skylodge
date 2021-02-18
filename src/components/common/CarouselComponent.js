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
            <p>We provide best food with natural experience.</p>
            <hr className="hr-yellow" />
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
            <p>We provide best food with natural experience.</p>

            <hr className="hr-yellow" />
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
            <p>We provide best food with natural experience.</p>

            <hr className="hr-yellow" />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
