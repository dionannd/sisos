import { Flex } from "@chakra-ui/react";

const CardAuth = ({ children, ...rest }) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      w={{ base: "100%", md: "50%", lg: "50%" }}
      {...rest}
    >
      {children}
    </Flex>
  );
};

export default CardAuth;
