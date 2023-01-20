import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { Contact } from 'components/Contact/Contact';
import { UnorderedList } from '@chakra-ui/react';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <UnorderedList paddingX="10px" m='0'>
      {contacts.map(({ id, name, number }) => {
        return <Contact key={id} id={id} name={name} number={number} />;
      })}
    </UnorderedList>
  );
};
