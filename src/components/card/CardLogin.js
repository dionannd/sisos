import { Box } from "@chakra-ui/react";

const CardLogin = ({ children, ...rest }) => {
  return (
    <Box w="full" bg="white" {...rest}>
      {children}
    </Box>
  );
};

export default CardLogin;
