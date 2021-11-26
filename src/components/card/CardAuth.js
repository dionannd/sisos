import { Flex } from "@chakra-ui/react";

const CardAuth = ({ children, ...rest }) => {
  return (
    <Flex
      w="32rem"
      maxW="100%"
      h="100vh"
      alignItems="center"
      justifyContent="center"
      bg="#F6F6F6"
    >
      {children}
    </Flex>
  );
};

export default CardAuth;
