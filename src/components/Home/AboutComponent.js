import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import aboutImg from "../../assets/about-img.jpeg";

function AboutComponent() {
  return (
    <>
      <div className="about" id="about">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <div className="about-text">
                <h6>About Us</h6>
                <h1>The Food's Master Say About Us</h1>
                <p>
                  HE SOON REALIZED THAT IT WAS COOKING IN HIS OWN UNIQUE STYLE
                  (WITHOUT ANY FORMAL TRAINING IN THE SAME) THAT GAVE HIM A
                  SENSE OF SATISFACTION AND THE WIDESPREAD APPRECIATION OF HIS
                  PATRONS AND PEERS FUELLED HIS PASSION EVEN FURTHER. HE HAS
                  NEVER SINCE LOOKED BACK AND HAS DEVOTED HIS ENTIRE LIFETIME
                  TOWARDS THIS PASSION OF HIS WHICH HAS EARNED HIM THE LOVE OF
                  HIS PATRONS, RESPECT OF HIS PEERS IN THE INDUSTRY AND
                  WORLDWIDE ACCLAIM AND MANY AWARDS.
                </p>
                <hr className="hr-yellow float-left" />
              </div>
            </Col>
            <Col xs={12} md={6} className="about-img">
              <img src={aboutImg} className="img-fluid shadow" alt="..." />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="contact">
        <Container>
          <Row>
            <Col xs={12} md={3}>
              <b>Address</b>
              <p>Haroa, near by Haroa Bridge North 24 Parganas</p>
              <br />
              <b>Contact</b>
              <p>+91 9673628734</p>
            </Col>
            <Col xs={12} md={3}>
              <b>Lunch Service</b>
              <p>Experience a great lunch with your family & friends.</p>
              <br />
              <b>Dinner Service</b>
              <p>The exellence of our food will give you a vivid experience.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AboutComponent;
