import { useSelector } from 'react-redux';

import { BookContacts, ContactsTitle } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import { selectError, selectLoading } from 'store/selectors';

export const App = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <BookContacts>
      <h1>Phonebook</h1> <br />
      <ContactForm />
      <div>
        <ContactsTitle>Contacts</ContactsTitle> <br />
        <Filter />
        <ContactList />
      </div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
    </BookContacts>
  );
};
