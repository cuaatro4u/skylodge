import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function TestimonialComponent() {
  return (
    <div className="testimonial">
      <Container>
        <div className="about-text">
          <h6>Testimonial</h6>
          <h1>Customer Thoughts</h1>
          {/* <p>A responsive navigation header, including support for branding.</p> */}
          <hr className="hr-yellow float-left" />
          <br />
          <br />
        </div>
        <div className="testimonial-container">
          <Row>
            <Col xs={12} md={6}>
              <div className="testimonial-content shadow text-center">
                <h5>
                  "Excellent food and we'll environment. Really best restaurant
                  at Haroa. Thanks Sky Lounge!!"
                </h5>
                <p> - Saif Islam</p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="testimonial-content shadow text-center">
                <h5>
                  "Wonderful experience... quality food with reasonable price.
                  Decorated roof but bare...so a big problem for rainy season
                  and summer."
                </h5>
                <p> - Bhaktilata Das</p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="testimonial-content shadow text-center">
                <h5>
                  "This is a very good place. You will get very quality food at
                  low price."
                </h5>
                <p> - Bitanu Biswas</p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="testimonial-content shadow text-center">
                <h5>
                  "Affordable price Hygienic Food quality Best part of the
                  resturent is You have to wash your hands with warm water
                  before and after eating."
                </h5>
                <p> - Shahriyar Hamid</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default TestimonialComponent;
