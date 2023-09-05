import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useNavigate } from 'react-router-dom';

const SwipeablePages = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const pages = ["", "story", "resume", "education", "contact-me"];

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('left'),
    onSwipedRight: () => handleSwipe('right'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const handleSwipe = (direction) => {
    if (direction === 'left' && currentPage < pages.length - 1) {
      setCurrentPage(prevPage => {
        const newPage = prevPage + 1;
        navigate(`/${pages[newPage]}`);
        return newPage;
      });
    } else if (direction === 'right' && currentPage > 0) {
      setCurrentPage(prevPage => {
        const newPage = prevPage - 1;
        navigate(`/${pages[newPage]}`);
        return newPage;
      });
    }
  };


  return (
    <div {...handlers} style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1000,
      backgroundColor: '#ffffff30'
    }}>
      {/* Content of the current page */}
    </div>
  );
};

export default SwipeablePages;
