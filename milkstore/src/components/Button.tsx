import React from 'react';
import './styles/button.css';

interface Props {
  onClick: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({ onClick, children }) => {
  return (
    <button className='button' onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
