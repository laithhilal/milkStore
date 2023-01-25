import React, { useState } from 'react';

interface Props {
  onChange: (type: string) => void;
}

const Filter: React.FC<Props> = ({ onChange }) => {
  const [selectedType, setSelectedType] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value);
    onChange(e.target.value);
};

  return (
    <div className='filter'>
      <select onChange={handleChange} value={selectedType}>
        <option value="">All</option>
        <option value="whole milk">Whole Milk</option>
        <option value="oat milk">Oat Milk</option>
        <option value="pea milk">Pea Milk</option>
        <option value="almond milk">Almond Milk</option>
        <option value="rice milk">Rice Milk</option>
        <option value="coconut milk">Coconut Milk</option>
        <option value="soy milk">Soy Milk</option>
        <option value="walnut milk">Walnut Milk</option>
        <option value="macadamia milk">Macadamia Milk</option>
        <option value="hemp milk">Hemp Milk</option>
        <option value="cashew milk">Cashew Milk</option> 
      </select>
    </div>
  );
};

export default Filter;
