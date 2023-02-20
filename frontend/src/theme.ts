import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        bg: "#1E2124",
        color: "white",
      },
      h1: {
        color: "white",
      },
      h2: {
        color: "orange.400",
      },
      h3: {
        color: "white",
      },
    },
  },
});
