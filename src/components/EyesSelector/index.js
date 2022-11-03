import React from 'react';
import { useSettings } from '../../setting-context';
import { eyesData } from '../../data';

const EyesSelector = () => {
  const { eyes, changeEyes } = useSettings();

  return (
    <div className="items">
      {eyesData.map((eyeData, index) => (
        <img
          className={eyes === index + 1 ? 'item active' : 'item'}
          key={eyeData.id}
          src={eyeData.image}
          onClick={() => {
            changeEyes(eyeData.id);
          }}
        />
      ))}
    </div>
  );
};

export default EyesSelector;
