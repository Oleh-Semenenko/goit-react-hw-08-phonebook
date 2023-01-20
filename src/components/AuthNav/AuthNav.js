import { HStack, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <HStack spacing={10}>
      <Link
        as={NavLink}
        color="#282828"
        fontFamily="Merriweather Sans"
        fontSize={24}
        fontWeight={300}
        _hover={{ color: '#188C69' }}
        _activeLink={{ color: '#188C69' }}
        to="/register"
      >
        Register
      </Link>
      <Link
        as={NavLink}
        color="#282828"
        fontFamily="Merriweather Sans"
        fontSize={24}
        fontWeight={300}
        _hover={{ color: '#188C69' }}
        _activeLink={{ color: '#188C69' }}
        to="/login"
      >
        Log In
      </Link>
    </HStack>
  );
};
