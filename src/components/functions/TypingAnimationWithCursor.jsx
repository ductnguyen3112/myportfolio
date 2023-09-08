import React, { useState, useEffect } from "react";

const TypingAnimationWithCursor = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setText(words[index].slice(0, text.length + 1));
    }, 100);

    if (text === words[index]) {
      clearInterval(timer);
      setTimeout(() => {
        setShowCursor(false);
        setTimeout(() => {
          setShowCursor(true);
          setIndex((index + 1) % words.length);
          setText("");
        }, 1000);
      }, 500);
    }

    return () => clearInterval(timer);
  }, [index, text, words]);

  return (
    <span style={{ color: "white" }}>
      {text}
      {showCursor && <span className="blinking-cursor">|</span>}
    </span>
  );
};

export default TypingAnimationWithCursor;
