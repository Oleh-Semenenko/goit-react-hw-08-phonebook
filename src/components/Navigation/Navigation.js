import { Box, Link } from '@chakra-ui/react';
import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box as="nav">
      <Link
        as={NavLink}
        color="#282828"
        fontFamily="Merriweather Sans"
        fontSize={24}
        fontWeight={300}
        _hover={{ color: '#188C69' }}
        _activeLink={{ color: '#188C69' }}
        mr="72px"
        to="/"
      >
        Home
      </Link>
      {isLoggedIn && (
        <Link
          as={NavLink}
          color="#282828"
          fontFamily="Merriweather Sans"
          fontSize={24}
          fontWeight={300}
          _hover={{ color: '#188C69' }}
          _activeLink={{ color: '#188C69' }}
          to="/contacts"
        >
          Contacts
        </Link>
      )}
    </Box>
  );
};
