import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Button: {
      variants: {
        gray: {
          background: "#A7A7A7",
          color: "white",
          _hover: {
            background: "#696969",
          },
        },
      },
    },
  },
  styles: {
    global: {
      html: {
        scorllBehavior: "smooth",
      },
      "button:focus": {
        outline: "none",
        border: "0",
        boxShadow: "none !important",
      },
      /* width */
      "::-webkit-scrollbar": {
        width: "4px",
      },

      /* Track */
      "::-webkit-scrollbar-track": {
        background: "#f1f1f1",
      },

      /* Handle */
      "::-webkit-scrollbar-thumb": {
        background: "gray.200",
      },

      /* Handle on hover */
      "::-webkit-scrollbar-thumb:hover": {
        background: "#555",
      },
    },
  },
});

export default theme;
