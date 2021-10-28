import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Button: {
      variants: {
        gray: {
          background: "gray.500",
          color: "white",
          _hover: {
            background: "gray.600",
          },
          _active: {
            background: "#A7A7A7",
          },
        },
        "edit-profile": {
          background: "transparant",
          borderWidth: "1px",
          borderColor: "gray.200",
          _hover: {
            borderWidth: "1px",
            borderColor: "gray.400",
          },
          _focus: {
            color: "gray.400",
            borderWidth: "1px",
            borderColor: "gray.400",
          },
          _active: {
            borderWidth: "1px",
          },
        },
      },
    },
    Tabs: {
      variants: {
        unstyled: {
          paddingY: "4",
          marging: "0",
          tab: {
            _selected: {
              background: "gray.500",
              color: "white",
              boxShadow: "none",
            },
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
