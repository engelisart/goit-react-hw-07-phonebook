import React from 'react';
import { ContactItem, ContactItemButton } from './ContactLictItem.styled';

export const ContactListItem = ({ contact, onDeleteContact }) => (
  <ContactItem>
    {contact.fullname}: {contact.phone}
    <ContactItemButton onClick={() => onDeleteContact(contact.id)}>
      Delete
    </ContactItemButton>
  </ContactItem>
);
