import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from './contactsThunk';

export const phoneBookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    searchContact: (state, action) => {
      state.filter = action.payload;
    },
  },

  extraReducers: bilder => {
    bilder
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = payload;
        state.contacts.isLoading = false;
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.items.push(payload);
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = state.contacts.items.filter(
          item => item.id !== payload.id
        );
      })
      .addCase(fetchContactsThunk.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(addContactThunk.pending, (state, { payload }) => {
        state.contacts.isLoading = true;
      })
      .addCase(deleteContactThunk.pending, (state, { payload }) => {
        state.contacts.isLoading = true;
      })
      .addCase(fetchContactsThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.contacts.isLoading = false;
      })
      .addCase(addContactThunk.rejected, (state, { payload }) => {
        state.contacts.error = payload;
        state.contacts.isLoading = false;
      })
      .addCase(deleteContactThunk.rejected, (state, { payload }) => {
        state.contacts.error = payload;
        state.contacts.isLoading = false;
      });
  },
});

export const phoneReducer = phoneBookSlice.reducer;

export const { searchContact } = phoneBookSlice.actions;

// reducers: {
//     fetchingData: (state, { payload }) => {
//       state.contacts.items = payload;
//       state.contacts.isLoading = false;
//     },

//     isPending: (state, { payload }) => {
//       state.contacts.isLoading = true;
//       state.contacts.error = '';
//     },

//     isError: (state, { payload }) => {
//       state.contacts.error = payload;
//       state.contacts.isLoading = false;
//     },

//     addContact: (state, action) => {
//       state.contacts.push(action.payload);
//     },

//     deleteContact: (state, { payload }) => {
//       state.contacts = state.contacts.filter(contact => contact.id !== payload);
//     },

//     searchContact: (state, action) => {
//       state.filter = action.payload;
//     },
//   },
