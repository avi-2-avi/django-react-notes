import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { NewNotePage } from "./pages/NewNotePage";
import { NotePage } from "./pages/NotePage";
import { NotesListPage } from "./pages/NotesListPage";
import { theme } from "./theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NotesListPage />,
  },
  {
    path: "/:id",
    element: <NotePage />,
  },
  {
    path: "/new/note",
    element: <NewNotePage />,
  },
  {
    path: "/*",
    element: <Navigate to="/" />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
