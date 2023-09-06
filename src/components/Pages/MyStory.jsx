import React, { useState, useEffect } from "react";
import "./story.css";
import transition from "../Transition"; 
import Lottie from "react-lottie";
import animationData from "../lotties/storylottie.json";
const MyStory = () => {
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    if (!showPage) {
      // Delay the transition to page2 by 5 seconds (5000 milliseconds)
      setTimeout(() => {
        setShowPage(true);
      }, 5000);
    }
  }, [showPage]);

  const defaultOptions = {
    loop: true, // Set to true if you want the animation to loop
    autoplay: true, // Set to true if you want the animation to play automatically
    animationData: animationData, // Animation JSON data
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
          <div className="story-image">
            <Lottie options={defaultOptions} />
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
             <span style={{fontWeight: "bold"}}> developing software, creating websites, and even initiating a
              freelance marketing agency</span>.
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
