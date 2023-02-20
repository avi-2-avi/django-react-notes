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
import { ListItem } from "../components/ListItem";
import { NoteLayout } from "../layout/NoteLayout";

export const NotesListPage = () => {
  const scrollbar = {
    "::-webkit-scrollbar": {
      display: "none",
    },
  };

  const onClickItem = () => {
    console.log("Works!");
  };

  return (
    <>
      <NoteLayout>
        <Flex w="full" px={5}>
          <Heading pb={6} size="lg" as="h2">
            <HamburgerIcon mb={1} /> Notes
          </Heading>
          <Spacer />
          <Text fontSize="xl" pt="4" color="white.400">
            3
          </Text>
        </Flex>
        <VStack minH="340px" overflowY="auto" sx={scrollbar}>
          <ListItem
            tittle="Tit"
            description="Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello "
            updateDate="12/12/2022"
            onClick={onClickItem}
          />
        </VStack>
        <Flex w="full" justifyContent="end" bg="#2E3134" p={6} maxW="full">
          <IconButton
            aria-label="Add note"
            icon={<AddIcon />}
            colorScheme="orange"
            rounded="full"
            size="lg"
          />
        </Flex>
      </NoteLayout>
    </>
  );
};
