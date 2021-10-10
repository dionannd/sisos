import React from "react";
import { Box } from "@chakra-ui/react";

export default function MainLayout({ children }) {
  return (
    <Box maxW="60em" margin="auto" mt={10} px={5} mb={20}>
      {children}
    </Box>
  );
}
