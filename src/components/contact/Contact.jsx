import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Container, Span } from './Contact_Style';
import Button from 'components/button/Button';
import titleCase from 'service/titleCase';

export const Contact = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <Container>
        <Span>{titleCase(name)}</Span>
        <Span>{number}</Span>
      </Container>
      <Button type="button" clickBtn={handleDelete}>
        Delete
      </Button>
    </>
  );
};
