import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts, selectIsContactAdded } from 'redux/contacts/selectors';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  CircularProgress,
  useToast,
} from '@chakra-ui/react';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const isContactAdded = useSelector(selectIsContactAdded);
  const dispatch = useDispatch();

  const toast = useToast();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const newContact = contacts.find(contact => contact.name === name);
    if (newContact && isContactAdded) {
      toast({
        position: 'top-right',
        render: () => (
          <Box
            color="white"
            p={3}
            bg="#e84a5f"
            borderRadius="10px"
            textAlign="center"
          >
            {name} is already in contacts
          </Box>
        ),
      });
      return;
    }
    if (isContactAdded) {
      toast({
        position: 'top-right',
        render: () => (
          <Box
            color="white"
            p={3}
            bg="#188C69"
            borderRadius="10px"
            textAlign="center"
          >
            The new contact was created!
          </Box>
        ),
      });
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');

    form.reset();
  };

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <Box
      as="form"
      maxWidth="660px"
      h="380px"
      width="50%"
      border="1px"
      borderColor="#000"
      padding="24px"
      onSubmit={handleSubmit}
      textAlign="center"
    >
      <FormControl isRequired mb="32px">
        <FormLabel
          fontFamily="Merriweather Sans"
          fontWeight={300}
          fontSize="24px"
        >
          Name
        </FormLabel>
        <Input
          type="text"
          name="name"
          onChange={handleChange}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          borderColor="#188C69"
          borderWidth="1px"
          bg="#fff"
          required
        />
      </FormControl>
      <FormControl isRequired mb="32px">
        <FormLabel
          fontFamily="Merriweather Sans"
          fontWeight={300}
          fontSize="24px"
        >
          Number
        </FormLabel>
        <Input
          type="tel"
          name="number"
          onChange={handleChange}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          borderColor="#188C69"
          borderWidth="1px"
          bg="#fff"
          required
        />
      </FormControl>
      <Button
        fontFamily="Merriweather Sans"
        fontWeight={300}
        fontSize="20px"
        type="submit"
        paddingX="20px"
        paddingY="12px"
        w="160px"
        borderColor="#188C69"
        borderWidth="1px"
        _hover={{ bg: '#188C69', borderColor: 'transparent', color: '#fff' }}
      >
        {!isContactAdded ? (
          <CircularProgress isIndeterminate size="24px" color="#188C69" />
        ) : (
          'Add contact'
        )}
      </Button>
    </Box>
  );
};
