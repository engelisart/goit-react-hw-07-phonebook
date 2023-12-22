import React, { useState } from 'react';
import { ContactsForm, LabelForm, Input, Button } from './ContactForm.styled';
// import { nanoid } from '@reduxjs/toolkit';

export const ContactForm = props => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [id, setId] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    props.addContact({ fullname: name, phone: number, id: id });
    setName('');
    setNumber('');
    setId('');
  };

  return (
    <ContactsForm onSubmit={handleSubmit}>
      <LabelForm>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          required
        />
      </LabelForm>
      <LabelForm>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          required
        />
      </LabelForm>
      <Button type="submit">Add Contact</Button>
    </ContactsForm>
  );
};
