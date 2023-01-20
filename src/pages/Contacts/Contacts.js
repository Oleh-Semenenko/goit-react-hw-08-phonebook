import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError } from 'redux/contacts/selectors';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Box, Flex, Heading, Container } from '@chakra-ui/react';

export default function Contacts() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box as="main" paddingY="20px" bg="#F1F1F1" h="100vh">
      <Container maxW="100%" marginX="auto" paddingX="44px" bg="#F1F1F1">
        <Heading
          align="center"
          mb="44px"
          fontFamily="Merriweather Sans"
          fontWeight={400}
          fontSize="36px"
        >
          Phonebook
        </Heading>
        <Flex gap="32px" justify="space-between">
          <ContactForm />
          <Box
            border="1px"
            borderColor="#000"
            padding="20px"
            width="50%"
            h="380px"
          >
            <Heading
              align="center"
              fontFamily="Merriweather Sans"
              fontWeight={400}
              fontSize="32px"
              mb="20px"
            >
              Contacts
            </Heading>
            <Filter />
            {error && <p>Something goes wrong</p>}
            <Box overflowY="auto" h="230px" >
              <ContactList />
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
