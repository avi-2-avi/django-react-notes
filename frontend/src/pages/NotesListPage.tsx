import { AddIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Container,
  Text,
  Flex,
  Heading,
  Spacer,
  IconButton,
  VStack,
} from "@chakra-ui/react";

export const NotesListPage = () => {
  const scrollbar = {
    "::-webkit-scrollbar": {
      display: "none",
    },
  };

  return (
    <>
      <Container maxW="xl" px={5}>
        <Flex bg="#292A2D" px={5} mt={10}>
          <Heading py={3} as="h1">
            Note List
          </Heading>
        </Flex>
        <Flex direction="column" bg="#2E3134" px={5} py={6} h="60vh">
          <Flex w="full">
            <Heading pb={6} size="lg" as="h2">
              <HamburgerIcon mb={1} /> Notes
            </Heading>
            <Spacer />
            <Text fontSize="xl" pt="4" color="white.400">
              3
            </Text>
          </Flex>
          <VStack maxH="full" overflowY="auto" sx={scrollbar}>
            <div>Hello</div>
          </VStack>
        </Flex>
        <Flex w="full" justifyContent="end" bg="#2E3134" p={6}>
          <IconButton
            aria-label="Add note"
            icon={<AddIcon />}
            colorScheme="orange"
            rounded="full"
            size="lg"
          />
        </Flex>
      </Container>
    </>
  );
};
