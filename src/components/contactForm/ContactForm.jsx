import { useState } from 'react';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Form, Label, Input } from './ContactForm_Style';
import { INFO } from 'redux/constants';
import titleCase from 'service/titleCase';
import Btn from 'components/button/Button_Style';

const ContactForm = () => {
  const [contact, setContact] = useState({
    name: '',
    number: '',
  });

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const resetForm = () => {
    setContact({ name: '', number: '' });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const normalizeName = e.target.elements.name.value.toLowerCase();
    if (
      contacts.length > 0 &&
      contacts.find(contact => contact.name.toLowerCase() === normalizeName)
    ) {
      toast.info(`${titleCase(normalizeName)}${INFO.sameName}`);
      resetForm();
      return;
    }
    dispatch(addContact({ name, number }));
    resetForm();
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setContact(prevState => ({ ...prevState, [name]: value }));
  };
  const { name, number } = contact;

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">Name</Label>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        required
        onChange={handleChange}
      />
      <Label htmlFor="number">Number</Label>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={number}
        required
        onChange={handleChange}
      />
      <Btn type="submit">Add contact</Btn>
    </Form>
  );
};

export default ContactForm;
