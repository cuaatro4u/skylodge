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
            <b>"An evening experience is recommended"</b>
          </p>
          <p>
            Yes we do provide something more than food. & that is experience. So
            visiting our restrurant will not disappoint you.
            <br />
            <span className="float-right"> - Sky Lounge</span>
            <br />
          </p>

          <button
            className="btn btn-custom shadow"
            onClick={() => {
              window.open("tel:9673628734");
            }}
          >
            Explore More
          </button>
          <button
            className="btn btn-custom-outlined shadow"
            onClick={() => {
              window.open("tel:9673628734");
            }}
          >
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
