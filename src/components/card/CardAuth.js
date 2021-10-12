import { Box } from "@chakra-ui/react";

const CardAuth = ({ children, ...rest }) => {
  return (
    <Box w={{ base: "auto", lg: "full" }} margin="auto" bg="white" {...rest}>
      {children}
    </Box>
  );
};

export default CardAuth;
