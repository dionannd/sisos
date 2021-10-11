import React from "react";
import { Box } from "@chakra-ui/react";
import { Navbar } from "components";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <Box maxW="47em" margin="auto" mt={5} mb={10}>
        {children}
      </Box>
    </>
  );
}
