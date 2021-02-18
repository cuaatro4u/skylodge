import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import avatar from "../../assets/avatar.png";

function TeamComponent() {
  return (
    <div className="team">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <img
              src={avatar}
              alt="..."
              className="img-fluid team-photo shadow"
            />
          </Col>
          <Col xs={12} md={6}>
            <div className="about-text">
              <h6>TEAM</h6>
              <h1>Mirajul Islam</h1>
              <p>
                Hi, welcome to the official website of Sky Lounge. For any
                queries you can reach us out.
              </p>
              <b>Sky Lounge</b>
              <br />
              <br />
              <button
                className="btn btn-custom"
                onClick={() => {
                  window.open("tel:9673628734");
                }}
              >
                Reach Out
              </button>
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
