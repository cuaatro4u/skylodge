import React from "react";
import { Tabs, Tab } from "react-bootstrap";

// Starter
import starterImgOne from "../../assets/starter/starter-img-one.jpeg";
import starterImgTwo from "../../assets/starter/starter-img-two.jpeg";
import starterImgThree from "../../assets/starter/starter-img-three.jpeg";
import starterImgFour from "../../assets/starter/starter-img-four.jpg";

// Main Course
import mainCourseImgOne from "../../assets/mainCourse/main-course-one.jpeg";
import mainCourseImgTwo from "../../assets/mainCourse/main-course-two.jpeg";
import mainCourseImgThree from "../../assets/mainCourse/main-course-three.jpeg";
import mainCourseImgFour from "../../assets/mainCourse/main-course-four.jpeg";

// Desert
import desertOne from "../../assets/desert/desertOne.jpeg";
import desertTwo from "../../assets/desert/desertTwo.jpeg";

function SpecialMenuComponent() {
  return (
    <div className="special-menu">
      <div className="sm-details">
        <h6>Special Menu</h6>
        <h1>Delicious Flavour of Cuisine</h1>
        <p>
          A responsive navigation header, including support for branding,
          navigation, and more.
        </p>
      </div>
      <div className="menu-tab">
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Starter" className="tab-card-container">
            <div
              className="img-card shadow"
              style={{ backgroundImage: "url(" + starterImgOne + ")" }}
            ></div>
            <div
              className="img-card shadow"
              style={{ backgroundImage: "url(" + starterImgTwo + ")" }}
            ></div>
            <div
              className="img-card shadow"
              style={{ backgroundImage: "url(" + starterImgThree + ")" }}
            ></div>
            <div
              className="img-card shadow"
              style={{ backgroundImage: "url(" + starterImgFour + ")" }}
            ></div>
          </Tab>
          <Tab
            eventKey="profile"
            title="Main Course"
            className="tab-card-container"
          >
            <div
              className="img-card shadow"
              style={{ backgroundImage: "url(" + mainCourseImgTwo + ")" }}
            ></div>
            <div
              className="img-card shadow"
              style={{ backgroundImage: "url(" + mainCourseImgThree + ")" }}
            ></div>
            <div
              className="img-card shadow"
              style={{ backgroundImage: "url(" + mainCourseImgFour + ")" }}
            ></div>
            <div
              className="img-card shadow"
              style={{ backgroundImage: "url(" + mainCourseImgOne + ")" }}
            ></div>
          </Tab>
          <Tab eventKey="contact" title="Desert" className="tab-card-container">
            <div
              className="img-card shadow"
              style={{ backgroundImage: "url(" + desertOne + ")" }}
            ></div>
            <div
              className="img-card shadow"
              style={{ backgroundImage: "url(" + desertTwo + ")" }}
            ></div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default SpecialMenuComponent;
