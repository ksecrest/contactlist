import { useState } from 'react';
import ContactList from './components/contacts/ContactList';
import ContactForm from './components/contacts/ContactForm';
const App = ({}) => {
  const [contacts, setContacts] = useState([
    { id: 1, firstName: "Tom", phone: "123-123-1233" },
    { id: 2, firstName: "Jerry", phone: "333-123-1233" },
    { id: 3, firstName: "Patrick", phone: "323-123-1233" },
  ])
  const getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  const addContact = (incomingContact) => {
    // need to do because no db
    let newContact = { id: getId(), ...incomingContact}
    // let newContact = { id: getId(), firstName: incommingContact.firstName, phone: incommingContact.phone}
    setContacts([...contacts, newContact])
  }
  const deleteContact = (id) => {
    setContacts(contacts.filter( c => c.id !== id))
  }
  const updateContact = (id, incomingContact) => {
    const updatedContacts = contacts.map( c =>  {
      if (c.id === id) {
        return incomingContact
      }
      return c
    })
    setContacts(updatedContacts)
  }
  return (
    <>
      <h1>React Contact List!</h1>
      <ContactForm addContact={addContact} />
      <ContactList 
        contacts={contacts} 
        deleteContact={deleteContact}
        updateContact={updateContact}
      />
    </>
  )
}
export default App;