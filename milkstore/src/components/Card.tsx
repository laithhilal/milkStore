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
      <img className='card-image' src={milkImage} alt='milk' />
      <h4 className='card-name'>{milk.name}</h4>
      <p className='card-type'>{milk.type} <span data-storage={milk.storage > 25 ? 'greater-than-25' : 'less-than-25'}>{milk.storage}</span></p>
    </div>
  );
};

export default Card;
