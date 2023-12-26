import React, { useState } from 'react';
import { ContactsForm, LabelForm, Input, Button } from './ContactForm.styled';
import { selectorContacts } from 'store/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'store/contactsThunk';

export const ContactForm = props => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectorContacts);

  const dispatch = useDispatch();

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

    setName('');
    setNumber('');

    const newContact = {
      fullname: name,
      phone: number,
    };

    const copyContact = contacts.find(
      contact =>
        contact.fullname.toLowerCase() === newContact.fullname.toLowerCase()
    );

    if (copyContact) {
      alert(`${newContact.fullname} is already in contacts.`);
      return;
    }
    dispatch(addContactThunk(newContact));
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
