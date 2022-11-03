import React from 'react';
import { useSettings } from './../../setting-context';
import { colorsData } from '../../data';

const ColorSelector = () => {
  const { color, changeColor } = useSettings();

  return (
    <div className="items">
      {colorsData.map((colorData, index) => (
        <div
          className={color === index + 1 ? 'item active' : 'item'}
          key={colorData.id}
          style={{ backgroundColor: colorData.value }}
          onClick={() => {
            changeColor(colorData.id);
          }}
        />
      ))}
    </div>
  );
};

export default ColorSelector;
