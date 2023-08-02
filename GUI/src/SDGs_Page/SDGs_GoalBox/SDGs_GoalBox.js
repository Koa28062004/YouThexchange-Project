import React from "react";
import "../SDGs.css";

const GoalBox = (props) => {
  const {
    goalNumber,
    goalImage,
    iconImage,
    goalTitle,
    goalDescription,
    targets,
    events,
    publications,
    actions,
  } = props;

  return (
    <div className="box">
      <div className="imgBox">
        <img src={goalImage} alt="" className="cover-image" />
        <div className="sdg-icon-container">
          <img src={iconImage} alt="" className="sdg-icon" />
        </div>
      </div>
      <div className={`content c${goalNumber}`}>
        <h2 className="goal">{goalTitle}</h2>
        <p>{goalDescription}</p>
        <div className="horizontal-line"></div>
        <div className="details">
          <h3>
            <span>{targets}</span>
            <br />
            <span className="small-text">Targets</span>
          </h3>
          <h3>
            <span>{events}</span>
            <br />
            <span className="small-text">Events</span>
          </h3>
          {/* Add other details here */}
        </div>
        <a href="#" className="btn">
          <button>More info</button>
        </a>
      </div>
    </div>
  );
};

export default GoalBox;
