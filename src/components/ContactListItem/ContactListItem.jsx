import React from 'react';
import { ContactItem, ContactItemButton } from './ContactLictItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'store/contactsThunk';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContactThunk(contactId));
  };
  return (
    <>
      <ContactItem>
        {contact.fullname}: {contact.phone}
        <ContactItemButton onClick={() => handleDeleteContact(contact.id)}>
          Delete
        </ContactItemButton>
      </ContactItem>
    </>
  );
};
