import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BookContacts, ContactsTitle } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import { searchContact } from 'store/createSlice';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from 'store/contactsThunk';
import { selectError, selectLoading } from 'store/selectors';

export const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.phonebook.contacts);
  const filter = useSelector(state => state.phonebook.filter);

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const handleAddContact = newContact => {
    const copyContact = contacts.items.find(
      contact =>
        contact.fullname.toLowerCase() === newContact.fullname.toLowerCase()
    );
    if (copyContact) {
      alert(`${newContact.fullname} is already in contacts.`);
      return;
    }
    dispatch(addContactThunk(newContact));
  };

  const handleFilterChange = event => {
    dispatch(searchContact(event.target.value));
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.items.filter(contact =>
      contact.fullname.toLowerCase().includes(normalizedFilter)
    );
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContactThunk(contactId));
  };

  const filteredContacts = getFilteredContacts();

  return (
    <BookContacts>
      <h1>Phonebook</h1> <br />
      <ContactForm addContact={handleAddContact} />
      <div>
        <ContactsTitle>Contacts</ContactsTitle> <br />
        <Filter value={filter} onChange={handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={handleDeleteContact}
        />
      </div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
    </BookContacts>
  );
};
