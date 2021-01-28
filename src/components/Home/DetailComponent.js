import React from "react";

function DetailComponent() {
  return (
    <div className="detail-section">
      <div className="detail-img-card shadow"></div>
      <div className="detail-text-card">
        <h3>Hi, there!</h3>
        <div>
          <h6>SPECIAL OFFER</h6>
          <p>
            <b>"A responsive navigation header."</b>
          </p>
          <p>
            A responsive navigation header, including support for branding,
            navigation, and more.
            <br />
            <span className="float-right"> - Sky Lodge</span>
            <br />
          </p>

          <button className="btn btn-custom shadow">Explore More</button>
          <button className="btn btn-custom-outlined shadow">
            Contact Now
          </button>
          <br />
          <hr className="hr-yellow float-left" />
        </div>
      </div>
    </div>
  );
}

export default DetailComponent;
