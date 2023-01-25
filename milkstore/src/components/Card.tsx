import React from 'react';
import { Milk } from '../types';
import milkImage from './images/milk.png';
import './styles/card.css';

interface Props {
  milk: Milk;
  onClick: () => void;
}

const Card: React.FC<Props> = ({ milk, onClick }) => {
  return (
    <div className='card' onClick={onClick}>
      <img src={milkImage} alt='milk' />
      <h2>{milk.name}</h2>
      <p>Type: {milk.type}</p>
    </div>
  );
};

export default Card;
