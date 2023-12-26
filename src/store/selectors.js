export const selectLoading = state => state.phonebook.isLoading;
export const selectError = state => state.phonebook.error;
export const selectorContacts = state => state.phonebook.contacts.items;
export const selectorFilter = state => state.phonebook.filter;
