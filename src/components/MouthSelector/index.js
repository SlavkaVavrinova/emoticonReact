import React from 'react';
import { useSettings } from '../../setting-context';
import { mouthData } from '../../data';

const MouthSelector = () => {
  const { mouth, changeMouth } = useSettings();

  return (
    <div className="items">
      {mouthData.map((mouthItem, index) => (
        <img
          className={mouth === index + 1 ? 'item active' : 'item'}
          key={mouthItem.id}
          src={mouthItem.image}
          onClick={() => {
            changeMouth(mouthItem.id);
          }}
        />
      ))}
    </div>
  );
};

export default MouthSelector;
