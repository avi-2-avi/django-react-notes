import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Heading, Flex, Textarea, Divider, IconButton } from "@chakra-ui/react";
import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NoteLayout } from "../layout/NoteLayout";

interface Note {
  tittle: string;
  body: string;
}

export const NotePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [note, setNote] = useState({ tittle: "", body: "" });

  const onChangeNote = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { name, value },
    } = event;

    setNote({ ...note, [name]: value });
  };

  const onGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const getNote = async () => {
      const response: AxiosResponse<Note> = await axios.get(
        `http://localhost:8000/api/note/${id}/`
      );
      setNote(response.data);
    };
    getNote();
  }, []);

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
          pl="4"
          pr="6"
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
          <Heading as="h2" size="md">
            Delete
          </Heading>
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
