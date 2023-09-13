import React from "react";
import { Link } from "react-router-dom";
const GoalBox = ({ goalNumber, goalDescription, targets, events, publications, actions, link }) => {
  return (
    <div className="box">
      <div className="imgBox">
        <img src={require (`../Covers/cover-${goalNumber}.jpg`)} alt="" className="cover-image" />
        <div className="sdg-icon-container">
          <img src={require (`../Pictures/E_SDG_Icons-${goalNumber}.jpg`)} alt="" className="sdg-icon" />
        </div>
      </div>
      <div className={`content c${goalNumber}`}>
        <h2 className="goal">Goal {goalNumber}</h2>
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
          <h3>
            <span>{publications}</span>
            <br />
            <span className="small-text">Publications</span>
          </h3>
          <h3>
            <span>{actions}</span>
            <br />
            <span className="small-text">Actions</span>
          </h3>
        </div>
        <Link to={link} className="moreinfo-btn">
          <button>More info</button>
        </Link>
      </div>
    </div>
  );
};

export default GoalBox;
