import videoBg from '../../media/videoBg.mp4';
import { useSelector } from 'react-redux';
import { Box, Heading, Flex, Spinner } from '@chakra-ui/react';
import { selectIsLoading } from 'redux/contacts/selectors';

export default function HomePage() {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      {isLoading ? (
        <Flex
          w="100%"
          h="100vh"
          align="center"
          justify="center"
          paddingY="400px"
        >
          <Spinner
            size="xl"
            color="#188C69"
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
          />
        </Flex>
      ) : (
        <Box as="main" position="relative">
          <Heading
            as="h1"
            position="absolute"
            top="10px"
            right="20px"
            color="#fff"
          >
            Welcome to contact book
          </Heading>
          <video src={videoBg} autoPlay loop muted></video>
        </Box>
      )}
    </>
  );
}
