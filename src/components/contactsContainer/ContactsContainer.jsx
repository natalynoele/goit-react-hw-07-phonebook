import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectError } from 'redux/selectors';

const ContactsContainer = ({ children }) => {
  const isError = useSelector(selectError);

  return isError ? (
    toast.error(isError)
  ) : (
    <>
      <h2>Contacts</h2>
      {children}
    </>
  );
};

export default ContactsContainer;
