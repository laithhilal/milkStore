import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import Slider from './components/Slider';
import Button from './components/Button';
import Header from './components/Header';
import { Milk } from './types';
import axios from 'axios';
import './App.css'

const App: React.FC = () => {
  const [milkData, setMilkData] = useState<Milk[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMilk, setFilteredMilk] = useState<Milk[]>([]);
  const [selectedMilk, setSelectedMilk] = useState<Milk | null>(null);
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [page, setPage] = useState(1);
  const [selectedType, setSelectedType] = useState('');
  const [viewingCard, setViewingCard] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/milk');
        setMilkData(data);
        setFilteredMilk(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    setFilteredMilk(milkData.filter((milk) => {
      if (selectedType === '') {
        return milk.name.toLowerCase().includes(searchTerm.toLowerCase());
      } else {
        return (
          milk.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          milk.type.toLowerCase() === selectedType.toLowerCase()
        );
      }
    }));
  }, [searchTerm, milkData, selectedType]);

  const handleFilter = (type: string) => {
    setSelectedType(type);
    setFilteredMilk(milkData.filter((milk) => {
      if (selectedType === '') {
        return milk.name.toLowerCase().includes(searchTerm.toLowerCase());
      } else {
        return (
          milk.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          milk.type.toLowerCase() === selectedType.toLowerCase()
        );
      }
    }));
  };
  

  const handleCardClick = (milk: Milk) => {
    setSelectedMilk(milk);
  };

  const handleOrder = () => {
    setOrderQuantity(1);
    alert('Order placed successfully!');
  };

  return (
    <div className='main'>
      <Header />
      { !viewingCard && 
        <>
          <SearchBar onChange={handleSearch} value={searchTerm} />
          <Filter onChange={handleFilter} />
          <div className='grid-container'>
            {filteredMilk
              .slice((page - 1) * 9, page * 9)
              .map((milk) => (
                <Card
                  key={milk.id}
                  milk={milk}
                  onClick={() => {
                    setViewingCard(true);
                    handleCardClick(milk);
                  }}
                />
              ))}
          </div>
          <div>
            <Button onClick={() => page === 1 ? null : setPage(page - 1)}>
              Previous
            </Button>
            <Button 
              onClick={() => setPage(page + 1)}
              disabled={(page * 9) >= filteredMilk.length}> Next</Button>
          </div>
        </>
      }
      { viewingCard && selectedMilk &&
        <>
          <button onClick={() => setViewingCard(false)}>Back</button>
          <div>
            <h2>{selectedMilk.name}</h2>
            <p>Type: {selectedMilk.type}</p>
            <Slider
              min={1}
              maxStorage={selectedMilk?.storage}
              value={orderQuantity}
              onChange={(e) => setOrderQuantity(Number(e.target.value))}
            />
            <Button onClick={handleOrder}>Order</Button>
          </div>
        </>
      }
    </div>
  );
};
export default App;
