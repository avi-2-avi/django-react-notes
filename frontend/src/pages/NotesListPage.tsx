import { AddIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Text,
  Flex,
  Heading,
  Spacer,
  IconButton,
  VStack,
  Link,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ListItem } from "../components/ListItem";
import { NoteLayout } from "../layout/NoteLayout";
import { Link as ReachLink } from "react-router-dom";

import axios, { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

interface Note {
  id: number;
  tittle: string;
  body: string;
  updated: string;
}

const formattedDate = (strDate: string) => {
  const date = new Date(strDate);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export const NotesListPage = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const navigate = useNavigate();

  const onNewNote = () => {
    navigate("/new/note");
  };

  useEffect(() => {
    const getNotes = async () => {
      const response: AxiosResponse<Note[]> = await axios.get(
        "http://localhost:8000/api/notes/"
      );
      setNotes(response.data);
    };
    getNotes();
  }, []);

  const scrollbar = {
    "::-webkit-scrollbar": {
      display: "none",
    },
  };

  return (
    <>
      <NoteLayout>
        <Flex w="full" px={6} h="10vh">
          <Heading pb={6} size="lg" as="h2">
            <HamburgerIcon mb={1} /> Notes
          </Heading>
          <Spacer />
          <Text fontSize="xl" alignItems="center" color="white.400">
            {notes.length}
          </Text>
        </Flex>
        <VStack overflowY="auto" sx={scrollbar} h="50vh">
          {notes.map((note: Note) => (
            <Link
              key={note.id}
              as={ReachLink}
              to={`/${note.id}`}
              width="full"
              _hover={{ textDecor: "none" }}
            >
              <ListItem
                key={note.id}
                tittle={note.tittle}
                body={note.body}
                updateDate={formattedDate(note.updated)}
              />
            </Link>
          ))}
        </VStack>
        <Flex
          w="full"
          justifyContent="end"
          bg="#2E3134"
          p={6}
          maxW="full"
          h="15vh"
        >
          <IconButton
            aria-label="Add note"
            icon={<AddIcon />}
            colorScheme="orange"
            rounded="full"
            size="lg"
            onClick={onNewNote}
          />
        </Flex>
      </NoteLayout>
    </>
  );
};
