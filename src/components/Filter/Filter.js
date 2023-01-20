import { useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/contacts/filterSlice';
import { Text, HStack, Input } from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    const value = event.currentTarget.value;
    dispatch(setFilterValue(value));
  };

  return (
    <HStack gap="12px" justify="space-between" mb="16px">
      <Text
        minH="50%"
        fontFamily="Merriweather Sans"
        fontWeight={300}
        fontSize="24px"
      >
        Find contacts:
      </Text>
      <Input
        maxW="50%"
        marginInlineStart="0px"
        type="text"
        name="filter"
        onChange={handleChange}
        borderColor="#188C69"
        borderWidth="1px"
        bg="#fff"
      />
    </HStack>
  );
};
