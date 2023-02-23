import { Container, Flex, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface NoteLayoutProps {
  children: ReactNode;
}

export const NoteLayout = ({ children }: NoteLayoutProps) => {
  return (
    <Container maxW="xl" px={5}>
      <Flex bg="#292A2D" px={5} mt={10}>
        <Heading py={3} as="h1">
          Note List
        </Heading>
      </Flex>
      <Flex direction="column" bg="#2E3134" py={6} h="75vh">
        {children}
      </Flex>
    </Container>
  );
};
