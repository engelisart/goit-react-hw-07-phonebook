import React from 'react';
import { FilterContacts, FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { searchContact } from 'store/createSlice';
import { selectorFilter } from 'store/selectors';

export const Filter = ({ value, onChange }) => {
  const dispatch = useDispatch();

  const filter = useSelector(selectorFilter);

  const handleFilterChange = event => {
    dispatch(searchContact(event.target.value));
  };

  return (
    <>
      <FilterContacts value={filter} onChange={handleFilterChange}>
        Find contacts by name
        <FilterInput
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
          placeholder="Search contacts"
        />
      </FilterContacts>
    </>
  );
};
