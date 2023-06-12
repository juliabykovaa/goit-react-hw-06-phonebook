import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import { ContactBook } from './ContactBook/ContactBook';
import { Filter } from './FilterContactBook/FilterContactBook';
import { nanoid } from 'nanoid';
import { Container, Header } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { create, setFilter, toDelete } from 'store/contactSlice';

function App() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const addToContacts = ({ name, number }) => {
    if (contacts.some(contact => contact.name === name)) {
      alert('This contact is already in your contact book');
    } else {
      const contactToAdd = {
        id: nanoid(),
        name,
        number,
      };
      dispatch(create(contactToAdd));
    }
  };

  const deleteContact = contactId => {
    dispatch(toDelete(contactId));
  };

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  const getFilteredContacts = () => {
    const filterNormalized = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalized)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <>
      <Container>
        <Header>Phonebook</Header>
        <ContactForm onSubmit={addToContacts} contacts={contacts} />

        <Header>Contacts</Header>
        <Filter value={filter} onChange={changeFilter} />
        {filteredContacts.length ? (
          <ContactBook
            contacts={filteredContacts}
            onDeleteContact={deleteContact}
          />
        ) : (
          <p>No contacts</p>
        )}
      </Container>
    </>
  );
}

export default App;
