import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Button: {
      variants: {
        gray: {
          background: "#A7A7A7",
          color: "white",
          _hover: {
            background: "gray.500",
            boxShadow: "md",
          },
        },
      },
    },
  },
});

export default theme;
