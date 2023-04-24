import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';
import Layout from 'components/layout/Layout';
import ContactList from 'components/contactsList/ContactList';
import Filter from 'components/filter/Filter';
import Spinner from 'components/spinner/Spinner';
import ContactForm from 'components/contactForm/ContactForm';
import Container from './App_Style';
import ContactsContainer from 'components/contactsContainer/ContactsContainer';

const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Layout>
        <ContactForm />
        {isLoading && <Spinner />}
        <ContactsContainer>
          <Filter />
          <ContactList />
        </ContactsContainer>
        <ToastContainer />
      </Layout>
    </Container>
  );
};

export default App;
