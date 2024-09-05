import { useState } from 'react';
import styled from 'styled-components';

const FilterWrapper = styled.div`
  margin: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

const Filter = ({ onFilter }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0);

  const handleFilter = () => {
    onFilter(title, rating);
  };

  return (
    <FilterWrapper>
      <Input
        type="text"
        placeholder="Filter by title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Filter by rating..."
        value={rating}
        onChange={(e) => setRating(parseInt(e.target.value))}
      />
      <button onClick={handleFilter}>Filter</button>
    </FilterWrapper>
  );
};

export default Filter;
