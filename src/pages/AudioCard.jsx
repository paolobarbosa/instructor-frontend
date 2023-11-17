// AudioCard.js
import React from 'react';
import { useSpring, animated } from 'react-spring';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AudioCard = ({ audioData }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={props}>
      <div className="audio-card">
        <h2>{audioData.title}</h2>
        {/* Add other audio details here */}
      </div>
    </animated.div>
  );
};

export default AudioCard;