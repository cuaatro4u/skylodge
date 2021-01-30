import React from "react";
import { Col, Row } from "react-bootstrap";
import topPhoto from "../../assets/topPhoto.png";
import CarouselComponent from "../common/CarouselComponent";
import one from "../../assets/topCarousel/one.JPG";
import two from "../../assets/topCarousel/two.jpeg";
import three from "../../assets/topCarousel/three.JPG";

function TopComponent() {
  return (
    <div>
      <Row>
        <Col xs={12} lg={6} className="img-top">
          <img alt="..." src={topPhoto} className="img-fluid" />
        </Col>
        <Col xs={12} lg={6} className="top-details">
          <div className="text-container text-center">
            <h2>Choosing Quality Food</h2>
            <p>
              A responsive navigation header, including support for branding,
              navigation, and more.
            </p>
            <hr className="hr-yellow" />
          </div>
          <div className="btn-container">
            <button className="btn btn-custom shadow">Contact Now</button>
            <button className="btn btn-custom-outlined shadow">
              View Menu
            </button>
          </div>
        </Col>
      </Row>
      <CarouselComponent
        photoOne={one}
        photoTwo={two}
        photoThree={three}
        textOne="Get Delicious Food"
        textTwo="Some text goes here!"
        textThree="Some text goes here!"
      />
    </div>
  );
}

export default TopComponent;
