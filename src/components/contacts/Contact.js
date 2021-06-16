import { useState } from 'react';
import ContactForm from './ContactForm';
const Contact = ({ id, firstName, phone, deleteContact, updateContact }) => {
  const [editing, setEditing] = useState(false)
  return(
    <>
      <h1>{firstName} with id: {id}</h1>
      <p>{phone}</p>
      <button onClick={() => deleteContact(id)}>Delete</button>
      {/* <button onClick={deleteContact(id)}>Delete</button> */}
      { editing ? 
        <>
          <ContactForm 
          id={id} 
          firstName={firstName} 
          phone={phone} 
          updateContact={updateContact} 
          setEditing={setEditing} />
          <button onClick={() => setEditing(!editing)}>cancel</button>
        </>
        :
        <button onClick={() => setEditing(!editing)}>Edit</button>
      }
    </>
  )
}
export default Contact;