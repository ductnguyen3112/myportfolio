import React, { useState, useEffect } from 'react';
import "./story.css";

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

  return (
    <div className="story-container">
      {!showPage ? (
        // Show first display
        <div className={`first-display ${showPage ? 'fade-out' : ''}`}>
          <h1>Hi</h1>
        </div>
      ) : (
        // Show second display after showPage turns to true
        <div className="second-display">
          <div className='story-image'>
            Story Image

          </div>
          <div className='story-text'>
            <h1>Story</h1>
            <h3>Lorem Ipsum</h3>
          </div>





        </div>



      )}
    </div>
  );
};

export default MyStory;
