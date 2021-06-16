import { useState, useEffect } from 'react';
const ContactForm = ({ addContact, id, firstName, phone, updateContact, setEditing }) => {
  const [contact, setContact] = useState({ firstName: "", phone: "" })
  // const [firstName, setFirstName] = useState("")
  // const [phone, setPhone] = useState("")
  useEffect( () => {
    if (id) {
      // setContact({ firstName: firstName, phone: phone })
      setContact({ firstName, phone, id: id})
    }
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateContact(id, contact)
      setEditing(false)
    } else {
      addContact(contact)
    }
    setContact({ firstName: "", phone: "" })
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        name='firstName'
        value={contact.firstName}
        onChange={(e) => setContact({...contact, firstName: e.target.value })}
        placeholder="Firstname"
        required
      />
      <input
        name='phone'
        value={contact.phone}
        onChange={(e) => setContact({...contact, phone: e.target.value })}
        placeholder="Phone"
        required
      />
      <button>Submit</button>
    </form>
  )
}
export default ContactForm;