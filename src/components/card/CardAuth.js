import { Box } from "@chakra-ui/react";

const CardAuth = ({ children, ...rest }) => {
  return (
    <Box w="full" margin="auto" bg="white" {...rest}>
      {children}
    </Box>
  );
};

export default CardAuth;
