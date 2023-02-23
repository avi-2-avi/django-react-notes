import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
  Heading,
  Flex,
  Textarea,
  Divider,
  IconButton,
  Button,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postNote } from "../api/notesApi";
import { NoteLayout } from "../layout/NoteLayout";

const noteData = { tittle: "", body: "" };

export const NewNotePage = () => {
  const navigate = useNavigate();
  const [note, setNote] = useState(noteData);
  const toast = useToast();

  const onChangeNote = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { name, value },
    } = event;

    setNote({ ...note, [name]: value });
  };

  const onResetNote = () => {
    setNote(noteData);
  };

  const onSaveNote = () => {
    if (note.tittle === "") {
      if (note.body === "") {
        toast({
          description: "At least add a title to save your note",
          status: "warning",
        });
      } else {
        toast({
          description: "Adding a title to your note is required",
          status: "warning",
        });
      }
      return;
    }

    try {
      postNote(note);

      navigate(-1);
    } catch (e) {
      toast({
        description: `Error saving the note: ${(e as Error).message}`,
        status: "error",
      });
    }
  };

  const onGoBack = () => {
    navigate(-1);
  };

  const scrollbar = {
    "::-webkit-scrollbar": {
      display: "none",
    },
  };

  return (
    <>
      <NoteLayout>
        <Flex
          w="full"
          alignItems="center"
          justify="space-between"
          px="4"
          h="5vh"
        >
          <Heading as="h2">
            <IconButton
              fontSize="3xl"
              background="inherit"
              rounded="full"
              onClick={onGoBack}
              aria-label="Go back to the list"
              icon={<ChevronLeftIcon />}
            />
          </Heading>
          <Flex columnGap={4}>
            <Heading as="h2" size="md">
              <Button background="inherit" onClick={onResetNote}>
                Delete
              </Button>
            </Heading>
            <Heading as="h2" size="md">
              <Button background="inherit" onClick={onSaveNote}>
                Save
              </Button>
            </Heading>
          </Flex>
        </Flex>
        <Textarea
          variant="unstyled"
          resize="none"
          value={note?.tittle}
          onChange={onChangeNote}
          name="tittle"
          size="lg"
          p={6}
          h="10vh"
          fontWeight="bold"
          maxLength={50}
        />
        <Divider />
        <Textarea
          sx={scrollbar}
          resize="none"
          variant="unstyled"
          h="60vh"
          value={!note?.body ? "" : note?.body}
          onChange={onChangeNote}
          name="body"
          overflow="auto"
          p={6}
        />
      </NoteLayout>
    </>
  );
};
