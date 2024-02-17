import React, { useEffect, useState } from 'react';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const stringifiendContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', stringifiendContacts);
  }, [contacts]);

  const handleAddContact = formData => {
    const hasDuplicates = contacts.some(
      contact => contact.name === formData.name
    );
    if (hasDuplicates) {
      alert(`${formData.name} is already in contacts!`);
      return;
    }
    const finalContact = {
      ...formData,
      id: nanoid(),
    };
    setContacts(prevState => [...prevState, finalContact]);
  };

  const handleDeleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const handleChangeFilter = event => {
    const value = event.target.value;
    this.setState({ filter: value });
    setFilter(value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.trim().toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />

      <h2>Contacts</h2>
      <Filter filterValue={filter} handleChangeFilter={handleChangeFilter} />
      <ContactList
        contacts={filteredContacts}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
};
