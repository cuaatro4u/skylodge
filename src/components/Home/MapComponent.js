import React from "react";

function MapComponent() {
  return (
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14519.444281984634!2d87.98435018803904!3d24.52488926926566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fa47ed3ba2f33b%3A0xefdc4d96147de744!2sHarua%2C%20West%20Bengal%20731221!5e0!3m2!1sen!2sin!4v1611932550339!5m2!1sen!2sin"
        className="map-view"
        frameBorder="0"
        aria-hidden="false"
        tabIndex="0"
        title="map"
      ></iframe>
    </div>
  );
}

export default MapComponent;
