import React from "react";
import { Box, useDisclosure } from "@chakra-ui/react";
import { Navbar, ModalPosting } from "components";

export default function MainLayout({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Navbar openPosting={onOpen} />
      <Box
        px={{ base: 0, sm: 0, md: 4, lg: 4 }}
        maxW="36rem"
        margin="auto"
        mb={10}
        mt="6rem"
      >
        {children}
      </Box>
      <ModalPosting isOpen={isOpen} onClose={onClose} />
    </>
  );
}
