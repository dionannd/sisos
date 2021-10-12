import React from "react";
import { Box } from "@chakra-ui/react";
import { Navbar } from "components";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <Box px={10} maxW="50rem" margin="auto" mb={10} mt={5}>
        {children}
      </Box>
    </>
  );
}
