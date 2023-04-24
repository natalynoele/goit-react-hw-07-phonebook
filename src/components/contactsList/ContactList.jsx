import { useSelector } from 'react-redux';
import { getVisibleContacts } from 'service/getVisibleContacts';
import { selectContacts, selectFilter } from 'redux/selectors';
import { Contact } from 'components/contact/Contact';
import { Item } from './ContactList_Style';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);
  return (
    visibleContacts && (
      <ul>
        {visibleContacts.map(contact => (
          <Item key={contact.id}>
            <Contact contact={contact} />
          </Item>
        ))}
      </ul>
    )
  );
};

export default ContactList;
