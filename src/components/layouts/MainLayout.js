import React from "react";
import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import { Navbar, ModalPosting, ModalSearch } from "components";
import UserContext from "context/user/UserContext";

export default function MainLayout({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    isOpen: isOpenSearch,
    onOpen: onOpenSearch,
    onClose: onCloseSearch,
  } = useDisclosure();

  const { getUserInfo, userProfile } = React.useContext(UserContext);

  React.useEffect(() => {
    const verifyUser = async () => {
      await getUserInfo()
        .then((res) => {
          console.log("user logged in");
        })
        .catch((err) => {
          if (err.response.status === 400) {
            localStorage.clear();
            window.location.href = "/";
          }
        });
    };

    verifyUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar
        openPosting={onOpen}
        openSearch={onOpenSearch}
        user={userProfile}
      />
      <Flex justifyContent="center">
        <Box
          px={{ base: 0, sm: 0, md: 4, lg: 4 }}
          maxW="100%"
          margin="auto"
          mb={10}
          mt="5.5rem"
        >
          {children}
        </Box>
      </Flex>
      <ModalPosting isOpen={isOpen} onClose={onClose} />
      <ModalSearch isOpenSearch={isOpenSearch} onCloseSearch={onCloseSearch} />
    </>
  );
}
