import React, { useState, useEffect } from "react";
import "./Stickynav.css";
import { useNavigate, useLocation } from "react-router-dom";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const StickyNav = () => {
  const pages = ["Home", "My Story", "Skill", "Portfolios", "Contact"];
  const navigate = useNavigate();
  const location = useLocation();

  // Determine the current page index based on pathname
  const getCurrentPageIndex = () => {
    if (location.pathname === "/") return 0; // Home
    for (let i = 1; i < pages.length; i++) {
      if (`/${pages[i].replace(" ", "").toLowerCase()}` === location.pathname) {
        return i;
      }
    }
    return 0; // Default to Home if no match found
  };

  const [activePageIndex, setActivePageIndex] = useState(getCurrentPageIndex());
  const [startX, setStartX] = useState(null);

  useEffect(() => {
    // Update active page index when URL changes
    setActivePageIndex(getCurrentPageIndex());
  }, [location]);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const distance = startX - endX;

    let newIndex = activePageIndex; // default to the current index

    // Detecting the direction of the swipe
    if (distance > 50 && activePageIndex < pages.length - 1) {
      // Swipe left, move to the next page
      setActivePageIndex((prevIndex) => {
        newIndex = prevIndex + 1;
        return newIndex;
      });
    } else if (distance < -50 && activePageIndex > 0) {
      // Swipe right, move to the previous page
      setActivePageIndex((prevIndex) => {
        newIndex = prevIndex - 1;
        return newIndex;
      });
    }

    // Convert the page name to path
    const path =
      pages[newIndex] === "Home"
        ? "/"
        : `/${pages[newIndex].replace(" ", "").toLowerCase()}`;

    navigate(path);
  };
  const navigateToPreviousPage = () => {
    if (activePageIndex > 0) {
      const newIndex = activePageIndex - 1;
      const path = pages[newIndex] === "Home"
        ? "/"
        : `/${pages[newIndex].replace(" ", "").toLowerCase()}`;
      navigate(path);
    }
  };

  const navigateToNextPage = () => {
    if (activePageIndex < pages.length - 1) {
      const newIndex = activePageIndex + 1;
      const path = pages[newIndex] === "Home"
        ? "/"
        : `/${pages[newIndex].replace(" ", "").toLowerCase()}`;
      navigate(path);
    }
  };



  return (
    <nav
      className="stickynav"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <a onClick={navigateToPreviousPage}>
        <KeyboardDoubleArrowLeftIcon sx={{ marginTop: '3px' }} />
      </a>
      <a>{pages[activePageIndex]}</a>
      <a onClick={navigateToNextPage}>
        <KeyboardDoubleArrowRightIcon sx={{ marginTop: '3px' }} />
      </a>
    </nav>
  );
};

export default StickyNav;
