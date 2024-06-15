import styles from './App.module.css';
// import { useState, useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import {
  addContact,
  deleteContact,
  selectContacts,
} from '../../redux/contactsSlice';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast';

// const initialContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const App = () => {
  // Ініціалізація стану з локального сховища або початкових контактів
  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = localStorage.getItem('contacts');
  //   return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  // });

  // const [searchQuery, setSearchQuery] = useState('');

  // Збереження контактів у localStorage при зміні списку контактів
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const searchQuery = useSelector(selectNameFilter);

  const handleAddContact = newContact => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      iziToast.error({
        title: 'Error',
        message: `${newContact.name} is already in contacts.`,
        position: 'topCenter',
        timeout: 5000,
        backgroundColor: '#F44336',
        titleColor: '#FFFFFF',
        messageColor: '#FFFFFF',
        titleSize: '24px',
        messageSize: '22px',
        class: styles.customToast,
      });
      return;
    }
    dispatch(addContact(newContact));
  };

  const handleSearch = query => {
    dispatch(changeFilter(query));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1 className={styles.h1}>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />
      <SearchBox searchQuery={searchQuery} handleSearch={handleSearch} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};
export default App;
