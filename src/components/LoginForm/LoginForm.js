import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  CircularProgress,
} from '@chakra-ui/react';
import { selectError, selectIsLoading } from 'redux/auth/selectors';

export const LoginForm = () => {
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

      dispatch(
        logIn({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
    form.reset();
  };

  return (
    <Box
      as="form"
      width={400}
      mx="auto"
      onSubmit={handleSubmit}
      textAlign="center"
    >
      {error && <ErrorMessage message="Invalid email or password" />}
      <FormControl isRequired mb="16px">
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          borderColor="#188C69"
          borderWidth="1px"
          bg="#fff"
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          borderColor="#188C69"
          borderWidth="1px"
          bg="#fff"
        />
      </FormControl>
      <Button
        type="submit"
        width="200px"
        mt={4}
        borderColor="#188C69"
        borderWidth="1px"
        _hover={{ bg: '#188C69', borderColor: 'transparent', color: '#fff' }}
      >
        {isLoading ? (
          <CircularProgress isIndeterminate size="24px" color="#188C69" />
        ) : (
          'Log in'
        )}
      </Button>
    </Box>
  );
};
