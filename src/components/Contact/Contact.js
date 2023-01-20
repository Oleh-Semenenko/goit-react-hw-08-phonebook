import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import PropTypes from 'prop-types';
import {
  Flex,
  HStack,
  VStack,
  Avatar,
  Text,
  Button,
} from '@chakra-ui/react';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();


  const handleDelete = () => dispatch(deleteContact(id));
  const firstLetter = name.charAt(0);

  return (
    <Flex as='li'
      borderBottom="1px"
      paddingY="8px"
      justify="space-between"
      align="center"
    >
      <HStack>
        <Avatar
          name={firstLetter}
          color="#000"
          w="60px"
          h="60px"
          borderRadius="50%"
          bg="#D9D9D9"
        />
        <VStack justify="flex-start" align="self-start">
          <Text fontFamily="Merriweather Sans" fontWeight={300} fontSize="16px">
            {name}
          </Text>
          <Text
            fontFamily="Merriweather Sans"
            fontWeight={300}
            fontSize="16px"
            mt="10px"
          >
            {number}
          </Text>
        </VStack>
      </HStack>
      <Button
        type="button"
        onClick={handleDelete}
        borderColor="#188C69"
        borderWidth="1px"
        _hover={{ bg: '#188C69', borderColor: 'transparent', color: '#fff' }}
      >
        Delete
      </Button>
    </Flex>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
