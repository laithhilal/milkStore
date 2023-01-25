import React from 'react';

interface Props {
  onClick: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({ onClick, children }) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
