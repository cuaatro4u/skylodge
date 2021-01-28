import React from "react";
import { Col, Row } from "react-bootstrap";
import topPhoto from "../../assets/topPhoto.png";
import CarouselComponent from "../common/CarouselComponent";

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
        photoOne="https://images.pexels.com/photos/628776/pexels-photo-628776.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        photoTwo="https://images.pexels.com/photos/3850838/pexels-photo-3850838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        photoThree="https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        textOne="Get Delicious Food"
        textTwo="Some text goes here!"
        textThree="Some text goes here!"
      />
    </div>
  );
}

export default TopComponent;
