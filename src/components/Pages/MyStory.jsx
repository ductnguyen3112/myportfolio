import React, { useState, useEffect, useRef } from "react";
import "./css/story.css";
import transition from "../Transition";
import lottie from "lottie-web";
import avatar from "../images/avatar.png";

import animationData from "../lotties/storylottie.json";
const MyStory = () => {
  const [showPage, setShowPage] = useState(false);
  const animationContainerRef = useRef(null); // Create a ref for the animation container

  useEffect(() => {
    if (!showPage) {
      // Delay the transition to page2 by 5 seconds (5000 milliseconds)
      setTimeout(() => {
        setShowPage(true);
      }, 5000);
    }
  }, [showPage]);

  useEffect(() => {
    if (showPage) {
      // Initialize Lottie animation when showPage is true
      const animation = lottie.loadAnimation({
        container: animationContainerRef.current,
        animationData: animationData,
        loop: true,
        autoplay: true,
      });
      return () => {
        // Cleanup when the component unmounts
        animation.destroy();
      };
    }
  }, [showPage]);

  return (
    <div className="story-container">
      {!showPage ? (
        // Show first display
        <div className="first-container">
          <div className={`first-display ${showPage ? "fade-out" : ""}`}>
            <h1>Hi</h1>
          </div>
        </div>
      ) : (
        // Show second display after showPage turns to true
        <div className="second-display">
          <div className="avatar-story">
            <img
              src={avatar}
              alt="User Avatar"
              className="avatar"
            />
            <div className="name-story">
              <h3>Duc Thinh Nguyen</h3>
            </div>
          </div>
          <div className="story-text">
            <h1>About Me</h1>
            <p>
              Born in Vietnam, my early life was a lesson in adaptability and
              relentless growth. Transitioning to Canadian life at a tender age,
              I seamlessly integrated into my new environment, always eager to
              embrace emerging opportunities.
            </p>

            <p>
              In 2018, I set my sights on becoming an Automobile Mechanic. But
              when the COVID-19 pandemic ushered in a time of global
              introspection, I discovered a burgeoning passion for software
              development. Today, my accomplishments in this domain include
              <span style={{ fontWeight: "bold" }}>
                {" "}
                developing software, creating websites, and even initiating a
                freelance marketing agency
              </span>
              .
            </p>

            <p>
              This year, 2023, I achieved another milestone by graduating as a
              programmer. Yet, my quest for growth persists. I am now determined
              to refine my expertise and mature into a distinguished
              professional programmer.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default transition(MyStory);
