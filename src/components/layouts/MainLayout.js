import React from "react";
import { Box } from "@chakra-ui/react";
import { Navbar } from "components";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <Box
        px={{ base: 0, sm: 0, md: 4, lg: 4 }}
        maxW="50rem"
        margin="auto"
        mb={10}
        mt="6rem"
      >
        {children}
      </Box>
    </>
  );
}
