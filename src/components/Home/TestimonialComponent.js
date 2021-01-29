import React from "react";
import { Container } from "react-bootstrap";

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
          <div className="testimonial-card"></div>
          <div className="testimonial-card"></div>
          <div className="testimonial-card"></div>
        </div>
      </Container>
    </div>
  );
}

export default TestimonialComponent;
