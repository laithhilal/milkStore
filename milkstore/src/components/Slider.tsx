import React from 'react';

interface Props {
    min: number;
    max: number;
    value: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
  

const Slider: React.FC<Props> = ({ min, max, value, onChange }) => {
  return (
    <div className='slider'>
      <input type="range" min={min} max={max} value={value} onChange={onChange} />
    </div>
  );
};

export default Slider;
