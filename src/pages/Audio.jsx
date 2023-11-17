// Audio.js
import React from 'react';
import Slider from 'react-slick';
import AudioCard from './AudioCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/audio.css';

const Audio = () => {
  const audioData = [
    { id: 1, title: 'Audio 1' },
    { id: 2, title: 'Audio 2' },
    { id: 3, title: 'Audio 3' },
    { id: 4, title: 'Audio 4' },
    { id: 5, title: 'Audio 5' },
    { id: 6, title: 'Audio 6' },
    // Add more audio data as needed
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="audio-page">
     <h2>Audio</h2>
      <Slider {...sliderSettings}>
        {audioData.map((audio) => (
          <AudioCard key={audio.id} audioData={audio} />
        ))}
      </Slider>
    </div>
  );
};

export default Audio;