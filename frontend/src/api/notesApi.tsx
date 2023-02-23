import axios, { AxiosResponse } from "axios";

interface Note {
  id: number;
  tittle: string;
  body: string;
  updated: string;
}

interface newNote {
  tittle: string;
  body: string;
}

export const getNotes = async () => {
  const response: AxiosResponse<Note[]> = await axios.get(
    "http://localhost:8000/api/notes/"
  );
  return response.data;
};

export const putNote = async (id: string | undefined, note: newNote) => {
  await axios.put(`http://localhost:8000/api/note/${id}/`, note);
};

export const updateNote = async (id: string | undefined) => {
  await axios.delete(`http://localhost:8000/api/note/${id}/`);
};

export const getNote = async (id: string | undefined) => {
  const response: AxiosResponse<Note> = await axios.get(
    `http://localhost:8000/api/note/${id}/`
  );
  return response.data;
};

export const postNote = async (note: newNote) => {
  await axios.post("http://localhost:8000/api/notes/", note);
};
