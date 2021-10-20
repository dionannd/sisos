import React from "react";
import { Box, useDisclosure } from "@chakra-ui/react";
import { Navbar, ModalPosting } from "components";
import UserContext from "context/user/UserContext";

export default function MainLayout({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      <Navbar openPosting={onOpen} user={userProfile} />
      <Box
        px={{ base: 0, sm: 0, md: 4, lg: 4 }}
        maxW="36rem"
        margin="auto"
        mb={10}
        mt="5.5rem"
      >
        {children}
      </Box>
      <ModalPosting isOpen={isOpen} onClose={onClose} />
    </>
  );
}
