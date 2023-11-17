// ScrollDownButton.jsx
import React, { useState, useEffect } from 'react';
import '../styles/ScrollDownButton.css';

const ScrollDownButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 20; // Adjusted threshold for better accuracy

      setShowButton(isBottom);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup: Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollTop = () => {
    console.log('Scrolling to top...'); // Log statement for debugging
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`scroll-down-button ${showButton ? 'show' : 'hide'}`}
      onClick={handleScrollTop}
    >
      Scroll Up
    </button>
  );
};

export default ScrollDownButton;
