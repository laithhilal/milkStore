import React from 'react';

interface Props {
  min: number;
  maxStorage: number;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
  
const Slider: React.FC<Props> = ({ min, maxStorage, value, onChange }) => {
  return (
    <div className='slider'>
    <input type="range" min={min} max={maxStorage} value={value} onChange={onChange} />
      <label>{value}</label>
    </div>
  );
};

export default Slider;
