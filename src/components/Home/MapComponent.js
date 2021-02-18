import React from "react";

function MapComponent() {
  return (
    <div className="map" id="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14733.313505877928!2d88.676627!3d22.6042096!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa49740518dead158!2sSky%20lounge!5e0!3m2!1sen!2sin!4v1613573374697!5m2!1sen!2sin"
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
