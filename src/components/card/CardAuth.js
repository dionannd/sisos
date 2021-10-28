import { Flex } from "@chakra-ui/react";

const CardAuth = ({ children, ...rest }) => {
  return (
    <Flex alignItems="center" justifyContent="center" w="100%" {...rest}>
      {children}
    </Flex>
  );
};

export default CardAuth;
