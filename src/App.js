import { useState, useEffect } from 'react';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { v4 as uuidv4 } from 'uuid';
import s from 'App.module.css';

function App() {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(localStorage.getItem('Contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('Contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = (name, number) => {
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const NewContact = {
      name,
      number,
      id: uuidv4(),
    };

    setContacts(prevState => [NewContact, ...prevState]);
  };

  const handleDeleteContact = id => {
    setContacts(state => state.filter(contact => contact.id !== id));
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  return (
    <div>
      <h2 className={s.title}>Phonebook</h2>
      <ContactForm onSubmit={handleSubmit} />
      {contacts.length > 1 && <Filter filter={filter} onChange={changeFilter} />}
      <h2 className={s.title}>Contacts</h2>
      <ContactList contacts={getFilteredContacts()} deleteContacts={handleDeleteContact} />
    </div>
  );
}

export default App;
