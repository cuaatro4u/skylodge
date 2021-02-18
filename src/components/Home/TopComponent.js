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
            <h2>Get Delicious Food</h2>
            <p>Sky Lounge</p>
            <hr className="hr-yellow" />
          </div>
          <div className="btn-container">
            <button
              className="btn btn-custom shadow"
              onClick={() => {
                window.open("tel:9673628734");
              }}
            >
              Contact Now
            </button>
            <a className="btn btn-custom-outlined shadow" href="#specialmenu">
              View Menu
            </a>
          </div>
        </Col>
      </Row>
      <CarouselComponent
        photoOne={one}
        photoTwo={two}
        photoThree={three}
        textOne="Get Delicious Food"
        textTwo="Experience Nature With Food"
        textThree="Enjoy With Family & Friends"
      />
    </div>
  );
}

export default TopComponent;
