import React from "react";
import { Tabs, Tab } from "react-bootstrap";

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
          <Tab eventKey="home" title="Breakfast" className="tab-card-container">
            <div className="img-card shadow"></div>
            <div className="img-card shadow"></div>
            <div className="img-card shadow"></div>
            <div className="img-card shadow"></div>
            <div className="img-card shadow"></div>
          </Tab>
          <Tab eventKey="profile" title="Lunch" className="tab-card-container">
            <div className="img-card shadow"></div>
            <div className="img-card shadow"></div>
            <div className="img-card shadow"></div>
            <div className="img-card shadow"></div>
            <div className="img-card shadow"></div>
          </Tab>
          <Tab eventKey="contact" title="Dinner" className="tab-card-container">
            <div className="img-card shadow"></div>
            <div className="img-card shadow"></div>
            <div className="img-card shadow"></div>
            <div className="img-card shadow"></div>
            <div className="img-card shadow"></div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default SpecialMenuComponent;
