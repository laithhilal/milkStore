import React from 'react';
import './styles/slider.css';

interface Props {
  min: number;
  maxStorage: number;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
  
const Slider: React.FC<Props> = ({ min, maxStorage, value, onChange }) => {
  return (
    <div className='slider'>
    <input className='slider-input' type="range" min={min} max={maxStorage} value={value} onChange={onChange} />
    <br></br><label>Quantity to order: {value} liter</label>
    </div>
  );
};

export default Slider;
