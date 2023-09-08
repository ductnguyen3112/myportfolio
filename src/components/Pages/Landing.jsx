import "./landing.css";
import React from "react";
import TypingAnimationWithCursor from "../functions/TypingAnimationWithCursor"; 
import transition from "../Transition"; 

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="intro-avatar-container">
        <div className="name-wrapper">
          <h3>
            {" "}
            <span>Welcome </span> to My Portfolio
          </h3>
          <h1>Duc Thinh Nguyen</h1>
          <h2>
            I'm{" "}
            <span>
              <TypingAnimationWithCursor
                words={["Developer", "Web Designer", "SEO Freelancer"]}
              />
            </span>
          </h2>
          <div className="button-container">
           
          </div>
        </div>

        <div className="avatar-wrapper">

        </div>
      </div>
    </div>
  );
};

export default transition(Landing);
