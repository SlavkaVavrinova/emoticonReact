import React from 'react';
import './style.css';
import { useSettings } from './../../setting-context';
import { eyesData, mouthData, colorsData } from './../../data';

const Emoticon = () => {
  const { eyes, mouth, color } = useSettings();

  return (
    <div
      className="emoticon"
      style={{ backgroundColor: colorsData[color - 1].value }}
    >
      <img className="emoticon__eyes" src={eyesData[eyes - 1].image} />
      <img className="emoticon__mouth" src={mouthData[mouth - 1].image} />
    </div>
  );
};

export default Emoticon;
