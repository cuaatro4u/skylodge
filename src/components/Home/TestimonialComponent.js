import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function TestimonialComponent() {
  return (
    <div className="testimonial">
      <Container>
        <div className="about-text">
          <h6>Testimonial</h6>
          <h1>Customer Thoughts</h1>
          <p>A responsive navigation header, including support for branding.</p>
          <hr className="hr-yellow float-left" />
          <br />
          <br />
        </div>
        <div className="testimonial-container">
          <Row>
            <Col xs={12} md={6}>
              <div className="testimonial-content shadow">
                <h5>
                  "A responsive navigation header, including support for
                  branding."
                </h5>
                <p> - Jeet Mukherjee</p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="testimonial-content shadow">
                <h5>
                  "A responsive navigation header, including support for
                  branding."
                </h5>
                <p> - Jeet Mukherjee</p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="testimonial-content shadow">
                <h5>
                  "A responsive navigation header, including support for
                  branding."
                </h5>
                <p> - Jeet Mukherjee</p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="testimonial-content shadow">
                <h5>
                  "A responsive navigation header, including support for
                  branding."
                </h5>
                <p> - Jeet Mukherjee</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default TestimonialComponent;
