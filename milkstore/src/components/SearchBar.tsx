import React from 'react';
import './styles/searchbar.css';


interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const SearchBar: React.FC<Props> = ({ onChange, value }) => {
  return (
    <div className='searchbar'>
      <input type="text" onChange={onChange} value={value} placeholder="Search" />
    </div>
  );
};

export default SearchBar;
