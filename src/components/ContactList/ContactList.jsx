import React, { useEffect } from 'react';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectorContacts, selectorFilter } from 'store/selectors';
import { fetchContactsThunk } from 'store/contactsThunk';

export const ContactList = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectorFilter);
  const contacts = useSelector(selectorContacts);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const getFilteredContacts = () => {
    if (filter) {
      return contacts.filter(contact =>
        contact.fullname.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      return contacts;
    }
  };

  return (
    <List>
      {getFilteredContacts().map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
