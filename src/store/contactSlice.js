import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    toDelete: {
      reducer: (state, { payload }) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload
        );
      },
    },
    create: {
      reducer: (state, { payload }) => {
        state.contacts.push(payload);
      },
    },
    setFilter: {
      reducer: (state, { payload }) => {
        state.filter = payload;
      },
    },
  },
});

export const contactReducer = contactSlice.reducer;
export const { create, setFilter, toDelete } = contactSlice.actions;
