import { AddIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Text,
  Flex,
  Heading,
  Spacer,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ListItem } from "../components/ListItem";
import { NoteLayout } from "../layout/NoteLayout";

import axios, { AxiosResponse } from "axios";

interface Note {
  id: number;
  tittle: string;
  description: string;
}

export const NotesListPage = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    async function getNotes() {
      const response: AxiosResponse<Note[]> = await axios.get(
        "http://localhost:8000/api/notes/"
      );
      console.log(response);
      setNotes(response.data);
    }
    getNotes();
  }, []);

  console.log(notes);

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
          {notes.map((note: Note) => (
            <ListItem
              key={note.id}
              tittle={note.tittle}
              description={note.description}
              updateDate="12/12/2022"
              onClick={onClickItem}
            />
          ))}
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
