import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function TeamComponent() {
  return (
    <div className="team">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="..."
              className="img-fluid team-photo shadow"
            />
          </Col>
          <Col xs={12} md={6}>
            <div className="about-text">
              <h6>TEAM</h6>
              <h1>John Doe</h1>
              <p>
                A responsive navigation header, including support for branding,
                navigation, and more.
              </p>
              <b>
                "A responsive navigation header, including support for
                branding."
              </b>
              <br />
              <br />
              <button className="btn btn-custom">Reach Out</button>
              <br />
              <hr className="hr-yellow float-left" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TeamComponent;
